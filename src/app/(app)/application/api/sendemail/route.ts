import { NextResponse } from "next/server";
import { Resend } from "resend";
import ApplicationEmailTemplate from "@/app/(app)/application/components/application-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    const firstname = formData.get("firstname") as string;
    const lastname = formData.get("lastname") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const city = formData.get("city") as string;
    const experience = formData.get("experience") as string;
    const url = formData.get("url") as string | null;
    const cvFile = formData.get("cv") as File | null;

    // Prepare attachments if CV file is provided
    const attachments = [];
    if (cvFile && cvFile.size > 0) {
      const arrayBuffer = await cvFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({
        filename: cvFile.name,
        content: buffer,
      });
    }

    await resend.emails.send({
      from: "Techtimize <hr@techtimize.co>",
      to: "hr@techtimize.co",
      replyTo: email,
      subject: "New Job Application – Techtimize",
      react: ApplicationEmailTemplate({
        firstname,
        lastname,
        email,
        phoneNumber,
        city,
        experience,
        url: url || undefined,
      }),
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return NextResponse.json({ success: true, message: "Application submitted successfully" });
  } catch (error) {
    console.error("Error Sending Application Email:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

