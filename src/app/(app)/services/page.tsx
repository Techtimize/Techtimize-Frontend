import PageHeader from "@/app/components/PageHeader/PageHeader";
import Image from "next/image";
import React, { Suspense } from "react";
import type { Metadata } from "next";
import { generateMetadataFromBE } from "@/app/lib/utils";
import GetAllStacks from "./http/fetchstack"

import { getCanonicalUrl } from "@/app/lib/getCanonial";
import ServiceCard from "@/app/components/home/ServiceCard";
import Heading_proto from "@/components/heading_prototype";
import getServices from "@/app/api/services/get_services";
export async function generateMetadata(): Promise<Metadata> {
  const canonical = await getCanonicalUrl("/services");

  return {
    title: "Services | Techtimize",
    alternates: {
      canonical,
    },
  };
};

  const services = await getServices();


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
        <GetAllStacks />
          <Heading_proto heading="Our Services" para="Discover our Services from our top-loved selections, designed to help you learn, grow, and succeed" />
                <div className=" max-w-[90%] mx-[auto] flex flex-wrap lg:max-w-[82%] justify-between sm:max-w-[80%]">
        
                  {services.map((key) => {
                    return (
                      <div key={key._id} className="sm:w-[48%] sm:mt-[30px] lg:w-[30%] shadow-[rgba(0,0,0,0.1)_0px_10px_50px] mb-[35] rounded-[20px] lg:mt-[20px]">
                        <ServiceCard
                          key={key._id}
                          url={key.url}
                          title={key.serviceName}
                          description={key.description}
                          image={key.iconUrl}
                        />
                      </div>
                    );
                  })}
      </div>
    </div>
    </div>
  );
};

export default Services;
