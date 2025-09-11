import Image from "next/image";
import React, { ReactNode } from "react";
import { Breadcrumb } from "../Breadcrumb";

interface PageHeaderProps {
  heading: string;
  subHeading: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ heading, subHeading }) => {
  return (
    <div className="h-[292px] bg-[#FBFCFF] flex items-center justify-center relative">
      <div className="flex justify-end w-full h-full">
        <Image
          src={"/assets/svgs/waves.svg"}
          alt={"waves"}
          width={1080}
          height={100}
          className="object-cover"
        />
      </div>
      <div className="absolute">
        <Breadcrumb />
        <h1 className="page-heading">{heading}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
