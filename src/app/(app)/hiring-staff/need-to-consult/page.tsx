"use client";
import { InlineWidget } from "react-calendly";
import { generateMetadataFromBE } from "@/app/lib/utils";
import type { Metadata } from "next";
import { getCanonicalUrl } from "@/app/lib/getCanonial"; 

export async function generateMetadata(): Promise<Metadata> {
  const canonical = await getCanonicalUrl("/need-to-consult");

  const baseMetadata = await generateMetadataFromBE("needToConsult");

  return {
    ...baseMetadata,
    alternates: {
      canonical,
    },
  };
}

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
