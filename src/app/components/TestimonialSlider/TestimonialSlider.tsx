'use client'
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { testimonials } from '@/app/constants/testimonialData';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import AutoScroll from "embla-carousel-auto-scroll";

const TestimonialSlider = () => {
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
    <div className="overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="flex py-2 px-1 gap-[20px]">
          {testimonials?.map((slide) => (
            <div key={slide?.id} className="embla__slide flex-none w-auto">
              <TestimonialCard testimonialData={slide} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
