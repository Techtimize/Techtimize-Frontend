// src/app/(app)/hiring-staff/need-to-consult/page.tsx
import type { Metadata } from "next";
import { getCanonicalUrl } from "@/app/lib/getCanonial";
import { generateMetadataFromBE } from "@/app/lib/utils";
import CalendlyWidget from "@/app/components/need-to-consult/CalendlyWidget";

export async function generateMetadata(): Promise<Metadata> {
  const canonical = await getCanonicalUrl("/hiring-staff/need-to-consult");
  const baseMetadata = await generateMetadataFromBE("needToConsult");

  return {
    ...baseMetadata,
    alternates: { canonical },
  };
}

export default async function NeedToConsultPage() {
  const username = process.env.NEXT_PUBLIC_CALENDLY_USERNAME;
  return <CalendlyWidget username={username} />;
}
