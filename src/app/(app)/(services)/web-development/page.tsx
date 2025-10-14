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
  const canonical = await getCanonicalUrl("/web-development");

  return {
    title: "Web Development Services | Techtimize",
    alternates: {
      canonical,
    },
  };
}
export default function Ui_Ux_service_detail() {
    return (
        <>
            <PageHeader heading="Web Development Services" subHeading="" />
            <div className="custom-container sm:flex items-center">
                <div className="sm:w-[50%]">
                    <Heading_proto heading="Overview" alignment="left" para="At Techtimize, our web development services are designed to build powerful, scalable, and user-friendly websites that align with your business goals. We go beyond simple design by creating solutions that combine functionality, performance, and aesthetics to deliver exceptional user experiences. Whether you need a corporate site, an eCommerce platform, or a custom web application, our team leverages the latest technologies and frameworks to ensure reliability and future growth. With a focus on speed, security, and seamless integration, we craft digital solutions that not only look great but also perform flawlessly across all devices." />
                </div>
                <div className="sm:w-[50%]">
                    <Image className="max-w-[70%] w-[100%] mx-[auto]" src={"/assets/images/web-dev.svg"} alt="overview" height={250} width={250} loading="lazy"/>
                </div>
            </div>
                <Heading_proto heading="What We Are Good At" />
            <div className="!mb-[0] sm:mb-[50px] custom-container">
                <Six_box_dynamic fileName="web_development_details" arrayName="what_we_are_good_at" />
            </div>
            <div className="max-w-[90%] sm:max-w-[60%] mx-[auto]">
                <Heading_proto heading="Benefits of Our Web Development Services" para="our web development services are designed to give your business a competitive edge. From fast-loading, SEO-friendly websites to secure, scalable, and future-ready solutions, we ensure every project is built to perform and grow with your business. With continuous support and optimization, we deliver websites that not only look great but also drive measurable results." />
            </div>
            <AnimatedContent fileName="web_development_details" arrayName="Benefits_of_Our_We_Services" />

            <div className="max-w-[90%] sm:max-w-[60%] mx-[auto]">
                <Heading_proto heading="Our Website Development Process" para="At Techtimize, we follow a clear and collaborative process to ensure every website we build is functional, scalable, and aligned with your business needs. From the first discussion to final delivery, our approach is designed to minimize risks, maximize efficiency, and deliver outstanding results." />
            </div>
            <Design_Process fileName="web_development_details" arrayName="design_process" />
            <div className="custom-container">
            <Heading_proto heading="Industry We Focus" className="mt-[0] sm:mt-[65px]"/>
            <Six_box_dynamic fileName="web_development_details" arrayName="industry_we_focus" />
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