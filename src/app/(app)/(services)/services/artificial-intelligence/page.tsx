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
import Design_Process from "../../../../components/services_details_components/Process";
import Six_box_dynamic from "../../../../components/services_details_components/Six_box_dynamic";
import { generateMetadataFromBE } from "@/app/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const canonical = await getCanonicalUrl("/services/artificial-intelligence");
  const baseMetadata = await generateMetadataFromBE("artificialIntelligence");

  return {
    ...baseMetadata,
    alternates: {
      canonical,
    },
  };
}

export default function ArtificialIntelligenceServiceDetail() {
  return (
    <>
      <PageHeader heading="Artificial Intelligence Services" subHeading="" />

      <div className="custom-container sm:flex items-center">
        <div className="sm:w-[50%]">
          <Heading_proto
            heading="Overview"
            alignment="left"
            para="At Techtimize, we help businesses harness the true power of Artificial Intelligence to transform data into decisions and ideas into intelligent solutions. From predictive analytics to generative AI, our services enable enterprises, startups, and growing ventures to innovate faster, reduce costs, and deliver personalized experiences. We don't just build AI tools—we build future-ready ecosystems that drive measurable business growth."
          />
        </div>
        <div className="sm:w-[50%]">
          <Image
            className="max-w-[70%] w-[100%] mx-[auto]"
            src={"/assets/images/ai.svg"}
            alt="Artificial Intelligence Services Overview"
            height={250}
            width={250}
            priority
          />
        </div>
      </div>

      <Heading_proto heading="What We Are Good At" />

      <div className="!mb-[0] sm:mb-[50px] custom-container">
        <Six_box_dynamic
          fileName="AI_ML_details"
          arrayName="what_we_are_good_at"
        />
      </div>

      <div className="max-w-[90%] sm:max-w-[60%] mx-[auto]">
        <Heading_proto
          heading="Benefits of Our Artificial Intelligence Services"
          para="Our AI expertise goes beyond technology—it's about solving real business problems. We ensure every solution aligns with your business goals, industry standards, and customer needs."
        />
      </div>

      <AnimatedContent
        fileName="AI_ML_details"
        arrayName="Benefits_of_Our_UI_UX_Services"
      />

      <div className="max-w-[90%] sm:max-w-[60%] mx-[auto]">
        <Heading_proto
          heading="Our AI Development Process"
          para="We follow a structured approach to AI development that ensures successful implementation and maximum ROI. Our process begins with understanding your business objectives and data landscape, followed by careful planning, model development, and seamless integration."
        />
      </div>

      <Design_Process
        fileName="AI_ML_details"
        arrayName="design_process"
      />

      <div className="custom-container">
        <Heading_proto
          heading="Industries We Focus On"
          className="mt-[0] sm:mt-[65px]"
        />
        <Six_box_dynamic
          fileName="AI_ML_details"
          arrayName="industry_we_focus"
        />
      </div>

      <div className='flex flex-wrap justify-between relative text-white p-[15px] sm:p-[40px] lg:p-[110px] lg:pt-[90px] bg-[#0B4D8E] rounded-[10px] max-w-[90%] mx-[auto] bg-no-repeat items-center'>
        <Image
          src={"/assets/images/expand-business.svg"}
          alt="Expand Your Business with AI"
          width={500}
          height={300}
          className="absolute right-0 bottom-0 w-[61%] z-0 x1750:w-[57%] x2000:w-[40%]"
        />
        <div className="w-[100%] sm:w-[70%] lg:w-[55%]">
          <h2 className="text-[24px] sm:text-[31px] mb-[20px]">
            Expand Your Business With Techtimize!
          </h2>
          <p>
            Do you have a business and want to leverage AI to drive innovation and growth? Then we&apos;re ready to help!
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