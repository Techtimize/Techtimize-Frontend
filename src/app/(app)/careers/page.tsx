import PageHeader from "@/app/components/PageHeader/PageHeader";
import React from "react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { generateMetadataFromBE } from "@/app/lib/utils";
import { Card } from "@/components/ui/card";
import data from "./data/static";
import Link from "next/link";
import { ApiEndpoint } from "@/app/api";
import { Department } from "@/app/types/departments";
import { Departments } from "./components";

export async function generateMetadata(): Promise<Metadata> {
  return await generateMetadataFromBE("careers");
}

const Careers = async () => {
  const departmentsResponse = await fetch(ApiEndpoint.DEPARTMENTS);
  const response = await departmentsResponse.json();
  const departmentsList = response.data as Department[];
  return (
    <div className="px-4 md:px-6 lg:px-8">
      <PageHeader subHeading="Career" heading="Opportunity Corner" />

      <div className="bg-white p-6 md:p-8 lg:p-12">
        <p className="page-blue-heading mb-2 md:mb-4 !text-primary-highlight">
          Career Opportunity
        </p>
        <h4 className="page-sub-heading font-semibold mb-4 md:mb-6">
          Explore New Openings
        </h4>
      </div>
      <Departments departments={departmentsList} />
      <div className="flex justify-center mt-10 px-4">
        <Card className="h-auto w-full max-w-5xl flex flex-col lg:flex-row items-center lg:items-start justify-between bg-[#0B4D8E] p-6 text-center lg:text-left">
          <div className="flex flex-col mb-4 lg:mb-0">
            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
              Be a Part of our Dynamic Team!
            </h4>
            <p className="max-w-md md:max-w-lg lg:max-w-xl text-white mt-4">
              Be a part of a thriving community. Explore new career
              opportunities with us.
            </p>
          </div>
          <Link href={"/application"}>
            <Button className="bg-white hover:bg-gray-200 text-black w-full lg:w-auto">
              Join Us Now
            </Button>
          </Link>
        </Card>
      </div>

      <div className="text-center mt-10">
        <p className="text-blue-1">Our Perks</p>
        <h1 className="text-xl md:text-2xl font-thin mb-6">
          Benefits in Working with Us
        </h1>
      </div>

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
