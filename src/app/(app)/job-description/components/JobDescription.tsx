"use client";
import Tag from "@/app/components/Tag/Tag";
import Image from "next/image";
import React, { useState } from "react";
import { BsClock } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import Overview from "./Overview";
import ApplicationForm from "./ApplicationForm";

const JobDescription = () => {
  const [isActiveTab, setIsActiveTab] = useState("overview");

  const handleOverview = () => {
    setIsActiveTab("overview");
  };

  const handleApplicationForm = () => {
    setIsActiveTab("application");
  };

  return (
    <div>
      <div className="h-[292px] bg-[#FBFCFF] flex items-center justify-start relative">
        <div className="flex justify-end w-full h-full">
          <Image
            src={"/assets/svgs/waves.svg"}
            alt={"waves"}
            width={1080}
            height={100}
            className="object-cover"
          />
        </div>
        <div className="absolute flex flex-col xl:gap-[20px] gap-[10px] left-[4%]">
          <h1 className="page-sub-heading">Full Stack Developer</h1>
          <div className="flex items-center xl:gap-[20px] gap-[10px]">
            <Tag
              text="Full Time"
              textClass="text-[10px]"
              className="bg-white border"
              icon={<BsClock size="20px" color="#069AD8" />}
            />
            <Tag
              text="On-Site"
              textClass="text-[10px]"
              className="bg-[#F7F7F7]"
            />
            <Tag
              text="Lahore"
              textClass="text-[#069AD8] text-[10px]"
              className="bg-[#F2F6FF]"
              icon={<ImLocation size="20px" color="#069AD8" />}
            />
          </div>
        </div>
      </div>
      <div className="px-[4%] pt-[30px] pb-[50px]">
        <div className="flex items-center gap-[5%]">
          <p
            className={`xl:text-[20px] font-semibold cursor-pointer ${
              isActiveTab === "overview" ? "text-primary" : "text-tertiary"
            }`}
            onClick={handleOverview}
          >
            Overview
          </p>
          <p
            className={`xl:text-[20px] font-semibold cursor-pointer ${
              isActiveTab === "application" ? "text-primary" : "text-tertiary"
            }`}
            onClick={handleApplicationForm}
          >
            Application Form
          </p>
        </div>
        <hr className="xl:mt-[20px] mt-[20px] mb-[30px]" />
        {isActiveTab === "overview" ? <Overview /> : <ApplicationForm />}
      </div>
    </div>
  );
};

export default JobDescription;
