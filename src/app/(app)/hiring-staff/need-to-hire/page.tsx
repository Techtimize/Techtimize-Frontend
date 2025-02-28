"use client";
import Button from "@/app/components/Button/Button";
import InputField from "@/app/components/InputField/InputField";
import SelectInput from "@/app/components/SelectInput/SelectInput";
import TextArea from "@/app/components/TextArea/TextArea";
import { budget, timeOptions } from "@/app/constants/select-options";
import React, { useState } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { expertiseRequirements } from "@/app/constants/select-options";
import HiringForm from "@/app/components/HiringForm/HiringForm";
import GoBackButton from "@/app/components/GoBackButton/GoBackButton";
import { Contract, VideoCallIcon } from "../../../../../public/assets";
import Image from "next/image";

const NeedToHire = () => {
  const [goBack, setGoBack] = useState(false);

  const handleGoBack = () => {
    setGoBack(false);
  };

  const handleNext = () => {
    setGoBack(true);
  };
  return (
    <div className="xl:h-full xl:py-[6%] flex items-center justify-center md:py-[10%] py-[15%] px-[5%] bg-white">
      <div className="rounded-[10px] shadow-xl sm:p-[20px] p-[10px] w-full">
        <GoBackButton state={goBack} onClick={handleGoBack} />
        <div className="flex flex-col xl:flex-row w-full">
          <div className="xl:basis-[30%] flex gap-[10px] items-baseline sm:px-[3%] sm:pt-[1.5%] pt-[3%] sm:pb-[2%] pb-[4%]">
            <div
              className={`flex-shrink-0 rounded-full lg:w-[23px] lg:h-[23px] w-[14px] h-[14px]
                bg-green`}
            />
            <div className="">
              <p className="lg:text-[26px] satoshi-medium mb-[10px] text-black">
                Project Ongoing, need to Hire
              </p>
              <p className="text mb-[30px] text-tertiary">
                Select the time frame according to your project
              </p>
              <div className="flex flex-col gap-[15px]">
                <div className="flex items-center gap-[5px]">
                  <Image src={"/assets/svgs/video-call.svg"} alt={"videocall"} width={25} height={25} className="basis-[21%] sm:basis-[6%] xl:basis-[21%]" />
                  <p className="text satoshi-medium text-tertiary">
                    Web Conference Detail will be provided after acceptance of
                    Hiring Request
                  </p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <Image src={"/assets/svgs/contract.svg"} alt={"contract"} width={25} height={25} className="basis-[21%] sm:basis-[6%] xl:basis-[21%]"/>
                  <p className="text satoshi-medium text-tertiary">
                    A Contract will be signed at start of project to ensure
                    transparency
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:basis-[4%] xl:p-[2%] py-[5%]">
            <div className="border xl:w-[1px] w-full h-full" />
          </div>
          <div className="xl:basis-[66%] xl:w-[80%] sm:pt-[1.5%] pt-[3%] pb-[2%] sm:px-[4%]">
            {goBack ? (
              <HiringForm isBudget={true} buttonText="Hire Now" />
            ) : (
              <>
                <p className="text mb-[20px] text-black">
                  Which payment model would you prefer?
                </p>
                <div className="flex flex-col sm:flex-row sm:gap-[40px] gap-[20px] mb-[20px]">
                  <div className="border rounded-[7px] flex items-center justify-center gap-[10px] p-[20px]">
                    <input type="radio" id="hourly" name="paymentModel" />
                    <label htmlFor="hourly">
                      <p className="lg:text-[16px] text-[15px] text-black">
                        Hourly Rate Model
                      </p>
                      <p className="lg:text-[14px] text-[12px] text-modelText">
                        This charges clients per hour for service or work
                      </p>
                    </label>
                  </div>
                  <div className="border rounded-[7px] flex items-center justify-center gap-[10px] p-[20px]">
                    <input type="radio" id="fixed" name="paymentModel" />
                    <label htmlFor="fixed">
                      <p className="lg:text-[16px] text-[15px] text-black">
                        Fixed Cost Model
                      </p>
                      <p className="lg:text-[14px] text-[12px] text-modelText">
                        Constant expenses, regardless of production
                      </p>
                    </label>
                  </div>
                </div>

                <div className="sm:w-[50%] mb-[5%]">
                  <SelectInput
                    labelText={"Select Timeframe"}
                    options={timeOptions}
                  />
                </div>
                <Button
                  text="Continue"
                  textClass="text"
                  className="w-[40%] sm:w-[20%] md:w-auto"
                  onClick={handleNext}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedToHire;
