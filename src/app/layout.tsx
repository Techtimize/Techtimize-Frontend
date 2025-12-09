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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://techtimize.co/#website",
        "url": "https://techtimize.co/",
        "name": "Techtimize",
        "description": "Techtimize is a global technology company based in Lahore, Pakistan, delivering innovative digital and AI-driven solutions. We specialize in Custom Software development, Mobile and Web applications, UI/UX design, AI & Machine learning integration, and Digital transformation services.",
        "publisher": {
          "@id": "https://techtimize.co/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://techtimize.co/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://techtimize.co/#organization",
        "name": "Techtimize",
        "url": "https://techtimize.co/",
        "logo": "https://techtimize.co/assets/svgs/companyLogo.svg",
        "description": "Techtimize is a global technology company based in Lahore, Pakistan, delivering innovative digital and AI-driven solutions. We specialize in Custom Software development, Mobile and Web applications, UI/UX design, AI & Machine learning integration, and Digital transformation services. Our team of experts helps businesses streamline operations, enhance customer engagement, and achieve measurable growth through modern technology and data-driven strategies.",
        "sameAs": [
          "https://www.linkedin.com/company/techtimize/posts/?feedView=all",
          "https://www.instagram.com/techtimize.pk/",
          "https://clutch.co/profile/techtimize"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+92 328 1616127",
            "contactType": "customer support",
            "areaServed": "PK",
            "availableLanguage": ["en", "ur"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+1 240 696 2111",
            "contactType": "customer support",
            "areaServed": "US",
            "availableLanguage": "en"
          }
        ]
      },
      {
        "@type": "ProfessionalService",
        "parentOrganization": {
          "@id": "https://techtimize.co/#organization"
        },
        "name": "Techtimize - Lahore Office",
        "image": "https://techtimize.co/assets/svgs/companyLogo.svg",
        "url": "https://techtimize.co/",
        "telephone": "+92 328 1616127",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "50 Pine Ave, Block B Opf Housing Scheme",
          "addressLocality": "Lahore",
          "addressRegion": "Punjab",
          "postalCode": "54000",
          "addressCountry": "PK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 31.4050,
          "longitude": 74.2300
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "priceRange": "$$"
      },
      {
        "@type": "ProfessionalService",
        "parentOrganization": {
          "@id": "https://techtimize.co/#organization"
        },
        "name": "Techtimize - USA Office",
        "image": "https://techtimize.co/assets/svgs/companyLogo.svg",
        "url": "https://techtimize.co/",
        "telephone": "+1 240 696 2111",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "30 N Gould St Ste N",
          "addressLocality": "Sheridan",
          "addressRegion": "WY",
          "postalCode": "82801",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 44.7973,
          "longitude": -106.9562
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00"
        },
        "priceRange": "$$"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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