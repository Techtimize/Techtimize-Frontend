import React, { ReactNode } from "react";

interface CompanyInfoCardProps {
  icon: ReactNode;
  heading: string;
  text: string;
  className?: string;
}

const CompanyInfoCard: React.FC<CompanyInfoCardProps> = ({ icon, heading, text, className }) => {
  return (
    <div className={`xl:w-[393px] lg:w-[350px] md:w-[250px] w-full lg:h-[121px] h-[110px] flex items-center lg:gap-[25px] gap-[10px] px-[10px] xl:px-[25px] rounded-[7px] justify-start ${className}`}>
      <div className="bg-[#0697D5] lg:w-[50px] lg:h-[50px] w-[45px] h-[45px] rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="font-bold lg:text-[16px] text-[15px] satoshi-bold text-black">{heading}</p>
        <p className="lg:w-[250px] lg:text-[15px] text-[14px] text-wrap text-black">{text}</p>
      </div>
    </div>
  );
};

export default CompanyInfoCard;