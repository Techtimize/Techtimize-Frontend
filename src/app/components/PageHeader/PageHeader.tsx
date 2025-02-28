import Image from "next/image";
import React, { ReactNode } from "react";

interface PageHeaderProps {
  heading: string;
  subHeading: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ heading, subHeading }) => {
  return (
    <div className="h-[292px] bg-[#FBFCFF] flex items-center justify-center relative">
      <div className="flex justify-end w-full h-full">
        <Image src={"/assets/svgs/waves.svg"} alt={"waves"} width={1080} height={100} className="object-cover" />
      </div>
      <div className="absolute">
        <p className="text-center text-[16px] text-[#727272] mb-[5px] satoshi-medium">
          Home {">"}
          {">"} <span className="text-[#069AD8]">{subHeading}</span>
        </p>
        <h1 className="page-heading">{heading}</h1>
      </div>
    </div>
  );
};

export default PageHeader;