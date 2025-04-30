"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const ProjectLogoSlider = () => {
  const [emblaRef, embla] = useEmblaCarousel(
    {
      loop: true,
    },
    [AutoScroll()]
  );

  useEffect(() => {
    if (embla) {
      const intervalId = setInterval(() => {
        embla.scrollNext();
      }, 3000); 

      return () => clearInterval(intervalId);
    }
  }, [embla]);

  return (
    <div className="overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="flex py-2 px-[20px]">
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 xl:w-[20%] md:w-[30%] sm:w-[25%] w-[60%]">
            <div className="flex items-center justify-center lg:w-full lg:h-[104px] md:w-[189px] md:h-[66px] w-[156px] h-[49px]">
              <Image
                src={"/assets/images/salesMind.png"}
                alt={"sales mind"}
                width={89}
                height={89}
                className="lg:w-[89px] lg:h-[89px] md:w-[44px] md:h-[44px] w-[43.56px] h-[43.56px]"
              />
              <p className="xl:text-[25px] lg:text-[25px] md:text-[20px] font-bold">
                Sales Mind
              </p>
            </div>
          </div>
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 xl:w-[20%] md:w-[30%] sm:w-[25%] w-[60%]">
            <div className="flex items-center justify-center lg:w-full lg:h-[104px] md:w-[189px] md:h-[66px] w-[156px] h-[49px]">
              <Image
                src={"/assets/images/sunndio.png"}
                alt={"sunndio"}
                width={201}
                height={90}
                className="w-[110px] h-[49px] lg:w-[201px] lg:h-[90px] md:w-[159px] md:h-[66px]"
              />
            </div>
          </div>
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 xl:w-[20%] md:w-[30%] sm:w-[25%] w-[60%]">
            <div className="flex items-center justify-center lg:w-full lg:h-[104px] md:w-[189px] md:h-[66px] w-[156px] h-[49px]">
              <Image
                src={"/assets/images/check.png"}
                alt={"check ai"}
                width={200}
                height={104}
                className="lg:w-[200px] lg:h-[104px] md:h-[89px] md:w-[170px] h-[49px] w-[100px]"
              />
            </div>
          </div>
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 xl:w-[20%] md:w-[30%] sm:w-[25%] w-[60%]">
            <div className="flex items-center justify-center xl:gap-[21px] lg:gap-[21px] gap-[10px]  lg:h-[104px] md:h-[66px] h-[49px] w-full">
              <Image
                src={"/assets/images/bitcoin.png"}
                alt={"bitcoin"}
                width={63}
                height={63}
                className="lg:w-[63px] lg:h-[63px] md:w-[36px] md:h-[36px] w-[40px] h-[40px]"
              />
              <p className="xl:text-[25px] lg:text-[25px] md:text-[20px] font-bold">
                Bitcoin tribe
              </p>
            </div>
          </div>
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 xl:w-[20%] md:w-[30%] sm:w-[25%] w-[60%]">
            <div className="flex items-center justify-center lg:h-[104px] md:h-[66px] w-full h-[49px]">
              <Image
                src={"/assets/images/senSights.png"}
                alt={"sen sights"}
                width={239}
                height={59}
                style={{ height: "auto" }} 
              />
            </div>
          </div>
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 xl:w-[20%] md:w-[30%] sm:w-[25%] w-[60%]">
            <div className="flex items-center justify-center lg:h-[104px] md:h-[66px] w-full h-[49px]">
              <Image
                src={"/assets/images/fresha.png"}
                alt={"fresha"}
                width={96}
                height={31}
                className="lg:w-[140px] lg:h-[51px] w-[96px] h-[31px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLogoSlider;
