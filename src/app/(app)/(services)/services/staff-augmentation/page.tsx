import PageHeader from "@/app/components/PageHeader/PageHeader";
import Heading_proto from "@/components/heading_prototype";
import "../services.css"
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Services_blogs from "../../../../components/services_details_components/Services_blogs";
import AnimatedContent from "../../../../components/services_details_components/Animated_Content";
import Contact_Us_Comp from "../../../../components/services_details_components/Contact-Us-Comp";
import { getCanonicalUrl } from "@/app/lib/getCanonial";
import { Metadata } from "next";
import Design_Process from "@/app/components/services_details_components/Process";
import Six_box_dynamic from "@/app/components/services_details_components/Six_box_dynamic";
import { generateMetadataFromBE } from "@/app/lib/utils";

// Structured data for JSON-LD
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Staff Augmentation Services",
  "description": "Techtimize offers reliable staff augmentation services to help businesses scale their teams with top-tier developers, designers, and IT professionals. We provide flexible hiring models that allow you to extend your in-house capabilities with skilled talent on demand.",
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
  "serviceType": "Staff Augmentation",
  "url": "https://techtimize.co/services/staff-augmentation",
  "offers": [
    {
      "@type": "Offer",
      "name": "Dedicated Developers",
      "description": "Hire skilled developers to work exclusively on your projects, ensuring quality and consistent communication throughout development.",
      "url": "https://techtimize.co/services/staff-augmentation#developers"
    },
    {
      "@type": "Offer",
      "name": "Design & Creative Teams",
      "description": "Expand your in-house design capabilities with professional UI/UX designers, graphic experts, and creative strategists.",
      "url": "https://techtimize.co/services/staff-augmentation#designers"
    },
    {
      "@type": "Offer",
      "name": "Technical Project Managers",
      "description": "Add experienced project managers to your team for improved workflow, coordination, and timely project delivery.",
      "url": "https://techtimize.co/services/staff-augmentation#pm"
    }
  ]                        
};

export async function generateMetadata(): Promise<Metadata> {
  const canonical = await getCanonicalUrl("/services/staff-augmentation");
  const baseMetadata = await generateMetadataFromBE("staffAugmentation");

  return {
    ...baseMetadata,
    alternates: {
      canonical,
    },
  };
}

export default function StaffAugmentationServiceDetail() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageHeader heading="Staff Augmentation" subHeading="" />
      
      <div className="custom-container sm:flex items-center">
        <div className="sm:w-[50%]">
          <Heading_proto 
            heading="Overview" 
            alignment="left" 
            para="Scaling your team doesn't have to be complicated. At Techtimize, our Staff Augmentation services give you direct access to highly skilled professionals—on demand, when you need them most. Whether you're looking for developers, designers, data scientists, or project managers, we extend your in-house capabilities with the right talent, without the hassle of long-term hiring. Our approach ensures you maintain full control over your projects while gaining the flexibility and expertise to accelerate growth." 
          />
        </div>
        <div className="sm:w-[50%]">
          <Image 
            className="max-w-[70%] w-[100%] mx-[auto]" 
            src={"/assets/images/staff-aug.svg"} 
            alt="Staff Augmentation Services Overview" 
            height={250} 
            width={250} 
            priority
          />
        </div>
      </div>

      <Heading_proto heading="What We Are Good At" />
      
      <div className="!mb-[0] sm:mb-[50px] custom-container">
        <Six_box_dynamic 
          fileName="Staff_Augmentation" 
          arrayName="what_we_are_good_at" 
        />
      </div>

      <div className="max-w-[90%] sm:max-w-[60%] mx-[auto]">
        <Heading_proto 
          heading="Benefits of Our Staff Augmentation Services" 
          para="Our service is not just about filling seats—it's about strategically empowering your business with the right talent. With our transparent and client-focused model, you stay in control while we handle sourcing, onboarding, and management support." 
        />
      </div>

      <AnimatedContent 
        fileName="Staff_Augmentation" 
        arrayName="Benefits_of_Our_UI_UX_Services" 
      />

      <div className="max-w-[90%] sm:max-w-[60%] mx-[auto]">
        <Heading_proto 
          heading="Our Staff Augmentation Process" 
          para="We follow a streamlined process to ensure we match you with the perfect talent. Our approach begins with understanding your specific needs, team culture, and project requirements, followed by careful candidate screening, seamless onboarding, and continuous support throughout the engagement." 
        />
      </div>

      <Design_Process 
        fileName="Staff_Augmentation" 
        arrayName="design_process" 
      />

      <div className="custom-container">
        <Heading_proto 
          heading="Industries We Serve" 
          className="mt-[0] sm:mt-[65px]" 
        />
        <Six_box_dynamic 
          fileName="Staff_Augmentation" 
          arrayName="industry_we_focus" 
        />
      </div>

      <div className='flex flex-wrap justify-between relative text-white p-[15px] sm:p-[40px] lg:p-[110px] lg:pt-[90px] bg-[#0B4D8E] rounded-[10px] max-w-[90%] mx-[auto] bg-no-repeat items-center'>
        <Image 
          src={"/assets/images/expand-business.svg"} 
          alt="Expand Your Team with Staff Augmentation" 
          width={500} 
          height={300} 
          className="absolute right-0 bottom-0 w-[61%] z-0 x1750:w-[57%] x2000:w-[40%]" 
        />
        <div className="w-[100%] sm:w-[70%] lg:w-[55%]">
          <h2 className="text-[24px] sm:text-[31px] mb-[20px]">
            Scale Your Team With Techtimize!
          </h2>
          <p>
            Need to scale your team quickly with top tech talent? We provide the right professionals to help you meet your project deadlines and business goals.
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