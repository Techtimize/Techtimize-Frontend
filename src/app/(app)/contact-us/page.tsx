import PageHeader from "@/app/components/PageHeader/PageHeader";
import React from "react";
import CompanyInfoCard from "./components/CompanyInfoCard";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import SocialIcon from "./components/SocialIcon";
import type { Metadata } from 'next';
import { generateMetadataFromBE } from "@/app/lib/utils";
import FormComponent from "@/app/components/Form/form";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return await generateMetadataFromBE("contact-us");

}

const ContactUs = () => {
  return (
    <>
      <PageHeader subHeading="Contact Us" heading="Get In Touch" />
      <div className="pt-[30px] xl:px-[90px] lg:px-[45px] md:px-[30px] sm:px-[25px] px-[15px] pb-[90px]">
        <p className="page-blue-heading xl:mb-[11px] mb-[5px]">Contact Us</p>
        <h3 className="page-sub-heading font-bold xl:mb-[34px] mb-[19px] xl:w-[600px] lg:w-[400px] sm:w-[370px]">
          Lets Start a New project together! Connect with Us
        </h3>
        <div className="flex flex-col lg:flex-row gap-[50px]">
          <div className="lg:basis-[65%] w-full">
            <FormComponent />
          </div>
          <div className="lg:basis-[35%] flex flex-col items-center lg:items-end lg:justify-center gap-[20px]">
            <CompanyInfoCard
              icon={
                <Image src="/assets/svgs/pin.svg" alt="pin" width={20} height={20} />
              }
              heading={"Location"}
              text={"30 N Gould St Ste N, Wyoming 82801"}
              className="bg-[#F9FAFF]"
            />
            <CompanyInfoCard
              icon={
                <Image src="/assets/svgs/phone.svg" alt="phone" width={20} height={20} />
              }
              heading={"Phone Number"}
              text={"+92 327 7684077"}
              className="bg-[#F2F6FF]"
            />
            <CompanyInfoCard
              icon={
                <Image src="/assets/svgs/email.svg" alt="email" width={20} height={20} />
              }
              heading={"Email Address"}
              text={"contact@techtimize.co"}
              className="bg-[#E3EAFF]"
            />
            <div className="border rounded-[7px] xl:w-[393px] lg:w-[350px] md:w-[250px] w-full">
              <div className="border-b p-[10px]">
                <p className="text-center font-bold lg:text-[16px] text-[15px] satoshi-bold text-black">Follow Us</p>
              </div>
              <div className="flex items-center justify-center p-[20px]">
                <div className="flex items-center gap-[15px]">
                  <Link href={"https://www.instagram.com/techtimize.pk/"}>
                    <SocialIcon icon={<FaInstagram color="#0697D5" size={30} />} /></Link>
                  <Link href={"https://www.linkedin.com/company/techtimize/posts/?feedView=all"}>
                    <SocialIcon icon={<FaLinkedinIn color="#0697D5" size={30} />} />
                  </Link>
                  <Link href="https://review.clutch.co/review/">
                    <SocialIcon
                      icon={
                        <Image
                          src={"/assets/svgs/clutchIcon.svg"}
                          alt={"clutch"}
                          width={25}
                          height={25}
                        />
                      }
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default ContactUs;
