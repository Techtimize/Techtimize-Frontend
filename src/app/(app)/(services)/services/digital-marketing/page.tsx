import PageHeader from "@/app/components/PageHeader/PageHeader";
import Heading_proto from "@/components/heading_prototype";
import "../services.css"
import Image from "next/image";
import AnimatedContent from "../../../../components/services_details_components/Animated_Content";
import Design_Process from "../../../../components/services_details_components/Process";
import Six_box_dynamic from "../../../../components/services_details_components/Six_box_dynamic";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Services_blogs from "../../../../components/services_details_components/Services_blogs";
import Contact_Us_Comp from "../../../../components/services_details_components/Contact-Us-Comp";
import { getCanonicalUrl } from "@/app/lib/getCanonial";
import { Metadata } from "next";
import { generateMetadataFromBE } from "@/app/lib/utils";

// Structured data for JSON-LD
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Digital Marketing Services",
  "description": "Techtimize offers data-driven digital marketing services that help businesses enhance their online presence, attract qualified leads, and boost conversions. From SEO and PPC to social media marketing, we deliver strategies tailored to your business growth.",
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
  "serviceType": "Digital Marketing",
  "url": "https://techtimize.co/services/digital-marketing",
  "offers": [
    {
      "@type": "Offer",
      "name": "Search Engine Optimization (SEO)",
      "description": "Comprehensive SEO services designed to improve website visibility, organic rankings, and drive targeted traffic to your business.",
      "url": "https://techtimize.co/services/digital-marketing#seo"
    },
    {
      "@type": "Offer",
      "name": "Pay-Per-Click (PPC) Advertising",
      "description": "Strategic PPC campaigns that maximize ROI through data-driven ad placements on Google, Meta, and other major platforms.",
      "url": "https://techtimize.co/services/digital-marketing#ppc"
    },
    {
      "@type": "Offer",
      "name": "Social Media Marketing",
      "description": "Creative and engaging social media marketing services to build brand awareness and foster customer relationships across all channels.",
      "url": "https://techtimize.co/services/digital-marketing#socialmedia"
    }
  ]
};

export async function generateMetadata(): Promise<Metadata> {
  const canonical = await getCanonicalUrl("/services/digital-marketing");
  const baseMetadata = await generateMetadataFromBE("marketing");

  return {
    ...baseMetadata,
    alternates: {
      canonical,
    },
  };
}

export default function DigitalMarketingServiceDetail() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageHeader heading="Digital Marketing Services" subHeading="" />
      
      <div className="custom-container sm:flex items-center">
        <div className="sm:w-[50%]">
          <Heading_proto 
            heading="Overview" 
            alignment="left" 
            para="In today's fast-paced digital world, having a great product or service isn't enough—it needs the right audience, strategy, and visibility. At Techtimize, our Digital Marketing Services are designed to help businesses grow smarter and faster. We combine creativity, data-driven strategies, and the latest tools to deliver campaigns that build trust, engage audiences, and drive measurable results. From startups to enterprises, we empower brands to stand out in competitive markets." 
          />
        </div>
        <div className="sm:w-[50%]">
          <Image 
            className="max-w-[70%] w-[100%] mx-[auto]" 
            src={"/assets/images/digi-marketing.svg"} 
            alt="Digital Marketing Services Overview" 
            height={250} 
            width={250} 
            priority
          />
        </div>
      </div>

      <Heading_proto heading="What We Are Good At" />
      
      <div className="!mb-[0] sm:mb-[50px] custom-container">
        <Six_box_dynamic 
          fileName="Digital_Marketing" 
          arrayName="what_we_are_good_at" 
        />
      </div>

      <div className="max-w-[90%] sm:max-w-[60%] mx-[auto]">
        <Heading_proto 
          heading="Benefits of Our Digital Marketing Services" 
          para="Our marketing solutions are built around your business goals. By combining creativity with data insights, we ensure that every campaign is purposeful and effective, driving real results for your business." 
        />
      </div>

      <AnimatedContent 
        fileName="Digital_Marketing" 
        arrayName="Benefits_of_Our_UI_UX_Services" 
      />

      <div className="max-w-[90%] sm:max-w-[60%] mx-[auto]">
        <Heading_proto 
          heading="Our Digital Marketing Process" 
          para="We follow a strategic marketing process that ensures every campaign delivers maximum impact. Our approach begins with comprehensive market research and audience analysis to understand your competitive landscape and customer behavior. We then develop data-driven strategies, execute targeted campaigns across multiple channels, and continuously optimize based on performance metrics to drive sustainable growth." 
        />
      </div>

      <Design_Process 
        fileName="Digital_Marketing" 
        arrayName="design_process" 
      />

      <div className="custom-container">
        <Heading_proto 
          heading="Industries We Serve" 
          className="mt-[0] sm:mt-[65px]" 
        />
        <Six_box_dynamic 
          fileName="Digital_Marketing" 
          arrayName="industry_we_focus" 
        />
      </div>

      <div className='flex flex-wrap justify-between relative text-white p-[15px] sm:p-[40px] lg:p-[110px] lg:pt-[90px] bg-[#0B4D8E] rounded-[10px] max-w-[90%] mx-[auto] bg-no-repeat items-center'>
        <Image 
          src={"/assets/images/expand-business.svg"} 
          alt="Grow Your Business with Digital Marketing" 
          width={500} 
          height={300} 
          className="absolute right-0 bottom-0 w-[61%] z-0 x1750:w-[57%] x2000:w-[40%]" 
        />
        <div className="w-[100%] sm:w-[70%] lg:w-[55%]">
          <h2 className="text-[24px] sm:text-[31px] mb-[20px]">
            Grow Your Business With Digital Marketing!
          </h2>
          <p>
            Ready to increase your online visibility and attract more customers? Let us help you develop a winning digital marketing strategy that drives results.
          </p>
        </div>
        <div className="w-[52%] mt-[20px] sm:mt-[0] sm:w-[20%] lg:w-[16%] x1400:w-[13%] z-[10] x1750:w-[11%] x2000:w-[7%]">
          <Link 
            className="flex bg-white text-black p-[10px] sm:px-[10px] sm:py-[15px] rounded-[7px] items-center justify-between w-[100%] z-[10] hover:bg-gray-100 transition-colors" 
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