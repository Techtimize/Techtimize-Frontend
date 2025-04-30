"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; 
import React from "react";
import projectsProps from "@/app/types/project.type";
import { Skeleton } from "@/components/ui/skeleton";

const PortfolioCard = ({ cardData }: { cardData?: projectsProps }) => {
  const router = useRouter();

  const handleNavigation = () => {
    if (cardData) {
      router.push(`/projects/${cardData.slug}`);
    }
  };

  if (!cardData) {
    return (
      <div className="lg:w-[400px] lg:h-[430px] md:w-[308px] md:h-[380px] w-[288px] h-[370px] rounded-[10px] shadow-lg">
        <Skeleton className="rounded-t-[10px] lg:w-[460px] lg:h-[230px] md:w-[308px] md:h-[216px] w-[294px] h-[205px]" />
        <div className="lg:px-[27px] md:px-[26px] px-[20px]">
          <Skeleton className="h-6 w-3/4 mt-[20px] lg:mb-[10px] mb-[5px]" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6 mt-2" />
          <div className="flex justify-end lg:mt-[25px] mt-[10px]">
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={handleNavigation} 
      className="flex flex-col lg:w-[400px] lg:h-[430px] md:w-[308px] md:h-[380px] w-[288px] h-[370px] rounded-[10px] shadow-lg cursor-pointer"
    >
      <div>
        <Image
          src={cardData?.posterImage}
          alt={"project image"}
          width={460}
          height={300}
          unoptimized
          className="rounded-t-[10px] lg:w-[460px] lg:h-[230px] md:w-[308px] md:h-[216px] w-[294px] h-[205px] object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 lg:px-[27px] md:px-[26px] px-[20px]">
        <h5 className="lg:text-[20px] md:text-[20px] text-[19px] font-semibold mt-[20px] lg:mb-[10px] mb-[5px] text-black">
          {cardData.name}
        </h5>
        <p className="text text-darkGrey flex-1">
          {cardData.description}
        </p>
        <div className="flex flex-1 justify-end items-center">
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