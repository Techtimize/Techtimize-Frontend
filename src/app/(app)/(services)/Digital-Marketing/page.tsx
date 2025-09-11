import PageHeader from "@/app/components/PageHeader/PageHeader";
import Heading_proto from "@/components/heading_prototype";
import "../services.css"
import Image from "next/image";
import AnimatedContent from "../../../components/services_details_components/Decade_section";
import Design_Process from "../../../components/services_details_components/Process";
import Six_box_dynamic from "../../../components/services_details_components/Six_box_dynamic";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Services_blogs from "../../../components/services_details_components/Services_blogs";
import Contact_Us_Comp from "../../../components/services_details_components/Contact-Us-Comp";
import { getCanonicalUrl } from "@/app/lib/getCanonial";
import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const canonical = await getCanonicalUrl("/Digital-Marketing");

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
                    <Heading_proto heading="Overview" alignment="left" para="At the core of our UI/UX design process is a deep understanding of your users and business goals. We begin with thorough research and discovery to gather insights that inform every design decision. Our team then maps out intuitive user flows and organizes content through effective information architecture."
                        para2="We bring ideas to life with wireframes and interactive prototypes, allowing you to visualize the user journey early on. Once the structure is refined, we craft visually stunning interfaces that align with your brand and deliver a consistent experience across all devices. " />
                </div>
                <div className="sm:w-[50%]">
                    <Image className="max-w-[70%] w-[100%] mx-[auto]" src={"/assets/images/overview.svg"} alt="overview" height={250} width={250} />
                </div>
            </div>
                <Heading_proto heading="What We Are Good At" />
            <div className="!mb-[0] sm:mb-[50px] custom-container">
                <Six_box_dynamic fileName="ui_ux_details" arrayName="what_we_are_good_at" />
            </div>
            <div className="max-w-[90%] sm:max-w-[60%] mx-[auto]">
                <Heading_proto heading="Benefits of Our UI/UX Services" para="Engaging with Techtimize’s UI/UX design services means leveraging 10 years of our experience working with Multi-national firms. We offer expertise in front-end design, customer experience mapping, low-code mobile platforms, app analytics and more." />
            </div>
            <AnimatedContent />
            <div className="max-w-[90%] sm:max-w-[60%] mx-[auto]">
                <Heading_proto heading="Our UI/UX Design Process" para="At the core of our UI/UX design process is a deep understanding of your users and business goals. We begin with thorough research and discovery to gather insights that inform every design decision. Our team then maps out intuitive user flows and organizes content through effective information architecture." />
            </div>
            <Design_Process />
            <div className="custom-container">
            <Heading_proto heading="Industry We Focus" className="mt-[0] sm:mt-[65px]"/>
            <Six_box_dynamic fileName={"ui_ux_details"} arrayName={"industry_we_focus"} />
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