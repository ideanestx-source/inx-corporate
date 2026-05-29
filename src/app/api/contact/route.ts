import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { appendLeadToSheet, generateLeadId, type LeadRow } from "@/lib/zoho";

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Rate limiter ─────────────────────────────────────────────────────────────
// In-memory per-process map. For multi-instance deployments replace with Redis.
const ipSubmissions = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipSubmissions.get(ip);
  if (!entry || now >= entry.resetAt) {
    ipSubmissions.set(ip, { count: 1, resetAt: now + 3_600_000 });
    return true;
  }
  if (entry.count >= 5) return false;
  entry.count++;
  return true;
}

// ── Turnstile verification ───────────────────────────────────────────────────
async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY ?? "",
          response: token,
          remoteip: ip,
        }),
      }
    );
    const json = (await res.json()) as {
      success: boolean;
      "error-codes"?: string[];
    };
    if (!json.success) {
      console.warn("[contact] Turnstile rejected:", json["error-codes"]);
    }
    return json.success;
  } catch (err) {
    console.error("[contact] Turnstile fetch error:", err);
    return false;
  }
}

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

type IncomingBody = ContactPayload & { turnstileToken?: string };

function validate(data: ContactPayload): string | null {
  if (!data.name?.trim()) return "Name is required";
  if (!data.company?.trim()) return "Company is required";
  if (!data.email?.trim()) return "Email is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    return "Invalid email address";
  if (!data.message?.trim() || data.message.trim().length < 20)
    return "Message must be at least 20 characters";
  return null;
}

function notificationHtml(data: ContactPayload, timestamp: string): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 16px;background:#0c0f1a;border-bottom:1px solid #1a1e2e;width:140px;vertical-align:top">
        <span style="font-size:11px;font-family:monospace;color:#4b6fff;text-transform:uppercase;letter-spacing:0.12em">${label}</span>
      </td>
      <td style="padding:10px 16px;background:#080b16;border-bottom:1px solid #1a1e2e;vertical-align:top">
        <span style="font-size:14px;color:#e2e8f0;font-family:system-ui,sans-serif">${value}</span>
      </td>
    </tr>`;

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>New Website Inquiry - INX</title></head>
<body style="margin:0;padding:0;background:#05070e;font-family:system-ui,-apple-system,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#05070e;padding:40px 20px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

        <!-- Header -->
        <tr>
          <td style="padding:0 0 24px 0">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="border-bottom:1px solid #1a1e2e;padding-bottom:20px">
                  <span style="font-size:11px;font-family:monospace;color:#4b6fff;text-transform:uppercase;letter-spacing:0.16em">INX</span>
                  <span style="font-size:11px;color:#3a3f56;margin:0 8px;font-family:monospace">|</span>
                  <span style="font-size:11px;font-family:monospace;color:#3a3f56;text-transform:uppercase;letter-spacing:0.12em">New Website Inquiry</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Inquiry detail table -->
        <tr>
          <td>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #1a1e2e;border-radius:4px;overflow:hidden">
              ${row("Name", data.name)}
              ${row("Company", data.company)}
              ${row("Email", `<a href="mailto:${data.email}" style="color:#4b6fff;text-decoration:none">${data.email}</a>`)}
              ${row("Phone", "Not collected")}
              ${row("Service", data.projectType || "Not specified")}
              ${row("Budget", data.budget || "Not specified")}
              <tr>
                <td style="padding:10px 16px;background:#0c0f1a;border-bottom:1px solid #1a1e2e;width:140px;vertical-align:top">
                  <span style="font-size:11px;font-family:monospace;color:#4b6fff;text-transform:uppercase;letter-spacing:0.12em">Message</span>
                </td>
                <td style="padding:10px 16px;background:#080b16;border-bottom:1px solid #1a1e2e;vertical-align:top">
                  <span style="font-size:14px;color:#e2e8f0;font-family:system-ui,sans-serif;white-space:pre-wrap;line-height:1.6">${data.message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</span>
                </td>
              </tr>
              ${row("Submitted", timestamp)}
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 0 0 0;border-top:1px solid #1a1e2e;margin-top:24px">
            <span style="font-size:11px;color:#2a2f45;font-family:monospace">Reply directly to this email to respond to the sender.</span>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function confirmationHtml(name: string): string {
  const firstName = name.split(" ")[0];

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Thank you for contacting INX</title></head>
<body style="margin:0;padding:0;background:#05070e;font-family:system-ui,-apple-system,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#05070e;padding:40px 20px">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%">

        <!-- Header mark -->
        <tr>
          <td style="padding-bottom:32px;border-bottom:1px solid #1a1e2e">
            <span style="font-size:13px;font-family:monospace;color:#4b6fff;letter-spacing:0.2em;text-transform:uppercase">INX</span>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 0 32px 0">
            <p style="margin:0 0 20px 0;font-size:15px;color:#e2e8f0;line-height:1.7;font-family:system-ui,sans-serif">
              Thank you for contacting INX${firstName ? `, ${firstName}` : ""}.
            </p>
            <p style="margin:0 0 20px 0;font-size:15px;color:#94a3b8;line-height:1.7;font-family:system-ui,sans-serif">
              We have received your inquiry and our team will review it shortly. You can expect a direct response within two business days.
            </p>
            <p style="margin:0;font-size:15px;color:#94a3b8;line-height:1.7;font-family:system-ui,sans-serif">
              If your requirement is time-sensitive, reply to this email or contact us directly at
              <a href="mailto:info@ideanestx.com" style="color:#4b6fff;text-decoration:none">info@ideanestx.com</a>.
            </p>
          </td>
        </tr>

        <!-- Divider -->
        <tr><td style="height:1px;background:#1a1e2e"></td></tr>

        <!-- Brand footer -->
        <tr>
          <td style="padding:28px 0 0 0">
            <p style="margin:0 0 4px 0;font-size:12px;font-family:monospace;color:#4b6fff;letter-spacing:0.18em;text-transform:uppercase">
              MAKE IT PERFORM
            </p>
            <p style="margin:0 0 14px 0;font-size:11px;color:#3a3f56;font-family:monospace;letter-spacing:0.1em;text-transform:uppercase">
              IDEANEST X PRIVATE LIMITED
            </p>
            <p style="margin:0;font-size:12px;color:#2a3050;font-family:system-ui,sans-serif;line-height:1.7">
              <a href="mailto:info@ideanestx.com" style="color:#2e3a5c;text-decoration:none">info@ideanestx.com</a>
              &nbsp;&middot;&nbsp;
              <span style="color:#2a3050">+91 99403 32502</span>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

const isDev = process.env.NODE_ENV === "development";

function devDetail(err: unknown): string {
  if (err instanceof Error) return `${err.message}\n${err.stack ?? ""}`;
  return JSON.stringify(err, null, 2);
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  // ── Rate limit ──────────────────────────────────────────────────────────
  if (!checkRateLimit(ip)) {
    console.warn("[contact] Rate limit exceeded for ip:", ip);
    return NextResponse.json(
      { error: "Too many submissions. Please wait an hour before trying again." },
      { status: 429 }
    );
  }

  // ── Parse body ──────────────────────────────────────────────────────────
  let body: IncomingBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { turnstileToken, ...formFields } = body;

  // ── Turnstile ───────────────────────────────────────────────────────────
  if (!turnstileToken) {
    return NextResponse.json(
      { error: "Security check required. Please complete the challenge." },
      { status: 400 }
    );
  }

  const turnstileOk = await verifyTurnstile(turnstileToken, ip);
  if (!turnstileOk) {
    return NextResponse.json(
      { error: "Security check failed. Please try again." },
      { status: 400 }
    );
  }

  // ── Field validation ────────────────────────────────────────────────────
  const validationError = validate(formFields);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 422 });
  }

  const { name, company, email, projectType, budget, message } = formFields;

  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "UTC",
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  // ── Resend emails ────────────────────────────────────────────────────────
  try {
    await resend.emails.send({
      from: "INX Contact Form <notifications@ideanestx.com>",
      to: ["info@ideanestx.com", "reach_us@ideanestx.com"],
      replyTo: email,
      subject: "New Website Inquiry - INX",
      html: notificationHtml({ name, company, email, projectType, budget, message }, timestamp),
    });

    await resend.emails.send({
      from: "INX <info@ideanestx.com>",
      to: [email],
      subject: "Thank you for contacting INX",
      html: confirmationHtml(name),
    });
  } catch (err) {
    console.error("[contact] ✗ Resend error — message:", err instanceof Error ? err.message : String(err));
    console.error("[contact] ✗ Resend error — full:", devDetail(err));
    return NextResponse.json(
      {
        error: "Failed to send. Please try again or email us directly at info@ideanestx.com.",
        ...(isDev && { detail: devDetail(err) }),
      },
      { status: 500 }
    );
  }

  // ── Zoho Sheet ───────────────────────────────────────────────────────────
  const leadId = generateLeadId();

  try {
    const lead: LeadRow = {
      Date: new Date().toISOString().slice(0, 10),
      "Lead ID": leadId,
      Name: name,
      Company: company,
      Email: email,
      Phone: "Not collected",
      Service: projectType || "Not specified",
      Budget: budget || "Not specified",
      Message: message,
      Status: "New",
      Source: "Website",
    };
    await appendLeadToSheet(lead);
    console.log("[contact] ✓ Zoho: row appended for", leadId);
  } catch (err) {
    console.error("[contact] ✗ Zoho error — message:", err instanceof Error ? err.message : String(err));
    console.error("[contact] ✗ Zoho error — full:", devDetail(err));
    return NextResponse.json(
      {
        error: "Inquiry received but could not be logged. Please email us at info@ideanestx.com.",
        ...(isDev && { detail: devDetail(err) }),
      },
      { status: 500 }
    );
  }

  console.log("[contact] ✓ submission complete:", leadId);
  return NextResponse.json({ success: true });
}
