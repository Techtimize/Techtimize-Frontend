"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

const DOMAIN = "https://techtimize.co";

const BREADCRUMB_NAMES: Record<string, string> = {
  "ui-ux-designing": "UI/UX Designing",
  "techtimizegpt": "Techtimize GPT"
};

const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${DOMAIN}/#organization`,
  "name": "Techtimize",
  "url": `${DOMAIN}/`,
  "logo": {
    "@type": "ImageObject",
    "@id": `${DOMAIN}/#logo`,
    "url": `${DOMAIN}/assets/svgs/companyLogo.svg`,
    "contentUrl": `${DOMAIN}/assets/svgs/companyLogo.svg`,
    "caption": "Techtimize Logo"
  },
  "image": { "@id": `${DOMAIN}/#logo` },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+92 328 1616127",
      "contactType": "customer service",
      "areaServed": "PK",
      "availableLanguage": ["English", "Urdu"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+1 240 696 2111",
      "contactType": "sales",
      "areaServed": "US",
      "availableLanguage": ["English"]
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/techtimize/posts/?feedView=all",
    "https://www.instagram.com/techtimize.pk/",
    "https://clutch.co/profile/techtimize"
  ]
};

const OFFICES = [
  {
    "@type": "ProfessionalService",
    "@id": `${DOMAIN}/#lahore-office`,
    "name": "Techtimize - Lahore Office",
    "parentOrganization": { "@id": `${DOMAIN}/#organization` },
    "telephone": "+92 328 1616127",
    "priceRange": "$$",
    "image": { "@id": `${DOMAIN}/#logo` },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "50 Pine Ave, Block B Opf Housing Scheme",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "postalCode": "54000",
      "addressCountry": "PK"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 31.405, "longitude": 74.23 },
    "openingHours": ["Mo-Fr 09:00-18:00", "Sa 10:00-14:00"]
  },
  {
    "@type": "ProfessionalService",
    "@id": `${DOMAIN}/#usa-office`,
    "name": "Techtimize - USA Office",
    "parentOrganization": { "@id": `${DOMAIN}/#organization` },
    "telephone": "+1 240 696 2111",
    "priceRange": "$$",
    "image": { "@id": `${DOMAIN}/#logo` },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "30 N Gould St Ste N",
      "addressLocality": "Sheridan",
      "addressRegion": "WY",
      "postalCode": "82801",
      "addressCountry": "US"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 44.7973, "longitude": -106.9562 },
    "openingHours": ["Mo-Fr 08:00-17:00"]
  }
];

const WEBSITE = {
  "@type": "WebSite",
  "@id": `${DOMAIN}/#website`,
  "url": `${DOMAIN}/`,
  "name": "Techtimize",
  "publisher": { "@id": `${DOMAIN}/#organization` },
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${DOMAIN}/?s={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

const Schema = () => {
  const pathname = usePathname() || "";
  const pathParts = pathname.split("/").filter(Boolean);

  const currentUrl = useMemo(() => `${DOMAIN}${pathname}`, [pathname]);

  const breadcrumbsElements = useMemo(() => {
    const elements: Array<{ "@type": string; position: number; name: string; item: string }> = [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` }
    ];
    let runningPath = "";
    pathParts.forEach((part, index) => {
      runningPath += `/${part}`;
      const name =
        BREADCRUMB_NAMES[part] ||
        part
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ");
      elements.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": `${DOMAIN}${runningPath}`
      });
    });
    return elements;
  }, [pathParts]);

  const pageName = breadcrumbsElements[breadcrumbsElements.length - 1]?.name ?? "Techtimize";

  const graph = useMemo(() => {
    const items: object[] = [ORGANIZATION, ...OFFICES, WEBSITE];

    /* =========================
        5. PAGE ENTITIES
    ========================= */

    let aboutEntity: { "@id": string } = { "@id": `${DOMAIN}/#organization` };

    if (pathParts.includes("services")) {
      if (pathParts.length > 1) {
        const serviceId = `${currentUrl}#service`;
        items.push({
          "@type": "Service",
          "@id": serviceId,
          "name": pageName,
          "provider": { "@id": `${DOMAIN}/#organization` },
          "areaServed": ["PK", "US", "Global"],
          "mainEntityOfPage": { "@id": `${currentUrl}#webpage` }
        });
        aboutEntity = { "@id": serviceId };
      } else {
        items.push({
          "@type": "ItemList",
          "@id": `${currentUrl}#services-list`,
          "name": "Techtimize Services",
          "itemListElement": [
            "Artificial Intelligence",
            "App Development",
            "Web Development",
            "UI/UX Design",
            "Digital Marketing",
            "Staff Augmentation"
          ].map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": service
          }))
        });
      }
    } else if (pathParts.includes("projects") && pathParts.length > 1) {
      const projectId = `${currentUrl}#project`;
      items.push({
        "@type": "CreativeWork",
        "@id": projectId,
        "name": pageName,
        "creator": { "@id": `${DOMAIN}/#organization` },
        "mainEntityOfPage": { "@id": `${currentUrl}#webpage` }
      });
      aboutEntity = { "@id": projectId };
    } else if (pathParts.includes("techtimizegpt")) {
      const softwareId = `${currentUrl}#software`;
      items.push({
        "@type": "SoftwareApplication",
        "@id": softwareId,
        "name": "Techtimize GPT",
        "applicationCategory": "AI Business Tool",
        "operatingSystem": "Web",
        "author": { "@id": `${DOMAIN}/#organization` },
        "mainEntityOfPage": { "@id": `${currentUrl}#webpage` }
      });
      aboutEntity = { "@id": softwareId };
    }

    /* =========================
        6. WEBPAGE + BREADCRUMB
    ========================= */

    items.push({
      "@type": "WebPage",
      "@id": `${currentUrl}#webpage`,
      "url": currentUrl,
      "name": pageName,
      "isPartOf": { "@id": `${DOMAIN}/#website` },
      "breadcrumb": { "@id": `${currentUrl}#breadcrumb` },
      "about": aboutEntity
    });

    items.push({
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}#breadcrumb`,
      "itemListElement": breadcrumbsElements
    });

    return items;
  }, [pathParts, currentUrl, pageName, breadcrumbsElements]);

  const jsonLd = useMemo(
    () => JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
    [graph]
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
};

export default Schema;
