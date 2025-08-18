import Image from "next/image";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { EmailIcon } from "@/icons/email";
import { PhoneIcon } from "@/icons/phone";
import { LocationPinIcon } from "@/icons";
import {
  footerQuickLinks,
  footerServices,
  LAHORE_LOCATION_MAP_HREF,
  otherFooterLinks,
  WYOMING_LOCATION_MAP_HREF,
} from "@/app/constants/nav-links";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F8F8] !mx-0 sm:pb-[4%] md:pb-0 flex flex-col items-center">
      <div className="container !bg-[#F8F8F8] flex lg:flex-row md:flex-row sm:flex-row flex-col xl:gap-[93px] lg:gap-[40px] md:gap-[35px] xl:h-[563px] justify-between">
        <div className="pl-[19px] xl:pl-[64px] md:pl-[46px] sm:pl-[46px] md:w-[312px] sm:w-[250px]">
          <Image
            src="/assets/svgs/companyLogo.svg"
            width={263}
            height={94}
            className="xl:w-[263px] xl:h-[94px] lg:w-[263px] lg:h-[94px] md:w-[182px] md:h-[64px] sm:w-[182px] sm:h-[64px] w-[174px] h-[65px] mt-[67px] xl:mt-[77px] md:mt-[42px]"
            alt={"techtimize-logo"}
          />
          <p className="text mt-[12px] lg:mt-[41px] mr-[51px] md:mr-0 lg:mr-0 xl:w-[316px] md:w-[191px] sm:w-[191px] text-black">
            At Techtimize, we specialize in JS frameworks, .Net, machine
            learning, and AI. We offer a range of services to help businesses of
            all sizes achieve their goals.
          </p>
          <div className="flex items-center gap-[17px] mt-[25px] lg:mt-[56px]">
            <div className="rounded-full h-[36px] w-[36px] bg-[#26A4DA] flex items-center justify-center shadow-lg">
              <Link
                href={
                  "https://www.linkedin.com/company/techtimize/posts/?feedView=all"
                }
                target="_blank"
              >
                <FaLinkedinIn size={20} color="white" />
              </Link>
            </div>
            <div className="rounded-full h-[36px] w-[36px] bg-[#26A4DA] flex items-center justify-center shadow-lg">
              <Link
                href={"https://www.instagram.com/techtimize.pk/"}
                target="_blank"
              >
                <FaInstagram size={20} color="white" />
              </Link>
            </div>
            <div className="rounded-full h-[36px] w-[36px] bg-[#26A4DA] flex items-center justify-center shadow-lg">
              <Link href="https://wa.me/+923281616127" target="_blank">
                <FaWhatsapp size={20} color="white" />
              </Link>
            </div>
          </div>
          <div className="mt-[25px] lg:mt-[26px] md:mb-[70.52px]">
            <p className="text-grey text-[16px] mb-[8px]">
              We are Available on
            </p>
            <Link href="http://clutch.co/profile/techtimize">
              <Image
                src={"/assets/svgs/clutchLogo.svg"}
                width={139.24}
                height={38.57}
                alt={"clutch logo"}
              />
            </Link>
          </div>
        </div>
        <div className="pl-[19px] sm:pl-0 md:pl-0 lg:pl-0 md:w-[150px] sm:w-[100px] xl:w-[156px] text-black">
          <h3 className="text-[25px] lg:text-[25px] md:text-[16px] sm:text-[16px] font-bold mt-[67px] xl:mt-[87px] lg:mt-[160px] md:mt-[110px] sm:mt-[130px] mb-[26px]">
            Quick Links
          </h3>
          <ul className="text-[14px] lg:text-[15px] gap-[10px] flex flex-col">
            {footerQuickLinks.map((item, index: number) => {
              return (
                <li key={index}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pl-[19px] md:pl-0 sm:pl-0 lg:pl-0 md:w-[190px] sm:w-[134px] text-black">
          <h3 className="text-[25px] lg:text-[25px] md:text-[16px] sm:text-[16px] font-bold mt-[67px] xl:mt-[87px] lg:mt-[160px] md:mt-[110px] sm:mt-[130px] mb-[26px]">
            Services
          </h3>
          {/* <Link href="/services"> */}
          <ul className="text-[14px] lg:text-[15px] gap-[10px] flex flex-col md:mb-[51px]">
            {footerServices.map((item, index: number) => {
              return (
                <li key={index}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
          {/* </Link> */}
        </div>
        <div className="pl-[19px] lg:pl-0 md:pl-0 sm:pl-0 lg:pr-5 xl:w-[340px] lg:w-[173px] sm:w-[173px] text-black">
          <h3 className="text-[25px] lg:text-[25px] md:text-[16px] sm:text-[16px] font-bold mt-[67px] xl:mt-[87px] lg:mt-[160px] sm:mt-[130px] md:mt-[110px] mb-[26px] lg:w-[156px]">
            Get in Touch
          </h3>
          <ul className="text-[14px] lg:text-[15px] flex flex-col gap-[21px] mb-[51.79px]">
            <li className="flex gap-[9px] items-center">
              <Link
                href="tel:+923281616127"
                className="flex gap-[9px] items-center"
              >
                <PhoneIcon />
                <p>+92 328 1616127</p>
              </Link>
            </li>
            <li className="flex gap-[9px] items-center">
              <Link
                href={WYOMING_LOCATION_MAP_HREF}
                target="_blank"
                className="flex gap-[9px] items-center"
              >
                <LocationPinIcon />
                <p>30 N Gould St Ste N, Wyoming 82801</p>
              </Link>
            </li>
            <li className="flex gap-[9px] items-center">
              <Link
                href={LAHORE_LOCATION_MAP_HREF}
                target="_blank"
                className="flex gap-[9px] items-center"
              >
                <LocationPinIcon />
                <p>5cc DHA Rahbar Phase 1, Lahore, 54000</p>
              </Link>
            </li>
            <li>
              <Link
                href="mailto:contact@techtimize.co"
                target="_blank"
                className="flex gap-[9px] items-center"
              >
                <EmailIcon />
                <p>contact@techtimize.co</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#4F4F4F]/10 w-full flex justify-center min-h-[40px]">
        <div className="max-w-[1536px] w-full flex flex-col-reverse md:flex-row items-center justify-between gap-[15px] xl:px-[170px] md:px-[30px] px-[15px] py-[10px]">
          <p className="text-black text-[14px]">
            © 2025 Techtimize. All rights reserved.
          </p>
          <div className="flex items-center gap-[51px]">
            {otherFooterLinks.map((item, index: number) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  className="text-[14px] text-black"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
