import * as React from "react";
import {
    Html,
    Head,
    Font,
    Preview,
    Row,
    Section,
    Text,
} from "@react-email/components";

interface ApplicationEmailTemplateProps {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    city: string;
    experience: string;
    url?: string;
}

export default function ApplicationEmailTemplate({
    firstname,
    lastname,
    email,
    phoneNumber,
    city,
    experience,
    url,
}: ApplicationEmailTemplateProps) {
    return (
        <>
            <Html lang="en" dir="ltr">
                <Head>
                    <title>New Job Application – Techtimize</title>
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

                <Preview style={{ color: "#0B4D8E", textAlign: "center" }}>
                    New Job Application Submission
                </Preview>
                <Section>
                    <hr style={{ border: "1px solid #ddd", margin: "10px 0" }} />
                    <p><strong>First Name:</strong> {firstname}</p>
                    <p><strong>Last Name:</strong> {lastname}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Phone Number:</strong> {phoneNumber}</p>
                    <p><strong>City:</strong> {city}</p>
                    <p><strong>Years of Experience:</strong> {experience}</p>
                    {url && (
                        <p><strong>Portfolio URL:</strong> <a href={url}>{url}</a></p>
                    )}
                    <hr style={{ border: "1px solid #ddd", margin: "20px 0" }} />
                    <Row>
                        <Text>
                            This email was sent from the job application form on your website.
                            Please check the attached CV file if provided.
                        </Text>
                    </Row>
                </Section>
            </Html>
        </>
    );
}

