"use client";
import { InlineWidget } from "react-calendly";

const NeedToConsult = () => {
  const username = process.env.NEXT_PUBLIC_CALENDLY_USERNAME;

  return (
    <InlineWidget
      url={`https://calendly.com/${username}/30min`}
      pageSettings={{
        backgroundColor: "ffffff",
        primaryColor: "00a2ff",
        textColor: "000000",
      }}
      LoadingSpinner={() => null}
      styles={{ height: "800px", minWidth: "500px", position: "relative" }}
      prefill={{
        date: new Date(Date.now() + 86400000),
      }}
      utm={{
        utmCampaign: "Spring Sale 2024",
        utmContent: "Discount Offer",
        utmMedium: "Email",
        utmSource: "Newsletter",
        utmTerm: "Spring",
      }}
    />
  );
};

export default NeedToConsult;
