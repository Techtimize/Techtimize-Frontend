import { getStories } from "@/app/api/stories/get_Stories";
import TestimonialSlider from "@/app/components/TestimonialSlider/TestimonialSlider";

export default async function CommentSlider(){
    const clientreviews = await getStories();
    return <TestimonialSlider clientreviews={clientreviews}/>
}