"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; 
import React from "react";
import projectsProps from "@/app/types/project.type";

const PortfolioCard = ({ cardData }: {cardData:projectsProps}) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/projects/${cardData?._id}`); 
  };
   
  return (
    <div
      onClick={handleNavigation} 
      className="lg:w-[400px] lg:h-[430px] md:w-[308px] md:h-[380px] w-[288px] h-[370px] rounded-[10px] shadow-lg cursor-pointer"
    >
      <div>
        <Image
          // src={cardData?.posterImage}
          src={"/assets/images/fresha.png"}
          alt={"project image"}
          width={460}
          height={300}
          className="rounded-t-[10px] lg:w-[460px] lg:h-[230px] md:w-[308px] md:h-[216px] w-[294px] h-[205px] object-cover"
        />
      </div>
      <div className="lg:px-[27px] md:px-[26px] px-[20px]">
        <h5 className="lg:text-[20px] md:text-[20px] text-[19px] font-semibold mt-[20px] lg:mb-[10px] mb-[5px] text-black">
          {cardData?.name}
        </h5>
        <p className="text text-darkGrey">
          {cardData?.description}
        </p>
        <div className="flex justify-end lg:mt-[25px] mt-[10px]">
          <button
            onClick={handleNavigation} 
            className="lg:text-[14px] md:text-[12px] text-[10px] font-semibold text-[#0697D5]"
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
