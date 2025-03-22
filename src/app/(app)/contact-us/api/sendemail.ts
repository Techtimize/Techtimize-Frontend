import { NextResponse } from "next/server";
import { Resend } from "resend";
import React from "react";
import { EmailTemplate } from "@/app/(app)/contact-us/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail() {
  try {
    const { username, email, phone, options, message } = await req.json();
    const emailContent = React.createElement(EmailTemplate, {
      firstName: username,
      email: email,
      phone: phone,
      requirement: options,
      message: message,
    });

    const { data, error } = await resend.emails.send({
      from: "no-reply@yourdomain.com",
      to: "contact@techtimize.co",
      subject: "New Contact Form Submission",
      react: emailContent, 
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
