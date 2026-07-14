import { NextResponse } from "next/server";
import { z } from "zod";

const auditSchema = z.object({
  site: z
    .string()
    .trim()
    .min(1)
    .max(200)
    .regex(/^[^\r\n]+$/, "site must be a single line"),
  email: z.email().max(200),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  try {
    const data = auditSchema.parse(body);

    // If Resend API key is configured, send email
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      // resend v6 never throws — failures come back on the error field
      const { error } = await resend.emails.send({
        from:
          process.env.RESEND_FROM ||
          "Coastal Vanguard <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL || "info@coastalvanguard.com",
        replyTo: data.email,
        subject: `New audit request: ${data.site}`,
        html: `
          <h2>New Free Audit Request</h2>
          <p><strong>Website:</strong> ${escapeHtml(data.site)}</p>
          <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        `,
      });

      if (error) {
        console.error("Resend send failed:", error);
        return NextResponse.json(
          { error: "Failed to send" },
          { status: 502 }
        );
      }
    } else {
      // Log to console in development
      console.log("Audit request:", data);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }

    console.error("Audit request error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
