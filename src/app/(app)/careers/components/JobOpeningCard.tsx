import React from "react";
import Tag from "@/app/components/Tag/Tag";
import { BsClock } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import Link from "next/link";
import Image from "next/image";
import { jobProps } from "@/app/types/job.type";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export default function JobOpeningCard({ jobs }: { jobs: jobProps[] }) {
  return (
    <>
      <ScrollArea className="max-h-[500px] w-full overflow-y-auto space-y-2">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job._id} className="border bg-[#069AD8] rounded-[10px] relative flex flex-col justify-end w-full">
              <div className="flex flex-col md:flex-row bg-white rounded-[10px] w-full p-4 md:p-6 gap-4">
                <div className="flex-shrink-0">
                  <Image src="/assets/svgs/suitcaseIcon.svg" alt="suitcase" width={40} height={40} />
                </div>
                <div className="flex flex-col w-full">
                  {/* Job Title */}
                  <div className="flex justify-between w-full">
                    <Tag text={job.jobTitle} textClass="font-semibold text-[12px]" className="bg-[#F7F7F7]" />
                  </div>

                  {/* Description */}
                  <p className="text-sm mt-2 text-wrap">{job.description}</p>

                  {/* Job Details (Wrapped for Mobile) */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between w-full mt-3">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3">
                      <Button className="bg-white text-[#069AD8] hover:bg-transparent border flex items-center gap-2 px-3 py-1">
                        <BsClock size="16px" color="#069AD8" />
                        <span className="text-[12px]">{job.jobType}</span>
                      </Button>
                      <Button className="bg-[#F2F6FF] hover:bg-transparent text-[#069AD8] text-[12px] px-3 py-1">
                        {job.workMode}
                      </Button>
                      <Button className="bg-[#F2F6FF] hover:bg-transparent text-[#069AD8] text-[12px] flex items-center gap-2 px-3 py-1">
                        <ImLocation size="16px" color="#069AD8" />
                        {job.location}
                      </Button>
                    </div>

                    <Link href={`/careers/${job._id}`} className="mt-3 md:mt-0">
                      <Button className="bg-[#069AD8] border-[#0697D5] hover:bg-[#0697D5] text-white p-[7px] rounded-[7px]">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
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
