import PageHeader from "@/app/components/PageHeader/PageHeader";
import { departments } from "@/app/constants/departments";
import React from "react";
import JobOpeningCard from "./components/JobOpeningCard";

import type { Metadata } from 'next';
import { generateMetadataFromBE } from "@/app/lib/utils";
 

export async function generateMetadata(): Promise<Metadata> {
  return await generateMetadataFromBE("careers");
}

const Careers = () => {
  return (
    <div>
      <PageHeader subHeading="Career" heading="Opportunity Corner" />
      <div className="border bg-white xl:px-[50px] pt-[30px] pb-[30px]">
        <p className="page-blue-heading xl:mb-[11px] mb-[5px]">
          Career Opportunity
        </p>
        <h4 className="page-sub-heading font-semibold xl:mb-[27px] mb-[19px]">
          Explore New Openings
        </h4>
        <div className="flex flex-col gap-[10px] xl:flex-row">
          <div className="border xl:basis-[30%] flex xl:flex-col flex-wrap items-start gap-[50px]">
            {departments?.map((department) => {
              return (
                <div
                  key={department?.id}
                  className="flex flex-col items-center gap-[8px]"
                >
                  <p className="cursor-pointer text">{department?.text}</p>
                  <div className="h-[3px] w-[25px] bg-[#069AD8] rounded-full" />
                </div>
              );
            })}
          </div>
          <div className="border xl:basis-[2%] flex justify-center">
            <div className="drop-shadow-lg xl:block hidden w-[3px] h-[616px] bg-white rounded-full" />
            <div className="drop-shadow-lg xl:hidden block h-[3px] w-full bg-white rounded-full" />
          </div>
          <div className="border xl:basis-[68%] pt-[10px]">
            <JobOpeningCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
