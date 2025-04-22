import Button from "@/app/components/Button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExpertiseCard = ({ data }: any) => {
  return (
    <div className="rounded-[10px] flex flex-col drop-shadow-lg bg-white">
      <div className="p-[20px] flex flex-col flex-1">
        <Image
          src={data?.image}
          alt={"image"}
          width={344}
          height={218}
          className="w-full"
        />
        <h5 className="xl:text-[25px] text-[20px] my-[15px] text-black">
          {data?.heading}
        </h5>
        <p className="text text-darkGrey line-clamp-4">{data?.text}</p>
      </div>
      <div className="bg-[#FAFAFA] flex p-[15px] xl:h-[133px] sm:h-[111px]">
        <div className="flex justify-end basis-[20%]">
          <p className="satoshi-bold text-darkGrey pt-1 text-[14px] xl:pt-2 xl:text-[16px]">Stacks:</p>
        </div>
        <div className="basis-[80%] flex gap-[15px] flex-wrap items-start px-[10px]">
          {data?.stack?.map((item: any) => {
            return (
              <Image
                key={item?.id}
                src={item?.image}
                alt={"stack image"}
                width={44}
                height={44}
                className="xl:w-[44px] xl:h-[44px] w-[33px] h-[33px]"
              />
            );
          })}
        </div>
      </div>
      <div className="p-[25px]">
        <Link href={"/hiring-staff/need-to-consult"}>
          <Button
            textClass="text"
            text="Schedule Interview"
            className="bg-[#0697D5] border-[#0697D5] rounded-[7px] text-white w-full p-[12px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default ExpertiseCard;
