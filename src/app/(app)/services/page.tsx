import PageHeader from "@/app/components/PageHeader/PageHeader";
import Image from "next/image";
import React from "react";
import PopularServices from "./components/PopularServices";
import type { Metadata } from 'next';
import { generateMetadataFromBE } from "@/app/lib/utils";
import GetAllStacks from "./http/fetchstack";
 

export async function generateMetadata(): Promise<Metadata> {
  return await generateMetadataFromBE("services");
}

const Services = () => {

  return (
    <div>
      <PageHeader subHeading="Services" heading="Our Services" />
      <div>
        <div className="flex flex-col justify-center items-center pt-[30px] bg-gradient-to-b from-white to-[#FAFBFE] pb-[50px] px-[20px]">
          <p className="page-blue-heading xl:mb-[11px] mb-[5px]">Our Working</p>
          <h3 className="page-sub-heading font-bold xl:mb-[34px] mb-[19px]">
            How Do We Work
          </h3>
          <Image
            src={"/assets/svgs/serviceImg.svg"}
            alt={"working process"}
            width={1242.8}
            height={435.23}
            className="hidden sm:block"
          />
          <Image
            src={"/assets/svgs/serviceImg2.svg"}
            alt={"working process"}
            width={350}
            height={1264.26}
            className="block sm:hidden"
          />
        </div>
        {/* <TechSlider /> */}
        <GetAllStacks/>
        <div className="flex flex-col items-center pt-[40px] pb-[60px] px-[5%] bg-[#FBFCFF]">
          <p className="page-blue-heading xl:mb-[11px] mb-[5px]">Our Work</p>
          <h3 className="page-sub-heading font-bold xl:mb-[34px] mb-[19px]">
            Our Popular Services
          </h3>
          <PopularServices />
        </div>
      </div>
    </div>
  );
};

export default Services;
