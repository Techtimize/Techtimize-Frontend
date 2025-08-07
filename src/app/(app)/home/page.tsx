import React from "react";
import ProjectLogoSlider from "./components/ProjectLogoSlider";
import type { Metadata } from "next";
import { generateMetadataFromBE } from "@/app/lib/utils";
import HeroSection from "./components/HeroSection";
import Image from "next/image";
import Btn_redesign from "@/components/ui/btn_redesign";
import Heading_proto from "@/components/heading_prototype";
import getServices from "@/app/api/services/get_services";
import ServiceCard from "./components/ServiceCard";
import { process_Steps } from "@/app/constants/process_steps";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import './home.css';
import ProjectSlider from "./components/ProjectSlider";
import Transforming from "./components/Transforming";
import Technologies from "./components/Technologies";
// import { get3LatestBlogs } from "@/app/api/blogs/getlatestblogs";


export async function generateMetadata(): Promise<Metadata> {
  return await generateMetadataFromBE("home");
}



export default async function Home() {
  const services = await getServices();
  // const blogs = await get3LatestBlogs();

  return (
    <div className="bg-white home-page">
      <HeroSection />

      <Transforming />
      <div className="pb-10 mb-[40px]">
        <Heading_proto heading="Clients Served" />
        <ProjectLogoSlider />
      </div>
      <div>
        <Heading_proto heading="Our Services" para="Discover our Services from our top-loved selections, designed to help you learn, grow, and succeed" />
        <div className="container flex flex-wrap lg:max-w-[82%] justify-between">

          {services.map((key) => {
            return (
              <div key={key._id} className="w-[30%] shadow-[rgba(0,0,0,0.1)_0px_10px_50px] mb-[35] rounded-[20px] mt-[70px]">
                <ServiceCard
                  key={key._id}
                  title={key.serviceName}
                  description={key.description}
                  image={key.iconUrl}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-[30px] text-center">
          <Btn_redesign content="View All Services" url="#" />
        </div>
      </div>
      <div>
        <Heading_proto heading="Start to Finish, We've Got You Covered" para="A comprehensive yet sim designed to deliver exactly what you need." />
        <div className="mx-[auto] max-w-[90%] sm:flex sm:container md:max-w-[80%] lg:max-w-[82%] justify-between">
          <div className="sm:w-[40%] flex items-center">
            <Image className="w-[100%]" src={"/assets/images/picture.svg"} alt={"picture"} width={100} height={60} />
          </div>
          <div className="mt-[30px] sm:w-[53%] sm:mt-[0] flex flex-wrap justify-between">
            {process_Steps.map((step, index) => (
              <div key={index} className=" sm:w-[100%] pb-[25px] lg:w-[35%] understanding pt-[25px]">
                <h2 className="text-[18px] font-[800]">{step.title}</h2>
                <p className="text-[#727272] my-[15px]">{step.content}</p>
                <div className="flex items-center text-[#0B4D8E]"> <Link href={"/about"}>Learn More </Link>
                  <FaArrowRight className="ml-[10px]" />
                </div></div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-[auto] sm:container md:max-w-[80%] max-w-[90%] lg:max-w-[82%]">
        <Heading_proto heading="Our Projects" para="A Detailed Review of Techtimize Project’s" alignment="text-left" />
        <ProjectSlider />
      </div>
      <Heading_proto heading="Technologies" para="The Technology Stack We Use to Make Optimal Softwares" />
      <Technologies />

      <Heading_proto heading="Read our Blogs " para="A comprehensive yet sim designed to deliver exactly what you need." />
      
    </div>
  );
}
