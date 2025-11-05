import PageHeader from "@/app/components/PageHeader/PageHeader";
import React from "react";
import ModelSlider from "./components/ModelSlider";
import ExpertiseCard from "./components/ExpertiseCard";
import { expertiseData } from "@/app/constants/expertise-data";

import type { Metadata } from 'next';
import { generateMetadataFromBE } from "@/app/lib/utils";
import { getCanonicalUrl } from "@/app/lib/getCanonial";

export async function generateMetadata(): Promise<Metadata> {
  const canonical = await getCanonicalUrl("/hiring-staff");

  const baseMetadata = await generateMetadataFromBE("hiringStaff");

  return {
    ...baseMetadata, 
    alternates: {
      canonical,
    },
  };
}

const HiringStaff = () => {
  return (
    <div>
      <PageHeader subHeading="Hiring Staff" heading="Hire Our Top Talent" />
      <div className="page-px pt-[30px] pb-[50px] bg-white">
        <p className="page-blue-heading xl:mb-[11px] mb-[5px] !text-primary-highlight">
          Our Hiring Models
        </p>
        <h4 className="page-sub-heading font-semibold xl:mb-[27px] mb-[19px]">
          What we Offer
        </h4>
        <ModelSlider />
      </div>
      <div className="bg-[#FBFCFF] page-px py-[40px]">
        <p className="page-blue-heading xl:mb-[11px] mb-[5px] !text-primary-highlight">
          Our Top Talent
        </p>
        <h4 className="page-sub-heading font-semibold xl:mb-[27px] mb-[19px]">
          Select Expertise
        </h4>
        <div className="py-[20px] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[60px] sm:gap-[30px] gap-[60px]">
          {expertiseData.map((item) => {
            return <ExpertiseCard key={item.id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HiringStaff;
