'use client'
import React, { useEffect, useRef } from 'react';
import PortfolioCard from '../PortfolioCard/PortfolioCard'
import { portfolioData } from '@/app/constants/portfolioData'
import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

const PortfolioSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 1, loop: false });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (emblaApi && containerRef.current) {
      emblaApi.on('init', () => {
        const slides = (emblaApi as EmblaCarouselType & { slides: HTMLElement[] }).slides;

        const getScrollSnapList = (): number[] =>
          slides.map(() => {
            const containerWidth = containerRef.current?.getBoundingClientRect().width || 0;
            return containerWidth / 3;
          });

        emblaApi.scrollSnapList = getScrollSnapList;
      });
    }
  }, [emblaApi]);

  return (
    <div className="overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="flex py-2 px-1 gap-[20px]" ref={containerRef}>
          {portfolioData?.map((slide) => (
            <div key={slide?.id} className="embla__slide flex-none flex-grow-0 flex-shrink-0 w-auto">
              <PortfolioCard cardData={slide} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioSlider
