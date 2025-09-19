import React from "react";
import ProjectLogoSlider from "../../components/home/ProjectLogoSlider";
import type { Metadata } from "next";
import { generateMetadataFromBE } from "@/app/lib/utils";
import HeroSection from "../../components/home/HeroSection";
import Image from "next/image";
import Btn_redesign from "@/components/ui/btn_redesign";
import Heading_proto from "@/components/heading_prototype";
import getServices from "@/app/api/services/get_services";
import ServiceCard from "../../components/home/ServiceCard";
import { process_Steps } from "@/app/constants/process_steps";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import './home.css';
import ProjectSlider from "../../components/home/ProjectSlider";
import Transforming from "../../components/home/Transforming";
import Technologies from "../../components/home/Technologies";
import { get3LatestBlogs } from "@/app/api/blogs/getlatestblogs";
import HomeBlogs from "../../components/home/HomeBlogs";
import Testimonials from "../../components/home/Testimonials"
import { Input } from "@/components/ui/input";
import { FaVideo } from "react-icons/fa";
import Ai_transformation from "@/app/components/home/Ai_transformation";



export async function generateMetadata(): Promise<Metadata> {
  return await generateMetadataFromBE("home");
}



export default async function Home() {
  const services = await getServices();
  const blogs = await get3LatestBlogs();
  // console.log(blogs);
  return (
    <div className="bg-white home-page">
      <HeroSection />

      <Transforming />
    <Heading_proto heading="Technologies" para="The Technology Stack We Use to Make Optimal Softwares" className="mt-[80px]" />
      <Technologies />

   
      <div>
        <Heading_proto heading="Our Services" para="Discover services designed to help your business grow and succeed." />
        <div className=" max-w-[90%] mx-[auto] flex flex-wrap lg:max-w-[82%] justify-between sm:max-w-[80%]">

          {services.map((key) => {
            return (
              <div key={key._id} className="sm:w-[48%] sm:mt-[30px] lg:w-[30%] shadow-[rgba(0,0,0,0.1)_0px_10px_50px] mb-[35] rounded-[20px] lg:mt-[20px] z-[9]">
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
        <div className="mt-[20px] sm:mt-[30px] text-center">
          <Btn_redesign content="View All Services" url="/services" />
        </div>
      </div>
      <Ai_transformation />
      <div>
        <Heading_proto heading="Why choose Techtimize" para="Start to Finish, We've Got You Covered" />
        <div className="relative z-[1]">
          <div className="mx-[auto] max-w-[90%] sm:flex sm:container md:max-w-[80%] lg:max-w-[82%] justify-between sm:mt-[50px]">
            <div className="sm:w-[40%] flex items-center">
              <Image className="w-[100%]" src={"/assets/images/Picture.svg"} alt={"picture"} width={100} height={100} />
              <Image className="start-to-finish-bg" src={"/assets/images/start-to-finish-bg.svg"} alt={"picture"} width={100} height={60} />
            </div>


            <div className="mt-[30px] sm:w-[53%] sm:mt-[0] flex flex-wrap justify-between">
              {process_Steps.map((step, index) => (
                <div key={index} className=" sm :w-[100%] pb-[25px] lg:w-[42%] understanding pt-[25px]">
                  <h3 className="text-[18px] font-[800]">{step.title}</h3>
                  <p className="text-[#727272] my-[15px]">{step.content}</p>
                  <div className="flex items-center text-[#0B4D8E]"> <Link href={"/about"}>Learn More </Link>
                    <FaArrowRight className="ml-[10px]" />
                  </div></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image className="project-bg" src={"/assets/images/projects-bg.svg"} alt="tick" height={20} width={20} />
        <div className="mx-[auto] sm:container md:max-w-[80%] max-w-[90%] lg:max-w-[82%] ">
          <Image className="project-bg" src={"/assets/images/projects-bg.svg"} alt="tick" height={20} width={20} />
          <Heading_proto heading="Our Projects" para="A Detailed Review of Techtimize Project’s" alignment="text-left" />
          <ProjectSlider />
             <div className="mt-[80px] lg:mt-[30px] text-center">
          <Btn_redesign content="View All Projects" url="/projects" />
        </div>
        </div>
           <div>
        <Heading_proto heading="Clients Served" />
        <ProjectLogoSlider />
      </div>
      </div>

      <Heading_proto heading="Read our Blogs " para="Stay updated with the latest insights, tips, and trends." />
      <HomeBlogs data={blogs} />
      <div className="text-center mt-[30px] mb-[50px] sm:mb-[100px]">
        <Btn_redesign content={"View All"} url={"/blogs"} />
      </div>
      <Heading_proto heading="What Our Valued Customers Say" para="Trusted by Clients, Loved for Results" />
      <Testimonials />
      <div className="relative">
     <Image src={"/assets/images/Aroow.svg"} alt="arrow" width={500} height={500} className="aroow"/>
        <div className="max-w-[90%] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] lg:max-w-[55%] sm:max-w-[80%] mx-[auto] py-[60px] rounded-[16px] sm:my-[100px] my-[50px] relative z-[9] bg-[#fff]">
          <Heading_proto heading="Get In Touch" para="Subscribe Us to Get in Touch With Us And Enjoy The Latest Updates " className="!mt-[0px]" />
          <div className="rounded-[12px] sm:flex max-w-[75%] mx-[auto] text-center" >
            <Input type="Email" id="Email" className="rounded-[0] h-[unset] sm:rounded-tl-[12px] sm:rounded-bl-[12px]" autoComplete="email" placeholder="Enter Your Email" />
            <Btn_redesign content="Subscribe" url="#" className="sm:mt-[0] sm:rounded-tl-[0px] sm:rounded-bl-[0px] sm:rounded-tr-[10px] sm:rounded-br-[10px] sm:mt=[0] mt-[15px]" />
        </div>
        </div>
     <Image src={"/assets/images/newsletter-bg.svg"} alt="arrow" width={100} height={100} className="newsletter-bg"/>
      </div>
    </div>
  );
}
