import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/app/(app)/contact-us/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      username,
      email,
      phone,
      city,
      experience,
      portfolio,
      cv,
      requirement,
    } = await req.json();

    await resend.emails.send({
      from: "no-reply@yourdomain.com",
      to: "hr@techtimize.co",
      subject: "Candidate Application",
      react: EmailTemplate({
        firstName: username,
        email: email,
        phone: phone,
        requirement: requirement,
        message: portfolio,
      }),
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error Sending Email:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
