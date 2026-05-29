import { NextResponse } from "next/server";

type TokenSection = {
  url: string;
  status?: number;
  ok?: boolean;
  body?: unknown;
  error?: string;
};

type WorksheetSection = {
  url?: string;
  status?: number;
  ok?: boolean;
  raw?: unknown;
  error?: string;
};

type DebugOutput = {
  env: Record<string, string>;
  step: string;
  tokenExchange: TokenSection;
  worksheetLookup: WorksheetSection;
  summary: {
    spreadsheetTitle?: string;
    worksheets?: Array<{ id: unknown; name: string }>;
  };
  error?: string;
};

function safeSerialize(err: unknown): string {
  if (err instanceof Error) return `${err.message}\n${err.stack ?? ""}`;
  return String(err);
}

export async function GET() {
  const debug: DebugOutput = {
    env: {},
    step: "init",
    tokenExchange: { url: "" },
    worksheetLookup: {},
    summary: {},
  };

  // ── 1. Env var audit ─────────────────────────────────────────────────────
  debug.env = {
    ZOHO_CLIENT_ID: process.env.ZOHO_CLIENT_ID
      ? `${process.env.ZOHO_CLIENT_ID.slice(0, 12)}...`
      : "MISSING",
    ZOHO_CLIENT_SECRET: process.env.ZOHO_CLIENT_SECRET
      ? `SET (${process.env.ZOHO_CLIENT_SECRET.length} chars)`
      : "MISSING",
    ZOHO_REFRESH_TOKEN: process.env.ZOHO_REFRESH_TOKEN
      ? `SET (${process.env.ZOHO_REFRESH_TOKEN.length} chars)`
      : "MISSING",
    ZOHO_SPREADSHEET_ID: process.env.ZOHO_SPREADSHEET_ID ?? "MISSING",
    ZOHO_ACCOUNTS_URL:
      process.env.ZOHO_ACCOUNTS_URL ?? "(default) https://accounts.zoho.com",
    ZOHO_SHEET_URL:
      process.env.ZOHO_SHEET_URL ?? "(default) https://sheet.zoho.com",
  };

  console.log("[debug-zoho] env:", debug.env);

  // ── 2. Token exchange ────────────────────────────────────────────────────
  const accountsBase =
    process.env.ZOHO_ACCOUNTS_URL ?? "https://accounts.zoho.com";
  const tokenUrl = `${accountsBase}/oauth/v2/token`;
  debug.tokenExchange.url = tokenUrl;
  debug.step = "token-exchange";

  console.log("[debug-zoho] → token exchange:", tokenUrl);

  let accessToken = "";

  try {
    const tokenRes = await fetch(tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        client_id: process.env.ZOHO_CLIENT_ID ?? "",
        client_secret: process.env.ZOHO_CLIENT_SECRET ?? "",
        refresh_token: process.env.ZOHO_REFRESH_TOKEN ?? "",
      }),
    });

    const rawBody = await tokenRes.text();
    debug.tokenExchange.status = tokenRes.status;
    debug.tokenExchange.ok = tokenRes.ok;

    console.log("[debug-zoho]   token status:", tokenRes.status);
    console.log("[debug-zoho]   token body:", rawBody);

    let parsed: unknown;
    try {
      parsed = JSON.parse(rawBody);
    } catch {
      parsed = { _raw: rawBody };
    }

    if (typeof parsed === "object" && parsed !== null) {
      const obj = parsed as Record<string, unknown>;
      // Store body with access_token masked
      debug.tokenExchange.body = {
        ...obj,
        access_token:
          typeof obj.access_token === "string"
            ? `[SET — ${obj.access_token.length} chars]`
            : obj.access_token,
      };
      if (typeof obj.access_token === "string") {
        accessToken = obj.access_token;
        console.log("[debug-zoho] ✓ access token obtained");
      }
    } else {
      debug.tokenExchange.body = { _raw: rawBody };
    }

    if (!accessToken) {
      debug.tokenExchange.error =
        "access_token absent or not a string in response";
      return NextResponse.json<DebugOutput>({
        ...debug,
        error: "Token exchange failed — see tokenExchange.body for Zoho's exact error",
      });
    }
  } catch (err) {
    debug.tokenExchange.error = safeSerialize(err);
    console.error("[debug-zoho] ✗ token exchange threw:", debug.tokenExchange.error);
    return NextResponse.json<DebugOutput>({
      ...debug,
      error: "Token exchange threw an exception",
    });
  }

  // ── 3. Worksheet list ────────────────────────────────────────────────────
  // Correct endpoint: GET /api/v2/{id}?method=worksheet.list
  // (NOT /api/v2/{id}/worksheets — that path does not exist in the Zoho Sheet Data API v2)
  const sheetBase = process.env.ZOHO_SHEET_URL ?? "https://sheet.zoho.com";
  const worksheetUrl = `${sheetBase}/api/v2/${process.env.ZOHO_SPREADSHEET_ID}?method=worksheet.list`;
  debug.worksheetLookup.url = worksheetUrl;
  debug.step = "worksheet-lookup";

  console.log("[debug-zoho] → worksheet.list:", worksheetUrl);

  try {
    const metaRes = await fetch(worksheetUrl, {
      method: "GET",
      headers: { Authorization: `Zoho-oauthtoken ${accessToken}` },
    });

    const rawMeta = await metaRes.text();
    debug.worksheetLookup.status = metaRes.status;
    debug.worksheetLookup.ok = metaRes.ok;

    console.log("[debug-zoho]   worksheet status:", metaRes.status);
    console.log("[debug-zoho]   worksheet body:", rawMeta);

    let parsedMeta: unknown;
    try {
      parsedMeta = JSON.parse(rawMeta);
    } catch {
      parsedMeta = { _raw: rawMeta };
    }

    debug.worksheetLookup.raw = parsedMeta;

    if (typeof parsedMeta === "object" && parsedMeta !== null) {
      const obj = parsedMeta as Record<string, unknown>;

      // worksheet.list response: { worksheet_names: [{ worksheet_id, worksheet_name }], status }
      const list = obj.worksheet_names;
      if (Array.isArray(list)) {
        debug.summary.worksheets = list.map((w: unknown) => {
          const row = w as Record<string, unknown>;
          return {
            id: row.worksheet_id,
            name: String(row.worksheet_name ?? ""),
          };
        });
        console.log("[debug-zoho] ✓ worksheets:", debug.summary.worksheets);
      }
    }
  } catch (err) {
    debug.worksheetLookup.error = safeSerialize(err);
    console.error("[debug-zoho] ✗ worksheet lookup threw:", debug.worksheetLookup.error);
  }

  debug.step = "complete";
  console.log("[debug-zoho] done");
  return NextResponse.json<DebugOutput>(debug);
}
