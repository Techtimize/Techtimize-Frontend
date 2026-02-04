"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

const Schema = () => {
  const pathname = usePathname();
  const domain = process.env.NEXT_PUBLIC_SITE_URL || "https://techtimize.co";

  const jsonLd = useMemo(() => {
    if (!pathname) return null;

    const currentUrl = `${domain}${pathname}`;
    const pathParts = pathname.split("/").filter(Boolean);

    /* =========================
        1. GLOBAL IDENTITY
    ========================= */
    const organization: Record<string, unknown> = {
      "@type": "Organization",
      "@id": `${domain}/#organization`,
      name: "Techtimize",
      url: `${domain}/`,
      logo: {
        "@type": "ImageObject",
        "@id": `${domain}/#logo`,
        url: `${domain}/assets/svgs/companyLogo.svg`,
        contentUrl: `${domain}/assets/svgs/companyLogo.svg`,
        caption: "Techtimize Logo",
      },
      image: { "@id": `${domain}/#logo` },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+92 328 1616127",
          contactType: "customer service",
          areaServed: "PK",
          availableLanguage: ["English", "Urdu"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+1 240 696 2111",
          contactType: "sales",
          areaServed: "US",
          availableLanguage: ["English"],
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/techtimize/posts/?feedView=all",
        "https://www.instagram.com/techtimize.pk/",
        "https://clutch.co/profile/techtimize",
      ],
    };

    /* =========================
        7. GLOBAL REVIEWS (ADDED)
    ========================= */
    organization.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    };

    /* =========================
        2. LOCAL BUSINESS
    ========================= */
    const offices = [
      {
        "@type": "ProfessionalService",
        "@id": `${domain}/#lahore-office`,
        name: "Techtimize - Lahore Office",
        parentOrganization: { "@id": `${domain}/#organization` },
        telephone: "+92 328 1616127",
        priceRange: "$$",
        image: { "@id": `${domain}/#logo` },
        address: {
          "@type": "PostalAddress",
          streetAddress: "50 Pine Ave, Block B Opf Housing Scheme",
          addressLocality: "Lahore",
          addressRegion: "Punjab",
          postalCode: "54000",
          addressCountry: "PK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 31.405,
          longitude: 74.23,
        },
        openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-14:00"],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${domain}/#usa-office`,
        name: "Techtimize - USA Office",
        parentOrganization: { "@id": `${domain}/#organization` },
        telephone: "+1 240 696 2111",
        priceRange: "$$",
        image: { "@id": `${domain}/#logo` },
        address: {
          "@type": "PostalAddress",
          streetAddress: "30 N Gould St Ste N",
          addressLocality: "Sheridan",
          addressRegion: "WY",
          postalCode: "82801",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 44.7973,
          longitude: -106.9562,
        },
        openingHours: ["Mo-Fr 08:00-17:00"],
      },
    ];

    /* =========================
        3. BREADCRUMBS
    ========================= */
    const breadcrumbNames: Record<string, string> = {
      "ui-ux-designing": "UI/UX Designing",
      techtimizegpt: "Techtimize GPT",
      "ai-development": "AI Development",
    };

    const formatName = (slug: string): string => {
      if (breadcrumbNames[slug]) return breadcrumbNames[slug];
      return slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    };

    const breadcrumbsElements: Array<{
      "@type": string;
      position: number;
      name: string;
      item: string;
    }> = [
        { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
      ];

    let runningPath = "";
    pathParts.forEach((part, index) => {
      runningPath += `/${part}`;
      breadcrumbsElements.push({
        "@type": "ListItem",
        position: index + 2,
        name: formatName(part),
        item: `${domain}${runningPath}`,
      });
    });

    const pageName =
      breadcrumbsElements.length > 1
        ? breadcrumbsElements[breadcrumbsElements.length - 1].name
        : "Home";

    /* =========================
        4. SHARED DATA
    ========================= */
    const website = {
      "@type": "WebSite",
      "@id": `${domain}/#website`,
      url: `${domain}/`,
      name: "Techtimize",
      publisher: { "@id": `${domain}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${domain}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    };

    /* =========================
        5. CONSTRUCT GRAPH
    ========================= */
    const graph: object[] = [organization, ...offices, website];
    let aboutEntity: { "@id": string } = { "@id": `${domain}/#organization` };

    if (pathParts.includes("services")) {
      if (pathParts.length > 1) {
        const serviceId = `${currentUrl}#service`;
        graph.push({
          "@type": "Service",
          "@id": serviceId,
          name: pageName,
          provider: { "@id": `${domain}/#organization` },
          areaServed: ["PK", "US", "Global"],
          mainEntityOfPage: { "@id": `${currentUrl}#webpage` },
        });
        aboutEntity = { "@id": serviceId };
      } else {
        graph.push({
          "@type": "ItemList",
          "@id": `${currentUrl}#services-list`,
          name: "Techtimize Services",
          itemListElement: [
            "Artificial Intelligence",
            "App Development",
            "Web Development",
            "UI/UX Design",
            "Digital Marketing",
            "Staff Augmentation",
          ].map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: service,
          })),
        });
      }
    } else if (pathParts.includes("projects") && pathParts.length > 1) {
      const projectId = `${currentUrl}#project`;
      graph.push({
        "@type": "CreativeWork",
        "@id": projectId,
        name: pageName,
        creator: { "@id": `${domain}/#organization` },
        mainEntityOfPage: { "@id": `${currentUrl}#webpage` },
      });
      aboutEntity = { "@id": projectId };
    } else if (pathParts.includes("techtimizegpt")) {
      const softwareId = `${currentUrl}#software`;
      graph.push({
        "@type": "SoftwareApplication",
        "@id": softwareId,
        name: "Techtimize GPT",
        applicationCategory: "AI Business Tool",
        operatingSystem: "Web",
        author: { "@id": `${domain}/#organization` },
        mainEntityOfPage: { "@id": `${currentUrl}#webpage` },
      });
      aboutEntity = { "@id": softwareId };
    }

    /* =========================
        6. FINAL WEBPAGE
    ========================= */
    graph.push({
      "@type": "WebPage",
      "@id": `${currentUrl}#webpage`,
      url: currentUrl,
      name: pageName,
      isPartOf: { "@id": `${domain}/#website` },
      breadcrumb: { "@id": `${currentUrl}#breadcrumb` },
      about: aboutEntity,
    });

    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}#breadcrumb`,
      itemListElement: breadcrumbsElements,
    });

    return JSON.stringify({
      "@context": "https://schema.org",
      "@graph": graph,
    });
  }, [pathname, domain]);

  if (!jsonLd) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
};

export default Schema;
