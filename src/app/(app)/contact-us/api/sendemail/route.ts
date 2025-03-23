import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/app/(app)/contact-us/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { username, email, phone, options, message } = await req.json();

    await resend.emails.send({
      from: "no-reply@yourdomain.com",
      to: "contact@techtimize.co",
      subject: "Connect with us",
      react: EmailTemplate({
        firstName: username,
        email: email,
        phone: phone,
        requirement: options,
        message: message,
      }),
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error Sending Email:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
