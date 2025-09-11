"use client"

import { Reviewsprops } from "@/app/types/reviews"
import Image from "next/image"
import StarsReview from "../home/StarsReview"
import CountryFlag from "./flags"

type ReviewsSectionProps = {
  reviews: Reviewsprops[]
}

export default function Reviews_Section({ reviews }: ReviewsSectionProps) {
  return (
    <div>
      <div className="flex flex-wrap justify-between transition-all duration-300 ease-in-out max-w-[90%] sm:max-w-[80%] mx-[auto]">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="animate-fadeIn rounded-[10px] min-h-[300px] mb-[60px] relative w-[100%] sm:w-[48%] lg:w-[31%] bg-[#FEFEFE] shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] p-[60px] sm:pt-[100px] pb-[32px] sm:pb-[60px] px-[20px] sm:px-[50px]"
          >
            <Image
              src={"/assets/images/Double-quote.svg"}
              alt={"quote"}
              width={80}
              height={80}
              className="absolute left-0 top-0 !w-[50px] sm:!w-[auto]"
            />
            <h2 className="mb-[24px] font-[400] text-[#727272] leading-[1.8]">{review.content}</h2>
            <div className="flex">
              <div className="pt-[4px]">
                <CountryFlag countryName={review.clientCountry} />
              </div>
              <div className="ml-[15px]">
                <h2 className="text-[#727272]">{review.name}</h2>
                <p className="text-[#727272] my-[5px]">{review.clientCountry}</p>
                <StarsReview stars={review.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
