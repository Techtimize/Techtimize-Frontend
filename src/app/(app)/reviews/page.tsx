import { getReviews, getLatestReview } from "@/app/api/reviews/getreviews";
import PageHeader from "@/app/components/PageHeader/PageHeader";
import StarsReview from "@/app/components/home/StarsReview";
import Image from "next/image";
import CountryFlag from "@/app/components/reviews/flags";
import Reviews_Section from "@/app/components/reviews/Reviews-section";
import { getCanonicalUrl } from "@/app/lib/getCanonial";
import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const canonical = await getCanonicalUrl("/reviews");

  return {
    title: "Reviews | Techtimize",
    alternates: {
      canonical,
    },
  };
}

export default async function Reviews() {
    const fetchreviews = await getReviews();
    const onereview = await getLatestReview();
    // console.log("one review:", onereview);
    return (
        <div>
            <PageHeader subHeading="" heading="Testimonials " />
            <div className="sm:flex justify-between mb-[60px] sm:mb-[80px] max-w-[90%] sm:max-w-[80%] mx-[auto] mt-[50px]">
                <div className="relative rounded-[12px] sm:w-[48%] bg-[#FEFEFE] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] pt-[60px] sm:pt-[100px] pb-[40px] sm:pb-[60px] px-[20px] sm:px-[50px]">
                    <Image className="absolute left-0 top-0 !w-[50px] sm:!w-[auto]" src={"/assets/images/Double-quote.svg"} alt={"quote"} width={80} height={80} />
                    <h2 className="mb-[20px] sm:mb-[70px] font-[400] text-[#727272] leading-[1.8]">{onereview.content}</h2>
                    <div className="flex">
                        <div className="pt-[4px]">
                        <CountryFlag countryName={onereview.clientCountry} /></div>
                        <div className="ml-[15px]">
                            <h2 className="text-[#727272]">{onereview.name}</h2>
                            <p className="text-[#727272] my-[8px]">{onereview.clientCountry}</p>
                            <StarsReview stars={onereview.rating} />
                        </div>
                    </div>
                </div>
                <div className="sm:w-[48%] text-center flex flex-col items-center justify-around pt-[50px] sm:pt-[0]">
                    <Image src={"/assets/images/google-reviews-page.svg"} alt={"reviews"} width={400} height={100} />
                    <Image src={"/assets/images/trustpilot-reviews-page.svg"} alt={"reviews"} width={400} height={100} />
                    <Image src={"/assets/images/clutch-reviews-page.svg"} alt={"reviews"} width={400} height={100} />
                </div>
            </div>  

        <Reviews_Section reviews = {fetchreviews} />
            
        </div>
    )
}