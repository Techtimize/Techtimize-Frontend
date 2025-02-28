import React, { ReactElement } from "react";

interface TagProps {
  icon?: ReactElement;
  text: string;
  className?: string;
  textClass?: string;
}

const Tag: React.FC<TagProps> = ({ icon, text, className, textClass }) => {
  return (
    <div className={`flex rounded-[7px] xl:p-[10px] p-[5px] items-center gap-[10px] ${className}`}>
      {icon && icon}
      <p className={`text ${textClass}`}>{text}</p>
    </div>
  );
};

export default Tag;
