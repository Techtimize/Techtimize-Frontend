import CompanyInfoCard from "@/app/(app)/contact-us/components/CompanyInfoCard";
import SocialIcon from "@/app/(app)/contact-us/components/SocialIcon";
import FormComponent from "@/app/components/Form/form";
import { WYOMING_LOCATION_MAP_HREF, PHONE_NUMBER_HREF, EMAIL_ADDRESS_HREF } from "@/app/constants/nav-links";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";


export default function Contact_Us_Comp(){
    return(
        <div className="pt-[30px] xl:px-[0px] lg:px-[45px] md:px-[30px] sm:px-[25px] px-[15px] py-[0px]">
        {/* <p className="page-blue-heading xl:mb-[11px] mb-[5px]">Contact Us</p> */}
        <h3 className="page-sub-heading font-bold xl:mb-[34px] mb-[19px] xl:w-[600px] lg:w-[400px] sm:w-[370px]">
          Get In Touch With Us:
        </h3>
        <div className="flex md:flex-row flex-col gap-[50px]">
          <div className="w-full">
            <FormComponent />
          </div>
          <div className="lg:basis-[35%] flex flex-col items-center lg:items-end lg:justify-center gap-[20px]">
            <CompanyInfoCard
              icon={
                <Image
                  src="/assets/svgs/pin.svg"
                  alt="pin"
                  width={20}
                  height={20}
                />
              }
              heading={"Location"}
              href={WYOMING_LOCATION_MAP_HREF}
              text={"30 N Gould St Ste N, Wyoming 82801"}
              className="bg-[#F9FAFF]"
            />
            <CompanyInfoCard
              icon={
                <Image
                  src="/assets/svgs/phone.svg"
                  alt="phone"
                  width={20}
                  height={20}
                />
              }
              heading={"Phone Number"}
              href={PHONE_NUMBER_HREF}
              text={"+92 328 1616127"}
              className="bg-[#F2F6FF]"
            />
            <CompanyInfoCard
              icon={
                <Image
                  src="/assets/svgs/email.svg"
                  alt="email"
                  width={20}
                  height={20}
                />
              }
              heading={"Email Address"}
              text={"contact@techtimize.co"}
              className="bg-[#E3EAFF]"
              href={EMAIL_ADDRESS_HREF}
            />
            <div className="border rounded-[7px] xl:w-[393px] lg:w-[350px] md:w-[250px] w-full">
              <div className="border-b p-[10px]">
                <p className="text-center font-bold lg:text-[16px] text-[15px] satoshi-bold text-black">
                  Follow Us
                </p>
              </div>
              <div className="flex items-center justify-center p-[20px]">
                <div className="flex items-center gap-[15px]">
                  <Link
                    href={"https://www.instagram.com/techtimize.pk/"}
                    target="_blank"
                  >
                    <SocialIcon
                      icon={<FaInstagram color="#0697D5" size={30} />}
                    />
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/company/techtimize/posts/?feedView=all"
                    }
                    target="_blank"
                  >
                    <SocialIcon
                      icon={<FaLinkedinIn color="#0697D5" size={30} />}
                    />
                  </Link>
                  <Link
                    href="http://clutch.co/profile/techtimize"
                    target="_blank"
                  >
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
    )
}