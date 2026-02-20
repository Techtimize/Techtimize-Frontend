"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { process_Steps } from "@/app/constants/process_steps";

export default function WhyChooseSection() {
  return (
    <div>
      {/* Heading: pop up from center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="mt-[40px] max-w-[90%] mx-[auto] sm:mx-[unset] sm:max-w-[unset] lg:mt-[60px] mb-[30px] text-center"
      >
        <h2 className="text-center text-[27px] sm:text-[32px] mb-[20px] font-[700]">
          Why choose Techtimize
        </h2>
        <p className="text-center text-[#727272] text-[18px]">
          Start to Finish, We've Got You Covered
        </p>
      </motion.div>

      {/* Content: slide left → right */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="relative z-[1]"
      >
        <Image
          className="start-to-finish-bg"
          src={"/assets/images/start-to-finish-bg.svg"}
          alt={"picture"}
          width={100}
          height={60}
        />
        <div className="mx-[auto] max-w-[90%] sm:flex sm:container md:max-w-[80%] lg:max-w-[82%] justify-between sm:mt-[50px]">
          <div className="sm:w-[40%] flex items-center relative">
            <Image
              className="absolute w-[46%] -top-[8%] -left-[7%]"
              src={"/assets/images/haseeb-top.png"}
              alt={"picture"}
              width={500}
              height={500}
            />
            <Image
              className="w-[100%]"
              src={"/assets/images/Picture.png"}
              alt={"picture"}
              width={500}
              height={500}
            />
          </div>

          <div className="mt-[30px] sm:w-[53%] sm:mt-[0] flex flex-wrap justify-between">
            {process_Steps.map((step, index) => (
              <div
                key={index}
                className="sm:w-[100%] pb-[25px] lg:w-[42%] understanding pt-[25px] group"
              >
                <h3 className="text-[18px] font-[800]">{step.title}</h3>
                <p className="text-[#727272] my-[15px]">{step.content}</p>
                <div className="flex items-center text-[#0B4D8E] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                  <Link href={"/about"}>Learn More</Link>
                  <FaArrowRight className="ml-[10px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
