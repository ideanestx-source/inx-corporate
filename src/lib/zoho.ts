export type LeadRow = {
  Date: string;
  "Lead ID": string;
  Name: string;
  Company: string;
  Email: string;
  Phone: string;
  Service: string;
  Budget: string;
  Message: string;
  Status: string;
  Source: string;
};

export function generateLeadId(): string {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const rand = String(Math.floor(1000 + Math.random() * 9000));
  return `INX-${dateStr}-${rand}`;
}

async function getAccessToken(): Promise<string> {
  const base = process.env.ZOHO_ACCOUNTS_URL ?? "https://accounts.zoho.com";

  const res = await fetch(`${base}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: process.env.ZOHO_CLIENT_ID ?? "",
      client_secret: process.env.ZOHO_CLIENT_SECRET ?? "",
      refresh_token: process.env.ZOHO_REFRESH_TOKEN ?? "",
    }),
  });

  const rawBody = await res.text();

  if (!res.ok) {
    throw new Error(`Zoho OAuth HTTP ${res.status}: ${rawBody}`);
  }

  let json: unknown;
  try {
    json = JSON.parse(rawBody);
  } catch {
    throw new Error(`Zoho OAuth: non-JSON response (status ${res.status})`);
  }

  if (typeof json !== "object" || json === null) {
    throw new Error(`Zoho OAuth: unexpected response format (status ${res.status})`);
  }

  const obj = json as Record<string, unknown>;

  if (typeof obj.access_token !== "string") {
    throw new Error(`Zoho OAuth: access_token missing (status ${res.status})`);
  }

  return obj.access_token;
}

export async function appendLeadToSheet(lead: LeadRow): Promise<void> {
  if (
    !process.env.ZOHO_CLIENT_ID ||
    !process.env.ZOHO_CLIENT_SECRET ||
    !process.env.ZOHO_REFRESH_TOKEN ||
    !process.env.ZOHO_SPREADSHEET_ID
  ) {
    throw new Error(
      "Zoho credentials not configured — set ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN, ZOHO_SPREADSHEET_ID"
    );
  }

  const accessToken = await getAccessToken();
  const sheetBase = process.env.ZOHO_SHEET_URL ?? "https://sheet.zoho.com";

  // Correct endpoint: POST /api/v2/{id} with method=worksheet.jsondata.append
  // (NOT /api/v2/{id}/rowdata — that path does not exist in the Zoho Sheet Data API v2)
  const res = await fetch(
    `${sheetBase}/api/v2/${process.env.ZOHO_SPREADSHEET_ID}`,
    {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        method: "worksheet.jsondata.append",
        worksheet_name: "INX Lead Tracker",
        json_data: JSON.stringify([lead]),
      }),
    }
  );

  const rawBody = await res.text();

  if (!res.ok) {
    throw new Error(`Zoho Sheet API HTTP ${res.status}: ${rawBody}`);
  }

  let json: unknown;
  try {
    json = JSON.parse(rawBody);
  } catch {
    console.log("[zoho] ✓ row appended");
    return;
  }

  if (typeof json === "object" && json !== null) {
    const obj = json as Record<string, unknown>;
    if (obj.error !== undefined) {
      throw new Error(`Zoho Sheet error: ${JSON.stringify(obj.error)}`);
    }
  }

  console.log("[zoho] ✓ row appended");
}
