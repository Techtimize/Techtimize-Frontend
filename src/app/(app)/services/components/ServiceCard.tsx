import Button from "@/app/components/Button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  styling?: string;
  link?: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <div className="border rounded-[10px] w-full p-[20px] h-full flex flex-col items-start ">
      <div className="flex flex-col flex-1 items-center">
        <Image
          src={image}
          alt={"service"}
          width={57}
          height={57}
          className="mb-[10px] xl:w-[57px] xl:h-[57px] w-[44px] h-[44px]"
        />
        <p className="xl:text-[20px] lg:text-[18px] sm:text-[15px] mb-[10px] satoshi-variable-bold text-black">
          {title}
        </p>
        <p className="text mb-[20px] text-black">{description}</p>
      </div>

      <Link href="/hiring-staff/need-to-consult">
        <Button
          text="Hire Us"
          textClass="text"
          className="bg-primaryBlue border-[#0697D5] text-white p-[10px] rounded-[7px]"
        />
      </Link>
    </div>
  );
};

export default ServiceCard;
