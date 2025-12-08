import PageHeader from "@/app/components/PageHeader/PageHeader";
import Heading_proto from "@/components/heading_prototype";
import "../services.css";
import Image from "next/image";
import AnimatedContent from "../../../../components/services_details_components/Animated_Content";
import Design_Process from "../../../../components/services_details_components/Process";
import Six_box_dynamic from "../../../../components/services_details_components/Six_box_dynamic";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Services_blogs from "../../../../components/services_details_components/Services_blogs";
import Contact_Us_Comp from "../../../../components/services_details_components/Contact-Us-Comp";
import { getCanonicalUrl } from "@/app/lib/getCanonial";
import { generateMetadataFromBE } from "@/app/lib/utils";
import { Metadata } from "next";
// Note: we intentionally inject JSON-LD via `generateMetadata` for server-side rendering

// --- JSON-LD Structured Data ---
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://techtimize.co/services/app-development#service",
  "mainEntityOfPage": "https://techtimize.co/services/app-development",
  "name": "App Development Services",
  "description":
    "Techtimize delivers high-quality mobile app development services, creating innovative and performance-driven applications for Android, iOS, and cross-platform environments.",
  "provider": {
    "@type": "Organization",
    "name": "Techtimize",
    "url": "https://techtimize.co/"
  },
  "areaServed": [
    {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "50 Pine Ave, Block B Opf Housing Scheme",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "postalCode": "54000",
        "addressCountry": "PK"
      }
    },
    {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "30 N Gould St Ste N",
        "addressLocality": "Wyoming",
        "addressRegion": "WY",
        "postalCode": "82801",
        "addressCountry": "US"
      }
    }
  ],
  "serviceType": "App Development",
  "url": "https://techtimize.co/services/app-development",
  "offers": [
    {
      "@type": "Offer",
      "name": "Android App Development",
      "description": "Custom Android applications designed for performance, security, and seamless user experience.",
      "url": "https://techtimize.co/services/app-development#android"
    },
    {
      "@type": "Offer",
      "name": "iOS App Development",
      "description": "iOS applications optimized for Apple's performance ecosystem.",
      "url": "https://techtimize.co/services/app-development#ios"
    },
    {
      "@type": "Offer",
      "name": "Cross-Platform Apps",
      "description": "Cross-platform mobile apps using React Native and Flutter.",
      "url": "https://techtimize.co/services/app-development#crossplatform"
    }
  ]
};

// --- Page Metadata ---
export async function generateMetadata(): Promise<Metadata> {
  const canonical = await getCanonicalUrl("/services/app-development");
  const baseMetadata = await generateMetadataFromBE("mobileAppDevelopment");

  return {
    ...baseMetadata,
    alternates: { canonical },
  };
}

export default function AppDevelopmentServiceDetail() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <PageHeader heading="Application Development" subHeading="" />

      <div className="custom-container sm:flex items-center">
        <div className="sm:w-[50%]">
          <Heading_proto
            heading="Overview"
            alignment="left"
            para="Techtimize designs and develops mobile applications that combine innovation, performance, and user experience."
          />
        </div>
        <div className="sm:w-[50%]">
          <Image
            className="max-w-[70%] w-[100%] mx-[auto]"
            src={"/assets/images/app-dev.svg"}
            alt="Mobile App Development Services Overview"
            height={250}
            width={250}
            priority
          />
        </div>
      </div>

      <Heading_proto heading="What We Are Good At" />

      <div className="!mb-[0] sm:mb-[50px] custom-container">
        <Six_box_dynamic fileName="App_development" arrayName="what_we_are_good_at" />
      </div>

      <div className="max-w-[90%] sm:max-w-[60%] mx-[auto]">
        <Heading_proto
          heading="Benefits of Our Mobile App Development Services"
          para="We specialize in native and cross-platform development, seamless user experiences, robust backend integration, and more."
        />
      </div>

      <AnimatedContent fileName="App_development" arrayName="Benefits_of_Our_UI_UX_Services" />

      <div className="max-w-[90%] sm:max-w-[60%] mx-[auto]">
        <Heading_proto
          heading="Our Mobile App Development Process"
          para="We follow a complete end-to-end delivery methodology."
        />
      </div>

      <Design_Process fileName="App_development" arrayName="design_process" />

      <div className="custom-container">
        <Heading_proto heading="Industries We Serve" className="mt-[0] sm:mt-[65px]" />
        <Six_box_dynamic fileName="App_development" arrayName="industry_we_focus" />
      </div>

      <div className="flex flex-wrap justify-between relative text-white p-[15px] sm:p-[40px] lg:p-[110px] bg-[#0B4D8E] rounded-[10px] max-w-[90%] mx-[auto] items-center">
        <Image
          src={"/assets/images/expand-business.svg"}
          alt="Expand Your Business with Mobile Apps"
          width={500}
          height={300}
          className="absolute right-0 bottom-0 w-[61%]"
        />
        <div className="w-[100%] sm:w-[70%] lg:w-[55%]">
          <h2 className="text-[24px] sm:text-[31px] mb-[20px]">
            Transform Your Business With a Mobile App!
          </h2>
          <p>Ready to go mobile? Let’s build something powerful together.</p>
        </div>
        <div className="w-[52%] mt-[20px] sm:mt-[0] sm:w-[20%] lg:w-[16%] z-[10]">
          <Link
            className="flex bg-white text-black p-[10px] rounded-[7px] items-center justify-between hover:bg-gray-100 transition-colors"
            href="/contact-us"
          >
            Get Started
            <FaArrowRightLong className="w-[25px] h-[25px]" />
          </Link>
        </div>
      </div>

      <div className="custom-container">
        <Heading_proto heading="Blogs" alignment="left" />
        <Services_blogs />
      </div>

      <div className="custom-container">
        <Contact_Us_Comp />
      </div>
    </>
  );
}
