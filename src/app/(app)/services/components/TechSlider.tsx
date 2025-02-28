"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const TechSlider = () => {
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
      }, 3000); // Adjust the interval as needed (in milliseconds)

      return () => clearInterval(intervalId);
    }
  }, [embla]);

  return (
    <div className="overflow-hidden xl:py-[40px] md:py-[30px] py-[20px]">
      <div className="embla" ref={emblaRef}>
        <div className="flex py-2 px-[20px] xl:gap-[40px] md:gap-[15px] gap-[10px]">
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 w-auto">
            <div className="flex items-center justify-center h-full">
              <Image
                src={"/assets/svgs/javascript1.svg"}
                alt={"js1"}
                width={108}
                height={71}
                className="xl:w-[108px] xl:h-[91px] md:w-[83.06px] md:h-[70px] w-[53.06px] h-[49.36px]"
              />
            </div>
          </div>
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 w-auto">
            <div className="flex items-center justify-center h-full">
              <Image
                src={"/assets/svgs/css.svg"}
                alt={"css"}
                width={86}
                height={71}
                className="xl:w-[86px] xl:h-[91px] md:w-[83.06px] md:h-[70px] w-[53.06px] h-[49.36px]"
              />
            </div>
          </div>
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 w-auto">
            <div className="flex items-center justify-center h-full">
              <Image
                src={"/assets/svgs/javascript.svg"}
                alt={"javascript"}
                width={100}
                height={71}
                className="xl:w-[100px] xl:h-[91px] md:w-[83.06px] md:h-[70px] w-[53.06px] h-[49.36px]"
              />
            </div>
          </div>
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 w-auto">
            <div className="flex items-center justify-center h-full">
              <Image
                src={"/assets/svgs/html.svg"}
                alt={"html"}
                width={100}
                height={71}
                className="xl:w-[100px] xl:h-[95px] md:w-[83.06px] md:h-[70px] w-[53.06px] h-[49.36px]"
              />
            </div>
          </div>
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 w-auto">
            <div className="flex items-center justify-center h-full">
              <Image
                src={"/assets/svgs/bootstrap.svg"}
                alt={"bootstrap"}
                width={100}
                height={80}
                style={{ height: "auto" }}
                className="xl:w-[100px] xl:h-[80px] md:w-[80px] md:h-[80px] w-[55.53px] h-[43.81px]"
              />
            </div>
          </div>
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 w-auto">
            <div className="flex items-center justify-center h-full">
              <Image
                src={"/assets/svgs/react.svg"}
                alt={"react"}
                width={83}
                height={71}
                className="xl:w-[83px] xl:h-[71px] md:w-[70px] md:h-[70px] w-[43.81px] h-[43.81px]"
              />
            </div>
          </div>
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 w-auto">
            <div className="flex items-center justify-center h-full">
              <Image
                src={"/assets/svgs/node.svg"}
                alt={"node"}
                width={93}
                height={93}
                className="xl:w-[93px] xl:h-[93px] md:w-[70px] md:h-[70px] w-[43.81px] h-[43.81px]"
              />
            </div>
          </div>
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 w-auto">
            <div className="flex items-center justify-center h-full">
              <Image
                src={"/assets/svgs/mongo.svg"}
                alt={"mongo"}
                width={194}
                height={52}
                className="xl:w-[194px] xl:h-[52px] md:w-[150px] md:h-[40px] w-[80px] h-[35px]"
              />
            </div>
          </div>
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 w-auto">
            <div className="flex items-center justify-center h-full">
              <Image
                src={"/assets/svgs/js.svg"}
                alt={"js"}
                width={73}
                height={72}
                className="xl:w-[73px] xl:h-[72px] md:w-[65px] md:h-[65px] w-[43.81px] h-[43.81px]"
              />
            </div>
          </div>
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 w-auto">
            <div className="flex items-center justify-center h-full">
              <Image
                src={"/assets/svgs/angular.svg"}
                alt={"angular"}
                width={72}
                height={71}
                className="xl:w-[72px] xl:h-[71px] md:w-[65px] md:h-[65px] w-[43.81px] h-[43.81px]"
              />
            </div>
          </div>
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 w-auto">
            <div className="flex items-center justify-center h-full">
              <Image
                src={"/assets/svgs/tailwind.svg"}
                alt={"tailwind"}
                width={72}
                height={71}
                className="xl:w-[72px] xl:h-[71px] md:w-[65px] md:h-[65px] w-[43.81px] h-[43.81px]"
              />
            </div>
          </div>
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 w-auto">
            <div className="flex items-center justify-center h-full">
              <Image
                src={"/assets/svgs/nextJs.svg"}
                alt={"nextJs"}
                width={72}
                height={71}
                className="xl:w-[72px] xl:h-[71px] md:w-[65px] md:h-[65px] w-[43.81px] h-[43.81px]"
              />
            </div>
          </div>
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 w-auto">
            <div className="flex items-center justify-center h-full">
              <Image
                src={"/assets/svgs/typescript.svg"}
                alt={"typescript"}
                width={72}
                height={71}
                className="xl:w-[72px] xl:h-[71px] md:w-[65px] md:h-[65px] w-[43.81px] h-[43.81px]"
              />
            </div>
          </div>
          <div className="embla__slide flex-none flex-grow-0 flex-shrink-0 w-auto">
            <div className="flex items-center justify-center h-full">
              <Image
                src={"/assets/svgs/redux.svg"}
                alt={"redux"}
                width={72}
                height={71}
                className="xl:w-[72px] xl:h-[71px] md:w-[65px] md:h-[65px] w-[43.81px] h-[43.81px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSlider;
