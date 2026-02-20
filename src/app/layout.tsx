// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import NavbarComponent from "@/app/components/Navbar/Navbar";
import { headers } from "next/headers";

import { Manrope } from "next/font/google";
import FooterWrapper from "./components/Footer/FooterWrapper";
import Schema from "./components/Schema/Schema";
import { pageMeta } from "@/app/constants/metadata"; // 👈 Import your metadata

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// 👇 --- REPLACE YOUR OLD FUNCTION WITH THIS --- 👇
export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();

  const host = headersList.get("host") || "www.techtimize.co";
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  const pathname =
    headersList.get("x-invoke-path") ||
    headersList.get("next-url") ||
    "";

  const fullUrl = `${protocol}://${host}${pathname}`;

  return {
    title: {
      default: pageMeta.home.title,
      template: "%s | Techtimize",
    },
    description: pageMeta.home.description,
    keywords: [
      "Techtimize",
      "Software Development",
      "AI Solutions",
      "Web Development Lahore",
      "Digital Transformation",
      "UI/UX Design Pakistan"
    ],
    authors: [{ name: "Techtimize" }],

    alternates: {
      canonical: fullUrl,
    },
    icons: {
      icon: "/favicon.ico",
    },

    openGraph: {
      type: "website",
      url: "https://techtimize.co/",
      siteName: "Techtimize",
      title: "Techtimize | Custom Software, AI & Digital Solutions",
      description: "Techtimize is a global technology company based in Lahore, Pakistan, delivering innovative digital and AI-driven solutions. We specialize in Custom Software, Mobile Apps, and Digital Transformation.",
      images: [
        {
          url: "https://techtimize.co/assets/svgs/companyLogo.svg",
          width: 1200,
          height: 630,
        }
      ],
      locale: "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title: "Techtimize | Custom Software, AI & Digital Solutions",
      description: "Techtimize is a global technology company delivering innovative digital and AI-driven solutions, Custom Software, and Mobile Apps.",
      images: ["https://techtimize.co/assets/svgs/companyLogo.svg"],
    },

    other: {
      "geo.region": "PK-PB",
      "geo.placename": "Lahore",
      "geo.position": "31.4050;74.2300",
      "ICBM": "31.4050, 74.2300",
    },
  };
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.className} bg-white`} suppressHydrationWarning>
        <Schema />
        <NavbarComponent />
        <main className="xl:pt-[116px] md:pt-[96px] pt-[95px] animate-fadeIn">
          {children}
        </main>
        <FooterWrapper />
      </body>
    </html>
  );
}