import PortfolioCard from '../PortfolioCard/PortfolioCard'
import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
// import projectsProps from '@/app/types/project.type';
import { getProjects } from '@/app/lib/get_project';


export default async function PortfolioSlider(){
  const portfolioData=await getProjects();
  // const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 1, loop: false });
  // const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (emblaApi && containerRef.current) {
  //     emblaApi.on('init', () => {
  //       const slides = (emblaApi as EmblaCarouselType & { slides: HTMLElement[] }).slides;

  //       const getScrollSnapList = (): number[] =>
  //         slides.map(() => {
  //           const containerWidth = containerRef.current?.getBoundingClientRect().width || 0;
  //           return containerWidth / 3;
  //         });

  //       emblaApi.scrollSnapList = getScrollSnapList;
  //     });
  //   }
  // }, [emblaApi]);
  

  return (
    <div className="overflow-hidden">
      <div className="embla">
        <div className="flex py-2 px-1 gap-[20px]">
          {portfolioData?.map((slide) => (
            <div key={slide._id} className="embla__slide flex-none flex-grow-0 flex-shrink-0 w-auto">
              <PortfolioCard cardData={slide} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

