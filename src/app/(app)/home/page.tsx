import React from "react";
import { services } from "@/app/constants/services";
import ServiceCard from "./components/ServiceCard";
import ProjectLogoSlider from "./components/ProjectLogoSlider";
import PortfolioSlider from "@/app/components/PortfolioSlider/PortfolioSlider";
import TestimonialSlider from "@/app/components/TestimonialSlider/TestimonialSlider";
import { HiArrowLongRight } from "react-icons/hi2";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import Link from "next/link";
import type { Metadata } from 'next';
import { generateMetadataFromBE } from "@/app/lib/utils";
import getServices from "@/app/api/services/get_services";
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card";
import Image from "next/image";


export async function generateMetadata(): Promise<Metadata> {
  return await generateMetadataFromBE("home");
}

export default async function Home() {
  const Apiservices = await getServices();
  const servicesToDisplay = Apiservices.length ? Apiservices : services;

  return (
    <div className="bg-white">
      <HeroSection />
      <Stats />
      <div className="pt-20 pb-10">
        <ProjectLogoSlider />
      </div>
      <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col xl:gap-[135px] lg:gap-[135px] justify-between bg-[#FBFCFF]">
        <div className="xl:ml-[63px] sm:pl-[25px] md:pl-[30px] lg:pl-[40px] sm:pr-0 px-[16px]">
          <p className="text-blue-1 xl:mt-[90px] md:mt-[76px] sm:mt-[76px] mt-[48px] xl:mb-[11px] mb-[5px]">
            What do we do?
          </p>
          <h3 className="page-sub-heading font-bold xl:mb-[54px] mb-[19px]">
            Our Services
          </h3>
          <p className="text text-darkGrey xl:max-w-[397px] max-w-[342px] xl:mb-[70px] md:mb-[42px] mb-[55px]">
            With a focus on innovation, creativity, and reliability, we aim to
            help businesses stay ahead in the ever-evolving digital landscape.
            Our mission is to provide top-notch technology solutions that drive
            growth, maximize ROI, and create a sustainable impact on our
            clients success.
          </p>
          <Link href="/hiring-staff/need-to-consult">
            <Button
              variant="outline"
              className="md:mb-[60.61px] bg-[#0B4D8E] h-12 text-white"

            >Book a Quote</Button></Link>

        </div>
        <div className="xl:mr-[70px] sm:pr-[20px] md:pr-[25px] lg:pr-[30px] md:mt-[84px] sm:mt-[84px] xl:mt-[98px] mt-[55px]">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-2 xl:gap-[26px] md:gap-[12px] sm:gap-[12px] gap-[15px] md:px-0 px-[16px] pb-[60.61px]">
            {services.map((item) => (
              <Link key={item._id} href={`/services`}>
                <CardContent className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                  <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <Image src={item.iconUrl} alt={item.serviceName} width={item.width || 30} height={item.height || 30} /> 
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {item.serviceName}
                      </p>
                    </div>
                  </div>
                </CardContent>


              </Link>
            ))}
          </div>

        </div>
      </div>
      <div>
        <p className="page-blue-heading xl:px-[100px] lg:px-[40px] md:px-[30px] xl:mt-[112px] md:mt-[76px] sm:mt-[76px] mt-[48px] xl:mb-[11px] mb-[5px] sm:px-[25px] px-[20px]">
          Our Work
        </p>
        <h3 className="page-sub-heading xl:px-[100px] lg:px-[40px] md:px-[30px] font-bold xl:mb-[24px] mb-[19px] sm:px-[25px] px-[20px]">
          Our Portfolio
        </h3>
        <div className="xl:pl-[84px] xl:pr-[30px] lg:pl-[30px] lg:pr-[10px] lg:px-0 md:px-[18px] sm:px-[18px]">
          <PortfolioSlider />
        </div>
        <div className="flex items-center justify-center mt-[46px]">
          <Link href={"/projects"}>
            <Button variant="outline" className="md:mb-[60.61px] bg-[#0B4D8E] h-12 text-white">View all Projects</Button>
          </Link>
        </div>
      </div>
      <div className="mt-[120px] bg-[#FBFCFF] sm:px-[25px] relative flex flex-col md:justify-center md:items-center sm:pb-[70px] md:pb-[150px]">
        <h3 className="xl:text-[31px] lg:text-[31px] text-[25px] font-bold xl:mb-[54px] lg:mb-[19px] mb-[50px] mt-[30px] sm:text-center  px-[20px] text-black">
          Why Us?
        </h3>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-[10px]">
          <div className="mb-[39px] md:mb-0 px-[20px] sm:px-0">
            <h5 className="lg:text-[20px] text-[19px] mb-[15px] font-semibold text-black">
              Cost Efficiency
            </h5>
            <p className="text xl:w-[390px] text-service">
              Budget-friendly IT solutions aimed at cutting expenses and
              enhancing your financial performance.
            </p>
          </div>
          <div className="mb-[39px] md:mb-0 px-[20px] sm:px-0">
            <h5 className="lg:text-[20px] text-[19px] mb-[15px] font-semibold text-black">
              Pioneering Technology
            </h5>
            <p className="text xl:w-[390px] text-service">
              We remain current with the most recent tech developments,
              delivering inventive solutions that make a difference.
            </p>
          </div>
          <div className="mb-[39px] md:mb-0 px-[20px] sm:px-0">
            <h5 className="lg:text-[20px] text-[19px] mb-[15px] font-semibold text-black">
              Expandability
            </h5>
            <p className="text xl:w-[390px] text-service">
              Our solutions are designed to adapt and expand alongside your
              business, guaranteeing optimal performance.
            </p>
          </div>
        </div>
        <div className="bg-[#0B4D8E] sm:absolute lg:h-[218px] sm:h-[150px] h-[266px] xl:w-[1260px] sm:w-[93%] md:h-[175px] sm:rounded-[10px] flex flex-col justify-center items-center xl:top-[300px] lg:top-[250px] md:top-[300px] sm:top-[270px] xl:px-[79px] lg:p-[30px] p-[16px]">
          <div className="flex lg:flex-row sm:flex-row flex-col justify-between sm:items-center w-full">
            <div className="">
              <h4 className="lg:text-[31px] md:text-[22px] text-[20px] w-full font-bold text-white">
                Expand Your Business Using Techtimize!
              </h4>
              <p className="xl:max-w-[657px] lg:max-w-[600px] md:max-w-[390px] max-w-[300px] text lg:mt-[15px] mt-[14px] mb-[18px] text-white">
                Do you have a business and want to impress your clients with
                your website and digital platform? then we’re ready to help!
              </p>
            </div>

            <Link href="/hiring-staff/questionaire">
              <Button
                className="bg-white text-black border-0 sm:w-auto w-[53%]"
                variant='secondary'
              >Getting Started{<HiArrowLongRight size={30} />}</Button></Link>

          </div>
        </div>
      </div>
      <div className="md:pt-[60px] sm:mt-[150px]">
        <p className="page-blue-heading mt-[67px] md:mt-0 mb-[3px] sm:px-[25px] px-[23px] md:px-[30px] lg:px-[40px] xl:px-[100px]">
          Testimonials
        </p>
        <h5 className="page-sub-heading font-semibold mb-[42px] px-[23px] sm:px-[25px] md:px-[30px] lg:px-[40px] xl:px-[100px]">
          Client Success Stories
        </h5>
        <div className="mb-[99px] md:mb-[118px] md:pl-[30px] md:pr-[20px] xl:pl-[100px] xl:pr-[30px] sm:pl-[20px] sm:pr-[10px] lg:mb-[144px]">
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};


