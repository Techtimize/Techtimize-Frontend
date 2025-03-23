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
    <div className="px-4 md:px-6 lg:px-8">
      <PageHeader subHeading="Career" heading="Opportunity Corner" />

      <div className="border bg-white p-6 md:p-8 lg:p-12">
        <p className="page-blue-heading mb-2 md:mb-4">Career Opportunity</p>
        <h4 className="page-sub-heading font-semibold mb-4 md:mb-6">
          Explore New Openings
        </h4>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="flex flex-col p-6 w-full h-auto">
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
            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
              Be a Part of our Dynamic Team!
            </h4>
            <p className="max-w-md md:max-w-lg lg:max-w-xl text-white mt-4">
              Be a part of a thriving community. Explore new career opportunities with us.
            </p>
          </div>
          <Button className="bg-white hover:bg-gray-200 text-black w-full lg:w-auto">
            Join Us Now
          </Button>
        </Card>
      </div>

      {/*  Perks Section */}
      <div className="text-center mt-10">
        <p className="text-blue-1">Our Perks</p>
        <h1 className="text-xl md:text-2xl font-thin mb-6">Benefits in Working with Us</h1>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center mt-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full text-center mt-10 px-4">

        {data.map((item) => (
          <div key={item.heading} className="flex flex-col items-center p-4">
            <h3 className="font-thin text-lg">{item.heading}</h3>
            <p className="mt-2 text-sm text-justify">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
