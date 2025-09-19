"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, memo } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import StarsReview from "./StarsReview";
import Image from "next/image";
import clsx from "clsx";
import { getReviews } from "@/app/api/reviews/getreviews";

const reviews = await getReviews();
console.log(reviews);

type TestimonialsProps = {
  className?: string;
};

function TestimonialsComponent({ className }: TestimonialsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className={clsx("relative", className)}>
      <Image
        className="start-to-finish-bg"
        src={"/assets/images/start-to-finish-bg.svg"}
        alt="picture"
        width={100}
        height={60}
        priority
      />

      <div className="relative sm:pb-[50px]">
        {/* Carousel Viewport */}
        <div className="overflow-hidden p-[50px] pt-[30px]" ref={emblaRef}>
          <div className="flex">
            {reviews.map((item, i) => (
              <div
                key={i}
                className="flex-[0_0_110%] sm:flex-[0_0_45%] lg:flex-[0_0_42%] px-4"
              >
                <div className="bg-white rounded-2xl p-6 h-full shadow-[rgba(17,17,26,0.1)_0px_1px_0px,_rgba(17,17,26,0.1)_0px_8px_24px,_rgba(17,17,26,0.1)_0px_16px_48px]">
                  <div className="mb-[10px] pb-[10px] sm:flex justify-between border-b border-b-[#C7C7C7] sm:mb-[15px]">
                    <div className="sm:flex items-center gap-4 mb-3">
                      {/* <img
                        src={item.clientphoto}
                        alt={item.clientname}
                        className="w-12 h-12 rounded-full"
                        loading="lazy"
                      /> */}
                      <div>
                        <h3 className="font-semibold text-[18px] mb-[10px]">
                          {item.name}
                        </h3>
                        <p className="text-sm text-[18px] text-[#727272]">
                          {item.clientDesignation}
                        </p>
                      </div>
                    </div>
                    <div className="stars sm:flex items-center">
                      <StarsReview stars={4} />
                    </div>
                  </div>
                  <p className="mb-4 text-[18px] text-[#727272] leading-[30px]">{item.content}</p>
                  {/* <p className="text-[#323232]">{reviews.date}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          aria-label="Previous testimonial"
          className="absolute z-[5] bottom-[-3%] sm:bottom-[0%] left-[29%] sm:left-[40%] lg:left-[44%] top-auto rounded-full p-2"
        >
          <IoIosArrowRoundBack size={50} className="text-[#999999]" />
        </button>

        <button
          onClick={scrollNext}
          aria-label="Next testimonial"
          className="absolute z-[5] bottom-[-3%] sm:bottom-[0%] right-[29%] sm:right-[40%] lg:right-[44%] top-auto rounded-full p-2"
        >
          <IoIosArrowRoundForward size={50} className="text-[#999999]" />
        </button>
      </div>
    </div>
  );
}

const Testimonials = memo(TestimonialsComponent);
export default Testimonials;
