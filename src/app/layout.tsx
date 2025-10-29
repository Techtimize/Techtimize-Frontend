// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import NavbarComponent from "@/app/components/Navbar/Navbar";
import { headers } from "next/headers";

import { Manrope } from "next/font/google";
import FooterWrapper from "./components/Footer/FooterWrapper";
import { pageMeta } from "@/app/constants/metadata"; // 👈 Import your metadata

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], 
});

// 👇 --- REPLACE YOUR OLD FUNCTION WITH THIS --- 👇
export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();

  const host = headersList.get("host") || "www.techtimize.co";
  const protocol = process.env.NODE_ENV === "production" ? "https:" : "http";

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
    
    alternates: {
      canonical: fullUrl,
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-white`}>
        <NavbarComponent />
        <main className="xl:pt-[116px] md:pt-[96px] pt-[95px]">
          {children}
        </main>
        <FooterWrapper />
      </body>
    </html>
  );
}