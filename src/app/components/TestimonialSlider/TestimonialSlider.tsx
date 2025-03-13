'use client'
import AutoScroll from "embla-carousel-auto-scroll";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import useEmblaCarousel from "embla-carousel-react";
import { Successstoriesprops } from "@/app/types/successtrories.type";

export default function TestimonialSlider({clientreviews}:{clientreviews:Successstoriesprops[]}) {
const [emblaRef] = useEmblaCarousel(
  {
    loop: true,
    align: "start",
  },
  [
    AutoScroll({
      speed: 2,
      playOnInit: true,
      stopOnInteraction: false,
    })
  ]
);
  return (
    <div >
      <div className="embla" ref={emblaRef}>
        <div className="flex py-2 px-1 gap-[20px] pl-[20px]">
          {clientreviews.map((story) => (
            <div key={story._id} className="embla__slide flex-none min-w-[288px] md:min-w-[302px] lg:min-w-[467px]">
              <TestimonialCard testimonialData={story} />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}




