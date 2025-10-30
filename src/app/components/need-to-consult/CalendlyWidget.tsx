// src/components/CalendlyWidget.tsx
"use client";
import React from "react";
import { InlineWidget } from "react-calendly";

type Props = { username?: string };

export default function CalendlyWidget({ username }: Props) {
  const calendlyUrl = username
    ? `https://calendly.com/${username}/30min`
    : "https://calendly.com/your-default/30min";

  return (
    <InlineWidget
      url={calendlyUrl}
      pageSettings={{
        backgroundColor: "ffffff",
        primaryColor: "00a2ff",
        textColor: "000000",
      }}
      LoadingSpinner={() => null}
      styles={{ height: "800px", minWidth: "500px", position: "relative" }}
      prefill={{ date: new Date(Date.now() + 86400000) }}
      utm={{
        utmCampaign: "Spring Sale 2024",
        utmContent: "Discount Offer",
        utmMedium: "Email",
        utmSource: "Newsletter",
        utmTerm: "Spring",
      }}
    />
  );
}
