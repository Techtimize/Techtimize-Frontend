import Button from "@/app/components/Button/Button";
import InputField from "@/app/components/InputField/InputField";
import PageHeader from "@/app/components/PageHeader/PageHeader";
import SelectInput from "@/app/components/SelectInput/SelectInput";
import TextArea from "@/app/components/TextArea/TextArea";
import React from "react";
import CompanyInfoCard from "./components/CompanyInfoCard";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import SocialIcon from "./components/SocialIcon";
import { requirements } from "@/app/constants/select-options";

import type { Metadata } from 'next';
import { generateMetadataFromBE } from "@/app/lib/utils";


export async function generateMetadata(): Promise<Metadata> {
  return await generateMetadataFromBE("contact-us");
}

const ContactUs = () => {
  return (
    <div>
      <PageHeader subHeading="Contact Us" heading="Get In Touch" />
      <div className="pt-[30px] xl:px-[90px] lg:px-[45px] md:px-[30px] sm:px-[25px] px-[15px] pb-[90px]">
        <p className="page-blue-heading xl:mb-[11px] mb-[5px]">Contact Us</p>
        <h3 className="page-sub-heading font-bold xl:mb-[34px] mb-[19px] xl:w-[600px] lg:w-[400px] sm:w-[370px]">
          Let's Start a New project together! Connect with Us
        </h3>
        <div className="flex flex-col sm:flex-row gap-[40px]">
          <div className="sm:basis-[65%] flex flex-col justify-between gap-[30px]">
            <div className="flex flex-col lg:flex-row items-center xl:gap-[50px] gap-[20px]">
              <InputField
                labelText="Full Name"
                inputType="text"
                placeHolderText="Jack Miller"
              />
              <InputField
                labelText="Email*"
                inputType="email"
                placeHolderText="abc@gmail.com"
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center xl:gap-[50px] gap-[20px]">
              <InputField
                labelText="Phone Number"
                inputType="number"
                placeHolderText="+92 344 78057 45"
                min={0}
              />
              <SelectInput labelText="Select Requirement" options={requirements} />
            </div>
            <TextArea labelText="Your Message" placeHolderText="Hi...." />
            <Button
              text="Send Message"
              className="bg-[#0697D5] text-white rounded-[7px] p-[11px] w-full mt-[20px]"
            />
          </div>
            <div className="md:basis-[35%] flex flex-col lg:items-end items-center lg:justify-center gap-[20px]">
            <CompanyInfoCard
              icon={
                <Image src="/assets/svgs/pin.svg" alt="pin" width={20} height={20}/>
              }
              heading={"Location"}
              text={"5cc DHA Rahbar Phase 1, Lahore, 54000"}
              className="bg-[#F9FAFF]"
            />
            <CompanyInfoCard
              icon={
               <Image src="/assets/svgs/phone.svg" alt="phone" width={20} height={20}/>
              }
              heading={"Phone Number"}
              text={"+92 327 7684077"}
              className="bg-[#F2F6FF]"
            />
            <CompanyInfoCard
              icon={
                <Image src="/assets/svgs/email.svg" alt="email" width={20} height={20}/>
              }
              heading={"Email Address"}
              text={"hr@techtimize.co"}
              className="bg-[#E3EAFF]"
            />
            <div className="border rounded-[7px] xl:w-[393px] lg:w-[350px] md:w-[250px] w-full">
              <div className="border-b p-[10px]">
                <p className="text-center font-bold lg:text-[16px] text-[15px] satoshi-bold text-black">Follow Us</p>
              </div>
              <div className="flex items-center justify-center p-[20px]">
                <div className="flex items-center gap-[15px]">
                  <SocialIcon
                    icon={<FaInstagram color="#0697D5" size={30} />}
                  />
                  <SocialIcon
                    icon={<FaLinkedinIn color="#0697D5" size={30} />}
                  />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
