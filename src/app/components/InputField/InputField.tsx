import React, { FC } from "react";

interface InputFieldProps {
  labelText?: string;
  inputType: string;
  placeHolderText?: string;
  min?: number;
}

const InputField: FC<InputFieldProps> = ({
  labelText,
  inputType,
  placeHolderText,
  min,
}) => {
  return (
    <div className="flex flex-col w-full gap-[5px]">
      {labelText && (
        <label htmlFor="" className="md:text-[16px] text-[15px] text-black">
          {labelText}
        </label>
      )}
      <input
        min={min}
        type={inputType}
        className="border rounded-[7px] p-[10px] bg-white text-black md:text-[16px] text-[14px]"
        placeholder={placeHolderText}
      />
    </div>
  );
};

export default InputField;
