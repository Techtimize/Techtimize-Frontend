"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { testimonials } from "@/app/constants/testimonials";
import StarsReview from "./StarsReview";
import Image from "next/image";


export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const feedbacks = testimonials;
  return (
    <div className="relative">
              <Image className="start-to-finish-bg" src={"/assets/images/start-to-finish-bg.svg"} alt={"picture"} width={100} height={60} />
      <div className="relative sm:pb-[50px]">
        {/* Carousel Viewport */}
        <div className="overflow-hidden p-[50px]" ref={emblaRef}>
          <div className="flex">
            {feedbacks.map((index, i) => (
              <div
                key={i}
                className="flex-[0_0_110%] sm:flex-[0_0_45%] lg:flex-[0_0_50%] px-4"
              >
                <div className="bg-white rounded-2xl p-6 h-full shadow-[rgba(17,17,26,0.1)_0px_1px_0px,_rgba(17,17,26,0.1)_0px_8px_24px,_rgba(17,17,26,0.1)_0px_16px_48px]">
                  <div className="mb-[10px] pb-[10px] sm:flex justify-between border-b border-b-[#C7C7C7] sm:mb-[15px]">
                    <div className="sm:flex items-center gap-4 mb-3 ">
                      <img
                        src={index.clientphoto}
                        alt={index.clientname}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold text-[18px] mb-[10px]">{index.clientname}</h3>
                        <p className="text-sm text-[18px] text-[#727272]">{index.designation}</p>
                      </div>
                    </div>
                    <div className="stars sm:flex items-center">
                      <StarsReview stars={4}/>
                    </div>
                  </div>
                  <h4 className="font-bold mb-2 font-[18px]">{index.heading}</h4>
                  <p className=" mb-4 font-[18px] font-[#727272]">{index.reviews}</p>
                  <p className="text-[#323232]">{index.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute bottom-[0%] left-[32%] sm:left-[46%] top-auto bg-white  rounded-full p-2"
        >
          <IoIosArrowRoundBack size={20} className="text-[#999999]" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute bottom-[0%] right-[32%] sm:right-[46%] top-auto bg-white  rounded-full p-2">
          <IoIosArrowRoundForward size={20} className="text-[#999999]" />
        </button>
      </div>
    </div>
  );
}
