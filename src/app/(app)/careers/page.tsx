import PageHeader from "@/app/components/PageHeader/PageHeader";
import { departments } from "@/app/constants/departments";
import React from "react";
import { Button } from "@/components/ui/button";
import type { Metadata } from 'next';
import { generateMetadataFromBE } from "@/app/lib/utils";
import { Card, CardTitle } from "@/components/ui/card";
import GetJobsList from "@/app/(app)/careers/http/getjobs";
import data from "./data/static";

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
          <Card className="flex flex-col p-6 lg:w-80 w-full h-auto">
            <CardTitle className="space-y-5 font-semibold">
              {departments?.map((department) => (
                <div key={department?.id}>
                  <p className="cursor-pointer">{department?.text}</p>
                </div>
              ))}
            </CardTitle>
          </Card>

          <Card className="flex flex-col w-full h-auto p-4 lg:col-span-2">
            <GetJobsList />
          </Card>
        </div>
      </div>

  
      <div className="flex justify-center mt-10 px-4">
        <Card className="h-auto w-full max-w-5xl flex flex-col lg:flex-row items-center lg:items-start justify-between bg-[#0B4D8E] p-6 text-center lg:text-left">
          <div className="flex flex-col mb-4 lg:mb-0">
            <h4 className="lg:text-[31px] md:text-[22px] text-[20px] font-semibold text-white">
              Be a Part of our Dynamic Team!
            </h4>
            <p className="xl:max-w-[800px] lg:max-w-[700px] md:max-w-[500px] max-w-[400px] text-white mt-4">
              Be a part of a thriving community. Explore new career opportunities options with us.
            </p>
          </div>
          <Button className="bg-white hover:bg-white hover:text-blue-1 text-black w-full lg:w-auto">
            Join Us Now
          </Button>
        </Card>
      </div>

      {/* Our Perks Section */}
      <div className="items-center text-center mt-10">
        <p className="text-blue-1">Our Perks</p>
        <h1 className="text-2xl font-thin mb-10">Benefits in Working with Us</h1>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full text-center mt-10 px-4">
        {data.map((item) => (
          <div key={item.heading} className="flex flex-col items-center p-4">
            <h3 className="font-thin">{item.heading}</h3>
            <p className="mt-2 text-justify">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;

