"use client"

import { useState } from "react"
import { Reviewsprops } from "@/app/types/reviews"
import Image from "next/image"
import StarsReview from "../home/StarsReview"
import CountryFlag from "./flags"

type ReviewsSectionProps = {
  reviews: Reviewsprops[]
}

export default function Reviews_Section({ reviews }: ReviewsSectionProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const reviewsPerPage = 10

  const indexOfLast = currentPage * reviewsPerPage
  const indexOfFirst = indexOfLast - reviewsPerPage
  const currentReviews = reviews.slice(indexOfFirst, indexOfLast)

  const totalPages = Math.ceil(reviews.length / reviewsPerPage)

  return (
    <div>
      <div className="flex flex-wrap justify-between transition-all duration-300 ease-in-out max-w-[90%]  sm:max-w-[80%] mx-[auto]">
        {currentReviews.map((review) => (
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

      {/* Pagination Buttons */}
      <div className="flex justify-center gap-3 my-5">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === i + 1 ? "bg-[#0B4D8E] text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}
