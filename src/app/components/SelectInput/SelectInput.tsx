import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface Option {
  id: number;
  value: string;
}

interface SelectInputProps {
  labelText: string;
  options: Option[];
  onChange?: any;
  className?: string;
}

const SelectInput: FC<SelectInputProps> = ({
  labelText,
  options,
  onChange,
  className,
}) => {
  return (
    <div className={twMerge("flex flex-col w-full gap-[5px]", className)}>
      {labelText && (
        <label htmlFor="" className="md:text-[16px] text-[15px] text-black">
          {labelText}
        </label>
      )}
      <select
        name=""
        id=""
        className="p-[10px] rounded-[7px] border bg-white text-black md:text-[16px] text-[14px]"
        onChange={onChange}
      >
        <option value="">Select an Option</option>
        {options?.map((item) => {
          return (
            <option key={item.id} value={item.value}>
              {item.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
