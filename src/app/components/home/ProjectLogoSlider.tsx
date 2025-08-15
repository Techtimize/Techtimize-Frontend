"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { logos } from "@/app/constants/homepage_slider";

const sliderClasses =
  "embla__slide flex-none flex-grow-0 flex-shrink-0 xl:w-auto md:w-[30%] sm:w-[25%] w-[60%]";


const repeatedLogos = [...logos, ...logos, ...logos];

const ProjectLogoSlider = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 1,
        startDelay: 0,
        direction: "forward",
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <div className="relative overflow-hidden">
      {/* Left blur */}
      <div className="absolute left-0 top-0 h-full w-[60px] z-10 pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent" />
      
      {/* Right blur */}
      <div className="absolute right-0 top-0 h-full w-[60px] z-10 pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent" />

      <div className="embla" ref={emblaRef}>
        <div className="flex py-2 px-[20px] gap-x-[100px]">
          {repeatedLogos.map((logo, index) => (
            <div className={sliderClasses} key={index}>
              <div className="flex items-center justify-center w-full h-[49px] xl:gap-[21px] lg:gap-[21px] gap-[10px] lg:h-[104px] md:h-[66px]">
              <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={logo.className}
              />
                {logo.label && (
              <p className="xl:text-[25px] lg:text-[25px] md:text-[20px] font-bold">
                    {logo.label}
                  </p>
                )}
          </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectLogoSlider;
