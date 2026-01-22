"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import Typewriter from 'typewriter-effect';
import Btn_redesign from "@/components/ui/btn_redesign";
import { MdArrowOutward } from "react-icons/md";
import { FaVideo } from "react-icons/fa";


const imageVariants = {
  hidden: { opacity: 0, x: 15 },
  visible: { opacity: 1, x: 0 },
};

const HeroSection = () => {
  
  return (
    <div className="flex md:justify-between my-[45px] sm:my-0 sm:mb-[0px] md:mt-[45px] sm:justify-between justify-center md:flex-row sm:flex-row flex-col md:gap-[10px] sm:px-[25px] md:px-[30px] lg:px-[40px] px-[16px] x2000:justify-center x2000:max-w-[90%] x2000:mx-[auto]">
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="xl:ml-[64px] md:mt-[36px] sm:mt-[36px] sm:w-[50%]"
      >
        <h1 className="md:text-[42px] sm:text-[42px]  text-[28px] font-bold lg:max-w-[600px] max-w-[305px] xl:mb-[12px] mb-[18px] font-Satoshi-Bold text-[#0B4D8E]">
          Empowering Businesses with Intelligent Software & 
           <span className="text-[#0697D5]"> AI </span>
           <span className="text-[#0697D5] inline sm:block typewriter-parent">  
            <Typewriter 
      options={{
        strings: ['Solutions' , 'Automations' , 'Innovation'],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 40,
      }}/></span>
        </h1>
        <p className="text-lightGrey xl:text-[18px] text-[14px] xl:mb-[12px] mb-[18px] sm:max-w-[78%]">
 We transform your ideas into scalable, future-ready digital products, enhanced with AI and automation ,enabling smarter operations, sustainable growth, and measurable impact.
        </p>
        <div className="flex items-center w-[100%] sm:w-[50%] justify-between my-[25px]">
          <Link href="https://clutch.co/profile/techtimize" className="w-[47%]">
          <Image  className="w-[100%] object-contain"
          src = {"/assets/images/clutch-reviews.svg"} alt ={"google reviews"} width={130} height ={130}
          />
          </Link>
          <Link target="_blank" href={"https://www.google.com/search?kgmid=/g/11yk59lcvf&hl=en-US&q=Techtimize&shndl=30&shem=lcuae,lscta1,shrtsdl&source=sh/x/loc/osrp/m5/1&kgs=8fe6daa0c99b1721&utm_source=lcuae,lscta1,shrtsdl,sh/x/loc/osrp/m5/1#lrd=0x39190100393805a9:0x5fa5a9445539d707,1"} className="w-[47%]">
          <Image  className="w-[100%] object-contain"
          src = {"/assets/images/google-reviews.svg"} alt ={"google reviews"} width={130} height ={130}
          />
          </Link>
        </div>
        <div className="max-w-[210px] sm:flex sm:max-w-[unset]">
        <Btn_redesign content={"Schedule Meeting"} url={"/hiring-staff/need-to-consult"} icon={FaVideo} className="sm:w-[unset] w-[100%]"/>
         <Link className="px-[10px] border border-[#000] sm:mt-[0] mt-[15px] sm:px-[30px] sm:ml-[30px] py-[12px] rounded-[8px] font-medium flex items-center" href="/contact-us">
             Get In Touch <MdArrowOutward className="ml-[10px]"/>
        </Link> 
        </div>
      </motion.div>
    
      <div className="sm:mt-[50px] md:mt-0 sm:w-[47%]">
          <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className=""
      >
          <div className="relative flex justify-center md:block">
            {/* <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute xl:top-[-30px] top-[-30px]"
            > 
               <Image
                src={"/assets/images/hero2.png"}
                alt={"hero2"}
                width={130}
                height={130}
                className="xl:w-[100px] w-[82.44px] lg:w-[105px] lg:h-[105px] xl:h-[100px] h-[82.44px] md:w-[100px] md:h-[100px] sm:w-[85px] sm:h-[85px]"
              />
            </motion.div> 
             <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            > */}
              <Image
              priority
                src={"https://techtimize-app-720869613f134d34bdacf758feb5bedc-production.s3.ap-south-1.amazonaws.com/images/hero-section-image.png"}
                width={492}
                height={529}
                alt={"hero1"}
                className="lg:w-[100%] object-contain lg:object-[unset] lg:h-[100%] md:h-[390px] sm:h-[320px] md:w-[370px] sm:w-[320px] w-[312px] h-[312px]"
              />
              {/* <Image
                src={"/assets/svgs/polygon.svg"}
                alt="polygon"
                width={76.28}
                height={76.28}
                className="absolute xl:right-[-4%] sm:right-[-1.5%] sm:bottom-[22%] md:right-[-0.5%] md:bottom-[23%] lg:right-0 lg:bottom-[24%] right-[-2%] xl:bottom-[20%] bottom-[21%] xl:w-[76.28px] xl:h-[76.28px] w-[47.93px] h-[47.93px]"
              /> 
             </motion.div> 
             <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute xl:bottom-[-10px] bottom-[-15px]"
            > 
               <Image
                src={"/assets/images/hero3.png"}
                alt={"hero3"}
                width={130}
                height={130}
                className="xl:w-[100px] lg:w-[105px] lg:h-[105px] w-[82.44px] xl:h-[100px] h-[82.44px] md:w-[100px] md:h-[100px] sm:w-[85px] sm:h-[85px]"
              /> 
             </motion.div> */}
          </div>
             </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
