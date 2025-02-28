import React from "react";
import Image from "next/image";

const ModelSlider = () => {
  return (
    <div className="flex flex-nowrap gap-[20px] overflow-x-auto sm:overflow-hidden scrollbar-hide max-w-full">
      <div className="border flex-none flex-shrink-0 w-full sm:w-[48.5%] rounded-[10px]">
        <div className="flex">
          <div className="md:basis-[60%] basis-[55%] flex items-center justify-center md:p-[20px] p-[10px]">
            <div>
              <h5 className="xl:text-[25px] lg:text-[22px] md:text-[18px] text-[16px] xl:mb-[15px] mb-[8px] text-black">
                Hourly Basis
              </h5>
              <p className="text text-tertiary">
                If you have a short-term project or require a specialized
                service, consider hiring our skilled developers on an hourly
                basis.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <Image
              src={"/assets/svgs/model1.svg"}
              alt={"image"}
              width={277}
              height={228}
              className="basis-[40%] hidden xl:flex pt-[10px]"
            />
            <Image
              src={"/assets/svgs/model3.svg"}
              alt={"image"}
              width={191}
              height={210}
              className="basis-[40%] xl:hidden flex rounded-e-[10px] pt-[10px]"
            />
          </div>
        </div>
      </div>
      <div className="border flex-none flex-shrink-0 w-full sm:w-[48.5%] rounded-[10px]">
        <div className="flex h-full">
          <div className="md:basis-[60%] basis-[55%] flex items-center justify-center md:p-[20px] p-[10px]">
            <div>
              <h5 className="xl:text-[25px] lg:text-[22px] md:text-[18px] text-[16px] xl:mb-[15px] mb-[8px] text-black">
                Monthly Basis
              </h5>
              <p className="text text-tertiary">
                For cost-effective, budget-friendly, time-efficient, and lasting
                partnerships, consider hiring developers monthly.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <Image
              src={"/assets/svgs/model2.svg"}
              alt={"image"}
              width={277}
              height={228}
              className="basis-[40%] hidden xl:flex pt-[10px]"
            />
            <Image
              src={"/assets/svgs/model4.svg"}
              alt={"image"}
              width={191}
              height={210}
              className="basis-[40%] xl:hidden flex rounded-e-[10px] pt-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelSlider;
