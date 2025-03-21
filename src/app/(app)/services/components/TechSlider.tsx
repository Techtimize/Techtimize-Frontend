"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import stackProps from "@/app/types/stacks.type";

export default function TechSlider({ servicedata }: { servicedata: stackProps[] }) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      AutoScroll({
        speed: 4, // Increase speed to make it noticeable
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <div className="overflow-hidden xl:py-[40px] md:py-[30px] py-[20px]">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {servicedata.map((service) => (
            <div key={service._id} className="embla__slide flex-none w-auto">
              <div className="flex items-center justify-center h-full">
                <Image
                  src={service.serviceImage}
                  alt={service.name}
                  width={108}
                  height={71}
                  className="xl:w-[108px] xl:h-[91px] md:w-[83.06px] md:h-[70px] w-[53.06px] h-[49.36px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
