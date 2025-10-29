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
  "name": "App Development Services",
  "description": "Techtimize delivers high-quality mobile app development services, creating innovative and performance-driven applications for Android, iOS, and cross-platform environments. Our expert developers ensure scalable, secure, and user-friendly apps tailored to your business goals.",
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
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "App Development Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Android App Development",
        "description": "Custom Android applications designed for performance, security, and seamless user experience across all devices.",
        "url": "https://techtimize.co/services/app-development#android"
      },
      {
        "@type": "Offer",
        "name": "iOS App Development",
        "description": "High-quality iOS applications crafted with precision and optimized for Apple's ecosystem and performance standards.",
        "url": "https://techtimize.co/services/app-development#ios"
      },
      {
        "@type": "Offer",
        "name": "Cross-Platform Apps",
        "description": "Cross-platform mobile applications developed using React Native and Flutter to deliver unified performance on Android and iOS.",
        "url": "https://techtimize.co/services/app-development#crossplatform"
      }
    ]
  }
};

export async function generateMetadata(): Promise<Metadata> {
  const canonical = await getCanonicalUrl("/services/app-development");
  const baseMetadata = await generateMetadataFromBE("mobileAppDevelopment");

  return {
    ...baseMetadata,
    alternates: {
      canonical,
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData),
    },
  };
}

export default function AppDevelopmentServiceDetail() {
  return (
    <>
      <PageHeader heading="Application Development" subHeading="" />
      
      <div className="custom-container sm:flex items-center">
        <div className="sm:w-[50%]">
          <Heading_proto 
            heading="Overview" 
            alignment="left" 
            para="Techtimize designs and develops mobile applications that combine innovation, performance, and user experience. Our apps are crafted to help businesses connect with their audiences anytime, anywhere—whether through Android, iOS, or cross-platform solutions. From startups launching their first app to enterprises expanding their digital ecosystem, we deliver secure, scalable, and engaging mobile applications that turn ideas into real-world impact." 
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
        <Six_box_dynamic 
          fileName="App_development" 
          arrayName="what_we_are_good_at" 
        />
      </div>

      <div className="max-w-[90%] sm:max-w-[60%] mx-[auto]">
        <Heading_proto 
          heading="Benefits of Our Mobile App Development Services" 
          para="Engaging with Techtimize's Mobile App Development Services means benefiting from our extensive experience in creating high-performance applications. We specialize in native and cross-platform development, seamless user experiences, robust backend integration, and more—ensuring your app is both engaging and technically superior." 
        />
      </div>

      <AnimatedContent 
        fileName="App_development" 
        arrayName="Benefits_of_Our_UI_UX_Services" 
      />

      <div className="max-w-[90%] sm:max-w-[60%] mx-[auto]">
        <Heading_proto 
          heading="Our Mobile App Development Process" 
          para="We follow a comprehensive app development methodology that ensures quality and efficiency at every stage. Our process begins with understanding your business objectives and user needs, followed by strategic planning, agile development, rigorous testing, and seamless deployment to deliver high-performing mobile applications." 
        />
      </div>

      <Design_Process 
        fileName="App_development" 
        arrayName="design_process" 
      />

      <div className="custom-container">
        <Heading_proto 
          heading="Industries We Serve" 
          className="mt-[0] sm:mt-[65px]" 
        />
        <Six_box_dynamic 
          fileName="App_development" 
          arrayName="industry_we_focus" 
        />
      </div>

      <div className='flex flex-wrap justify-between relative text-white p-[15px] sm:p-[40px] lg:p-[110px] lg:pt-[90px] bg-[#0B4D8E] rounded-[10px] max-w-[90%] mx-[auto] bg-no-repeat items-center'>
        <Image 
          src={"/assets/images/expand-business.svg"} 
          alt="Expand Your Business with Mobile Apps" 
          width={500} 
          height={300} 
          className="absolute right-0 bottom-0 w-[61%] z-0 x1750:w-[57%] x2000:w-[40%]" 
        />
        <div className="w-[100%] sm:w-[70%] lg:w-[55%]">
          <h2 className="text-[24px] sm:text-[31px] mb-[20px]">
            Transform Your Business With a Mobile App!
          </h2>
          <p>
            Ready to take your business mobile? Let us help you create an engaging app that connects with your customers and drives growth.
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