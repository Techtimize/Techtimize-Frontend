import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  phone: string;
  requirement: string;
  message: string;
}

export default function EmailTemplate({
  firstName,
  email,
  phone,
  requirement,
  message,
}: EmailTemplateProps) {
  return (
    <>
    {/* <Html lang="en" dir="ltr">
      <Head>
        <title>  New Contact Form Submission</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
    </Html><div> */}

        <h2 style={{ color: "#0B4D8E", textAlign: "center" }}>
          New Contact Form Submission
        </h2>

        <hr style={{ border: "1px solid #ddd", margin: "10px 0" }} />

        <p><strong>Name:</strong> {firstName}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Requirement:</strong> {requirement}</p>

        <p><strong>Message:</strong></p>
        <p
          style={{
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        >
          {message}
        </p>

        <hr style={{ border: "1px solid #ddd", margin: "20px 0" }} />

        <p style={{ textAlign: "center", fontSize: "14px", color: "#555" }}>
          This email was sent from the contact form on your website.
        </p>
      </div></>
  )
}

