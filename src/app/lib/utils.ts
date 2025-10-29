// src/app/lib/utils.ts

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Metadata } from 'next';
import { pageMeta } from "@/app/constants/metadata";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DEFAULT_METADATA: Metadata = {
    title: "Techtimize",
    description: "Techtimize",
    keywords: "Techtimize",
};

// 👇 This function is now REFACTORED
export async function generateMetadataFromBE(slug: string): Promise<Metadata> {
    try {
        // Check if the slug exists as a key in your pageMeta object
        if (pageMeta[slug]) {
            const meta = pageMeta[slug]; // Get the data
            return {
                title: meta.title,
                description: meta.description,
                // You can add keywords here later if you add them to metadata.ts
            };
        }
        
        // If no specific slug is found, return the default
        return DEFAULT_METADATA;

    } catch (error) {
        console.error("Error reading static metadata:", error);
        return DEFAULT_METADATA;
    }
}