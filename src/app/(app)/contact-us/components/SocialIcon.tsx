import React, { ReactNode } from "react";

interface SocialIconProps {
  icon: ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => {
  return (
    <div className="bg-white drop-shadow-lg rounded-full w-[50px] h-[50px] flex items-center justify-center">
      {icon}
    </div>
  );
};

export default SocialIcon;
