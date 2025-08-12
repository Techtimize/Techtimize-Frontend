"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./ProjectSlider.css"
import Image from "next/image";
import { getProjects } from "@/app/api/projects/get_project";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

  const Projects = await getProjects();
// console.log(Projects);
export default function ProjectSlider() {
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start", 
    containScroll: "trimSnaps",
  });



  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <Link href={"#"} className="relative projectslider">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {Projects.map((index)=>{
            return(
              <Link href={"#"} className="embla__slide" key={index._id}>
               <h3 className="text-[#0697D5] bg-[#F2FBFF] inline px-[15px] py-[10px] rounded-[40px]">{index.tags[1]}</h3>
               <Image className="w-[100%] h-[250px] rounded-[24px] object-cover mt-[22px]" src={index.previewImage} alt="icon" height={100} width={100}/>
                <h2 className="my-[20px] text-[18px] font-[600] block">{index.name}</h2> 
                
                <p className="text-[#727272]">{index.description}</p> 
              </Link>
            )
          })}
        </div>
      </div>
      {/* Arrow Navigation */}
      <div className="arrows flex justify-end gap-2 mt-2">
        <button onClick={scrollPrev} className="px-[12px] py-[12px] text-[18px] sm:text[16px]  sm:px-3 sm:py-[12px] text-[#fff] rounded-[30px] bg-[#0697D5]"><IoIosArrowBack /></button>
        <button onClick={scrollNext} className="px-[12px] py-[12px] text-[18px] sm:text[16px]  sm:px-3 sm:py-[12px] text-[#fff] rounded-[30px] bg-[#0697D5]"><IoIosArrowForward /></button>
      </div>
    </Link>
  );
}
