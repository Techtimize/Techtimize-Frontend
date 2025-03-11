"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link'
import { Button } from "@/components/ui/button";

const imageVariants = {
  hidden: { opacity: 0, x: 15 },
  visible: { opacity: 1, x: 0 },
};

const HeroSection = () => {
  
  return (
    <div className="flex md:justify-between my-[45px] sm:my-0 sm:mb-[45px] md:mt-[45px] sm:justify-between justify-center md:flex-row sm:flex-row flex-col md:gap-[10px] sm:px-[25px] md:px-[30px] lg:px-[40px] px-[16px]">
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="xl:ml-[64px] md:mt-[36px] sm:mt-[36px]"
      >
        <h1 className="md:text-[42px] sm:text-[42px] text-[31px] font-bold xl:max-w-[428px] max-w-[305px] text-greyDark xl:mb-[12px] mb-[18px] font-Satoshi-Bold">
          Transforming Concepts into Code
        </h1>
        <p className="text-lightGrey xl:text-[18px] text-[14px] xl:mb-[12px] mb-[18px]">
          Enterprises . Start Ups. Growing Companies
        </p>
        <p className="text text-lightGrey xl:max-w-[628px] max-w-[300px] xl:mb-[32px] mb-[25px]">
          We cater to all sorts of businesses. We help you harness the power of
          technology to achieve your goals.
        </p>

        <Link href="/about">
          <Button variant="outline"  className="md:mb-[60.61px] bg-[#0B4D8E] h-12 text-white" >Learn More</Button>
        </Link>
      </motion.div>
      <div className="xl:mr-[74.53px] mt-[50px] md:mt-0">
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
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
            >
              <Image
              priority
                src={"/assets/images/hero1.png"}
                width={492}
                height={529}
                alt={"hero1"}
                className="lg:w-[395px] lg:h-[425px] md:h-[390px] sm:h-[320px] md:w-[370px] sm:w-[320px] w-[312px] h-[312px]"
              />
              <Image
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
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
