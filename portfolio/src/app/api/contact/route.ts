import { NextResponse } from "next/server";
import { Resend } from "resend";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? process.env.EMAIL_TO ?? "";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "portfolio@your-domain.com";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { name, email, message } = body as { name?: string; email?: string; message?: string };

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    if (!TO_EMAIL) {
      return NextResponse.json({ error: "Email not configured" }, { status: 500 });
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New portfolio message from ${name}`,
      replyTo: email,
      text: message,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
