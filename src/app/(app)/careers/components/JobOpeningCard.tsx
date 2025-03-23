import React from "react";
import Tag from "@/app/components/Tag/Tag";
import { BsClock } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import Button from "@/app/components/Button/Button";
import Link from "next/link";
import Image from "next/image";
import { jobProps } from "../../../types/job.type";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function JobOpeningCard({ jobs }: { jobs: jobProps[] }) {
  return (
    <>
      <ScrollArea className="max-h-[500px] w-full overflow-y-auto space-y-2">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job._id} className="border xl:h-[210px] md:h-[152px] h-[131px] bg-[#069AD8] rounded-[10px] relative flex items-end justify-end xl:w-full">
              <div className="flex xl:h-[215px] md:h-[157px] h-[136px] border absolute w-[98.5%] bg-white xl:gap-[20px] gap-[10px] rounded-[10px] lg:px-[30px] xl:py-[25px] md:py-[20px]">
                <div>
                  <Image src="/assets/svgs/suitcaseIcon.svg" alt="suitcase" width={40} height={40} />
                </div>
                <div className="w-full flex flex-col justify-between">
                  <div className="flex justify-between w-full">
                    <Tag text="Software Engineer" textClass="font-semibold text-[10px]" className="bg-[#F7F7F7]" />
                  </div>

                  <p className="text-sm">{job.description}</p>

                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center xl:gap-[20px] gap-[10px]">
                      <Tag text={job?.type || "Full Time"} textClass="text-[10px]" className="bg-white border" icon={<BsClock size="20px" color="#069AD8" />} />
                      <Tag text={job?.workMode || "On-Site"} textClass="text-[10px]" className="bg-[#F7F7F7]" />
                      <Tag text={job?.location || "Lahore"} textClass="text-[#069AD8] text-[10px]" className="bg-[#F2F6FF]" icon={<ImLocation size="20px" color="#069AD8" />} />
                    </div>
                    <Link href={`/job-description/${job._id}`}>
                      <Button text="View Details" textClass="text" className="bg-[#069AD8] border-[#0697D5] text-white xl:p-[10px] p-[5px] rounded-[7px]" />
                    </Link>
                  </div>
                </div>

                {/*<Link href={`/job-description/${job._id}`}>*/}
                <Link href={`/job-description`}>
                  <Button text="View Details" textClass="text" className="bg-[#069AD8] border-[#0697D5] text-white xl:p-[10px] p-[5px] rounded-[7px]" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-4">No job openings available</p>
        )}
      </ScrollArea>
    </>
  );
}
