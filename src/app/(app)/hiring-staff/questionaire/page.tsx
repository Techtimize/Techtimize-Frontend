import React from "react";
import { questionaireData } from "@/app/constants/questionaire";
import Link from "next/link";
import Image from "next/image";
import GoBackButton from "@/app/components/GoBackButton/GoBackButton";

const Questionaire = () => {
  return (
    <div className="xl:pt-32 pt-[15%] md:pt-[20%] xl:px-20 px-[5%] xl:pb-20 pb-[20%] min-h-screen bg-white">
      <div className="rounded-[10px] shadow-xl relative xl:p-[20px] sm:px-[20px] sm:py-[25px] px-[10px] py-[25px] xl:mt-0 md:mt-[15%] sm:mt-[25%]">
        <GoBackButton className="absolute hidden sm:flex" />
        <div className="xl:mt-[20px] sm:mt-[8%] xl:px-16 xl:pb-[5%] xl:pt-[3%]">
          <div className="flex items-start gap-[15px] sm:px-4 xl:px-0">
            <Image
              src={"/assets/svgs/suitcase.svg"}
              alt={"suitcase"}
              width={24}
              height={24}
              className="w-[24px] h-[24px] sm:h-[34px] sm:w-[34px] xl:w-[44px] xl:h-[44px]"
            />
            <p className="xl:text-[20px] text-[16px] satoshi-medium mb-10 text-black">
              With our extensive network of skilled contractors, we are your
              strategic partner in achieving your objectives. Discover the power
              of augmenting your workforce with us.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 xl:gap-16 gap-5">
            {questionaireData?.map((item) => {
              return (
                <Link key={item?.id} href={item?.link}>
                  <div className="border border-[#B9BCC2] rounded-[10px] lg:p-10 p-[15px]">
                    <div className="flex items-start justify-between gap-[15px]">
                      <div
                        className={`flex-shrink-0 rounded-full lg:w-[23px] lg:h-[23px] w-[14px] h-[14px] ${
                          item?.red ? "bg-red" : "bg-green"
                        }`}
                      />
                      <div className="flex-grow mb-[15px]">
                        <p className="xl:text-[20px] text-[15px] satoshi-medium mb-[10px] text-black">
                          {item?.title}
                        </p>
                        <p className="text text-tertiary">
                          {item?.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex justify-end">
                  
                      <Image src={"/assets/svgs/longArrow.svg"} alt={"arrow"} width={25} height={25} />
                  
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionaire;
