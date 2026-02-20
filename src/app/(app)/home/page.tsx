import React from "react";
import ProjectLogoSlider from "../../components/home/ProjectLogoSlider";
import type { Metadata } from "next";
import { generateMetadataFromBE } from "@/app/lib/utils";
import HeroSection from "../../components/home/HeroSection";
import Image from "next/image";
import Btn_redesign from "@/components/ui/btn_redesign";
import Heading_proto from "@/components/heading_prototype";
import getServices from "@/app/api/services/get_services";
import ServicesSection from "../../components/home/ServicesSection";
import './home.css';
import ProjectSlider from "../../components/home/ProjectSlider";
import Transforming from "../../components/home/Transforming";
import Technologies from "../../components/home/Technologies";
import { get3LatestBlogs } from "@/app/api/blogs/getlatestblogs";
import HomeBlogs from "../../components/home/HomeBlogs";
import Testimonials from "../../components/home/Testimonials"
import { Input } from "@/components/ui/input";
import WhyChooseSection from "../../components/home/WhyChooseSection";
import Ai_transformation from "@/app/components/home/Ai_transformation";
import BlogsSection from "@/app/components/home/BlogsSection";


export async function generateMetadata(): Promise<Metadata> {
  return await generateMetadataFromBE("home");
}


export default async function Home() {
  const services = await getServices();
  const blogs = await get3LatestBlogs();
  return (
    <div className="bg-white home-page">
      <HeroSection />

      <Transforming />
    <Heading_proto heading="Technologies" para="The Technology Stack We Use to Make Optimal Softwares" className="mt-[80px]" />
      <Technologies />

   
      <ServicesSection services={services} />
      <Ai_transformation />
      <WhyChooseSection />
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

      <BlogsSection data={blogs} />
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
