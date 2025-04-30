import Image from "next/image";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Successstoriesprops } from "@/app/types/successtrories.type";

const TestimonialCard = ({ testimonialData }: { testimonialData?: Successstoriesprops }) => {
  const isLoading = !testimonialData;

  return (
    <div className="w-[288px] md:w-[302px] lg:w-[467px] rounded-[15px] shadow-lg p-4 flex flex-col">
      {/* Quote Icon */}
      <div className="w-[64px] h-[64px] lg:w-[82px] lg:h-[82px] flex items-center justify-center bg-blue-1 rounded-br-[15px]">
        {isLoading ? (
          <Skeleton className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-full" />
        ) : (
          <Image src={"/assets/svgs/double-quotes.svg"} alt="quotes icon" width={80} height={80} />
        )}
      </div>

      {/* Review Text */}
      <p className="w-[240px] lg:w-[365px] ml-[24px] lg:ml-[71px] mt-[18px] lg:mt-[25px] text text-darkGrey h-[100px] text-ellipsis line-clamp-4">
        {isLoading ? <Skeleton className="h-5 w-full" /> : testimonialData.review}
      </p>

      {/* Client Info Section */}
      <div className="ml-[24px] lg:ml-[71px] mt-8 flex flex-col mb-2">
        <div className="flex items-center gap-2">
          {/* Country Flag */}
          {isLoading ? (
            <Skeleton className="w-[24px] h-[18px] rounded-md" />
          ) : (
            <Image
              src={testimonialData.countryIconUrl}
              alt="flag"
              width={24}
              height={18}
              className="object-cover rounded-sm"
            />
          )}

          {/* Client Name */}
          <p className="text-[16px] lg:text-[19px] font-semibold text-darkGrey">
            {isLoading ? <Skeleton className="h-5 w-[120px]" /> : testimonialData.clientName}
          </p>
        </div>

        <div className="flex flex-col mt-2">
          {/* Country Name */}
          <p className="text-[12px] lg:text-[16px] text-darkGrey">
            {isLoading ? <Skeleton className="h-4 w-[100px]" /> : testimonialData.countryName}
          </p>

          {/* Designation */}
          <p className="text-[12px] lg:text-[16px] text-darkGrey">
            {isLoading ? <Skeleton className="h-4 w-[150px]" /> : testimonialData.designation}
          </p>

          {/* Ratings */}
          <div className="mt-2">
            {isLoading ? (
              <Skeleton className="h-[20px] w-[100px]" />
            ) : (
              <Image
                src="/assets/svgs/ratings.svg"
                alt="Ratings"
                width={50}
                height={50}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
