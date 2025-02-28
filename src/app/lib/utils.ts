import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


import type { Metadata } from 'next';
import { SEO_ENDPOINT } from "@/app/api/endpoints";

const DEFAULT_METADATA: Metadata = {
    title: "Techtimize",
    description: "Techtimize",
    keywords: "Techtimize",
};

export async function generateMetadataFromBE(slug: string): Promise<Metadata> {
    try {
        const response = await fetch(SEO_ENDPOINT(slug));
        if (!response.ok) {
            throw new Error("Failed to fetch SEO data");
        }

        const seoData = await response.json();
        return {
            title: seoData.metaTitle || DEFAULT_METADATA.title,
            description: seoData.metaDescription || DEFAULT_METADATA.description,
            keywords: seoData.metaKeywords || DEFAULT_METADATA.keywords,
        };
    } catch (error) {
        console.error("Error fetching SEO data:", error);
        return DEFAULT_METADATA;
    }
}