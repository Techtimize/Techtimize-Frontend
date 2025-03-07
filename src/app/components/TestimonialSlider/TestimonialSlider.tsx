// import useEmblaCarousel from "embla-carousel-react";
// import AutoScroll from "embla-carousel-auto-scroll";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { getStories } from "@/app/lib/get_Stories";

export default async function TestimonialSlider() {
  const stories = await getStories();


  return (
    <div className="overflow-hidden">
      <div className="embla">
        <div className="flex py-2 px-1 gap-[20px]">
          {stories.map((story) => (
            <div key={story._id} className="embla__slide flex-none w-auto">
              <TestimonialCard testimonialData={story} />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}




// const [emblaRef] = useEmblaCarousel(
//   {
//     loop: true,
//     align: "start",
//   },
//   [
//     AutoScroll({
//       speed: 2,
//       playOnInit: true,
//       stopOnInteraction: false,
//     })
//   ]
// );