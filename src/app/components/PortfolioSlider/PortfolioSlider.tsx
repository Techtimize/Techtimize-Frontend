'use client'
import PortfolioCard from '../PortfolioCard/PortfolioCard'
import useEmblaCarousel from 'embla-carousel-react';
import projectsProps from '@/app/types/project.type';
import AutoScroll from 'embla-carousel-auto-scroll';



export default function PortfolioSlider({projectData}:{projectData:projectsProps[]}){
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
        <div className="flex py-2 px-1">
          {projectData?.map((slide) => (
            <div key={slide._id} className="embla__slide flex-none flex-grow-0 flex-shrink-0 w-auto mx-4">
              <PortfolioCard cardData={slide} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

