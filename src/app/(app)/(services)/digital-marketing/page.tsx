import PageHeader from "@/app/components/PageHeader/PageHeader";
import Heading_proto from "@/components/heading_prototype";
import "../services.css"
import Image from "next/image";
import AnimatedContent from "../../../components/services_details_components/Animated_Content";
import Design_Process from "../../../components/services_details_components/Process";
import Six_box_dynamic from "../../../components/services_details_components/Six_box_dynamic";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Services_blogs from "../../../components/services_details_components/Services_blogs";
import Contact_Us_Comp from "../../../components/services_details_components/Contact-Us-Comp";
import { getCanonicalUrl } from "@/app/lib/getCanonial";
import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const canonical = await getCanonicalUrl("/digital-marketing");

  return {
    title: "Digital Marketing Services | Techtimize",
    alternates: {
      canonical,
    },
  };
}
export default function Ui_Ux_service_detail() {
    return (
        <>
            <PageHeader heading="Digital Marketing Services"  subHeading="" />
            <div className="custom-container sm:flex items-center">
                <div className="sm:w-[50%]">
                    <Heading_proto heading="Overview" alignment="left" para="In today’s fast-paced digital world, having a great product or service isn’t enough—it needs the right audience, strategy, and visibility. At Techtimize, our Marketing Services are designed to help businesses grow smarter and faster. We combine creativity, data-driven strategies, and the latest tools to deliver campaigns that build trust, engage audiences, and drive measurable results. From startups to enterprises, we empower brands to stand out in competitive markets." />
                </div>
                <div className="sm:w-[50%]">
                    <Image className="max-w-[70%] w-[100%] mx-[auto]" src={"/assets/images/digi-marketing.svg"} alt="overview" height={250} width={250} />
                </div>
            </div>
                <Heading_proto heading="What We Are Good At" />
            <div className="!mb-[0] sm:mb-[50px] custom-container">
                <Six_box_dynamic fileName="Digital_Marketing" arrayName="what_we_are_good_at" />
            </div>
            <div className="max-w-[90%] sm:max-w-[60%] mx-[auto]">
                <Heading_proto heading="Benefits of Our Marketing Services" para="Our marketing solutions are built around your business goals. By combining creativity with data insights, we ensure that every campaign is purposeful and effective." />
            </div>
            <AnimatedContent fileName="Digital_Marketing" arrayName="Benefits_of_Our_UI_UX_Services" />
            <div className="max-w-[90%] sm:max-w-[60%] mx-[auto]">
                <Heading_proto heading="Our Marketing Process" para="We create user experiences that connect, engage, and convert. Our process begins with in-depth research and discovery to align every design decision with your business goals and audience needs. We design intuitive user flows and build clear information architecture, ensuring your product is simple, seamless, and impactful." />
            </div>
            <Design_Process fileName="Digital_Marketing" arrayName="design_process"/>
            <div className="custom-container">
            <Heading_proto heading="Industry We Focus" className="mt-[0] sm:mt-[65px]"/>
            <Six_box_dynamic fileName="Digital_Marketing" arrayName="industry_we_focus" />
            </div>
            <div className='flex flex-wrap justify-between relative text-white p-[15px] sm:p-[40px]  lg:p-[110px] lg:pt-[90px] bg-[#0B4D8E] rounded-[10px] max-w-[90%] mx-[auto] bg-no-repeat items-center '>
              <Image src={"/assets/images/expand-business.svg"} alt={"expand"} width={500} height={300} className="absolute right-0 bottom-0 w-[61%] z-0 x1750:w-[57%] x2000:w-[40%]" />
                <div className="w-[100%] sm:w-[70%] lg:w-[55%]">
                    <h2 className="text-[24px] sm:text-[31px] mb-[20px]">Expand Your Business With Techtimize!</h2>
                    <p>Do you have a business and want to impress your clients with your website and digital platform? then we’re ready to help!</p>
                </div>
                <div className="w-[52%] mt-[20px] sm:mt-[0] sm:w-[20%] lg:w-[16%] x1400:w-[13%]  z-[10] x1750:w-[11%] x2000:w-[7%]">
                <Link className="flex bg-white text-black p-[10px] sm:px-[10px] sm:py-[15px] rounded-[7px] items-center justify-between w-[100%] z-[10]" href={"/contact-us"}>
                Get Started <FaArrowRightLong className="w-[25px] h-[25px]"/> </Link>
                </div>
            </div>
            <div className="custom-container">
            <Heading_proto heading={"Blogs"} alignment="left"/>
            <Services_blogs />
            </div>
            <div className="custom-container">
            <Contact_Us_Comp />
            </div>
     </>
    )
}