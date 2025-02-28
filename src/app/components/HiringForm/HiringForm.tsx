"use client";
import React, { FC, useState } from "react";
import InputField from "../InputField/InputField";
import SelectInput from "../SelectInput/SelectInput";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import { budget, expertiseRequirements } from "@/app/constants/select-options";

interface HiringFormProps {
  isBudget?: boolean;
  buttonText?: string;
}

const HiringForm: FC<HiringFormProps> = ({ isBudget, buttonText }) => {
  const [selectedBudget, setSelectedBudget] = useState<string>("");

  const handleBudgetChange = (e: any) => {
    const value = e.target.value;
    setSelectedBudget(value);
  };

  return (
    <div className="w-full">
      <div className="sm:w-[50%] flex flex-col gap-[20px] mb-[20px]">
        <InputField inputType={"text"} labelText="Full Name*" />
        <InputField inputType={"number"} labelText="Phone Number*" min={0} />
        <InputField inputType={"email"} labelText="Email*" />
        <SelectInput
          labelText={"Select Expertise Requirement*"}
          options={expertiseRequirements}
        />
        {isBudget && (
          <>
            <SelectInput
              labelText={"Budget*"}
              options={budget}
              onChange={handleBudgetChange}
            />
            {selectedBudget === "Other" && (
              <InputField
                inputType={"text"}
                labelText="Others* (Please define your budget)"
              />
            )}
          </>
        )}
      </div>
      <TextArea
        labelText="Please share details of your project so our team can get an idea of it*"
        placeHolderText="Hi...."
      />
      <Button
        text={buttonText}
        textClass="text"
        className="text-white bg-primaryBlue p-[10px] rounded-[7px] mt-[30px]"
      />
    </div>
  );
};

export default HiringForm;
