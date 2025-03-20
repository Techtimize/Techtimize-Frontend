import PageHeader from "@/app/components/PageHeader/PageHeader";
import { departments } from "@/app/constants/departments";
import React from "react";
import JobOpeningCard from "./components/JobOpeningCard";
import getJobs from "@/app/(app)/careers/http/getjobs";
import { Button } from "@/components/ui/button";
import type { Metadata } from 'next';
import { generateMetadataFromBE } from "@/app/lib/utils";
import { Card, CardTitle } from "@/components/ui/card";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "lucide-react";
import GetJobsList from "@/app/(app)/careers/http/getjobs";


export async function generateMetadata(): Promise<Metadata> {
  return await generateMetadataFromBE("careers");
}

const Careers = async () => {
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
        <div className="flex flex-row gap-x-9">
          {/* Department Card */}
          <Card className="flex flex-col pl-10 py-10 w-80 h-auto">
            <CardTitle className="space-y-10 font-semibold">
              {departments?.map((department) => (
                <div key={department?.id}>
                  <p className="cursor-pointer">{department?.text}</p>
                </div>
              ))}
            </CardTitle>
          </Card>

          {/* Job Openings Card */}
          <Card className="flex flex-col w-full h-auto pl-4 pr-4 pt-4 pb-4">
            <GetJobsList />
          </Card>
        </div>


      </div>
      
    </div>
  );
};

export default Careers;
