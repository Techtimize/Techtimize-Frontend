import Tag from "@/app/components/Tag/Tag";
import { jobProps } from "@/app/types/job.type";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { BsClock } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import slug from "slug";

const OpeningCardTag = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <span
      className={cn(
        "bg-white rounded-[7px] text-[#4F4F4F] h-[42px] hover:bg-transparent border flex items-center gap-2 px-[10px] justify-center min-w-[103px]",
        className
      )}
    >
      {children}
    </span>
  );
};

const JobOpeningCard = ({
  jobOpening: { jobTitle, jobType, _id, workMode, location },
}: {
  jobOpening: jobProps;
}) => {
  return (
    <div className="border rounded-[10px] bg-white relative flex justify-end w-full z-20 [box-shadow:0px_8px_24px_0px_#959DA533]">
      <div className="flex flex rounded-[10px] bg-white w-full p-4 md:p-6 sm:gap-4 z-20">
        <div className="h-11 flex items-center">
          <img
            src="/assets/svgs/suitcaseIcon.svg"
            alt="suitcase"
            className="hidden sm:inline"
            width={33}
            height={33}
          />
        </div>
        <div className="flex flex-col flex-1 sm:gap-y-8">
          <div className="flex flex-shrink-0 justify-between flex-col sm:flex-row gap-y-2 sm:gap-y-0">
            <div className="flex gap-x-8 items-center">
              <div className="font-[700] text-[13px] sm:text-[20px] satoshi-variable">
                {jobTitle}
              </div>
            </div>
            <Tag
              text={jobTitle}
              textClass="font-semibold sm:text-[12px]"
              className="bg-[#F7F7F7] w-fit"
            />
          </div>

          <div className="flex flex-col w-full">
            <div className="flex flex-row md:items-center justify-end sm:justify-between w-full mt-3">
              <div className="flex-wrap items-center gap-2 md:gap-3 hidden sm:flex">
                <OpeningCardTag className="bg-white rounded-[7px] text-[#4F4F4F] h-[42px] hover:bg-transparent border flex items-center gap-2 px-[10px]">
                  <BsClock size="16px" color="#069AD8" />
                  <span className="text-[14px]">{jobType}</span>
                </OpeningCardTag>
                <OpeningCardTag className="bg-[#F7F7F7] text-[14px]">
                  {workMode}
                </OpeningCardTag>
                <OpeningCardTag className="bg-[#F2F6FF] text-[14px]">
                  <ImLocation size="16px" color="#069AD8" />
                  {location}
                </OpeningCardTag>
              </div>
              <Link
                href={`/careers/${slug(jobTitle)}-${_id}`}
                className="mt-0 w-fit sm:w-auto"
              >
                <Button className="bg-[#069AD8] border-[#0697D5] hover:bg-[#0697D5] text-white p-[7px] rounded-[7px] text-[12px] sm:text-[14px]">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[90%%] bg-[#069AD8] absolute top-[3px] rounded-[10px] bottom-0 left-[-9px] z-10"></div>
    </div>
  );
};

export { JobOpeningCard };
