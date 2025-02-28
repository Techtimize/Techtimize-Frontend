import Button from "@/app/components/Button/Button";
import InputField from "@/app/components/InputField/InputField";
import React from "react";

const ApplicationForm = () => {
  return (
    <div className="sm:w-[70%] flex flex-col gap-[25px]">
      <InputField labelText="First Name*" inputType="text" />
      <InputField labelText="Last Name*" inputType="text" />
      <InputField labelText="Phone Number*" inputType="number" min={0} />
      <InputField labelText="City*" inputType="text" />
      <InputField labelText="Email*" inputType="email" />
      <InputField
        labelText="How many years of experience do you have with software development?*"
        inputType="text"
      />
      <InputField labelText="Your Portfolio URL" inputType="text" />
      <Button
        text="Submit Application"
        textClass="text"
        className="bg-[#0697D5] text-white p-[11px] rounded-[7px]"
      />
    </div>
  );
};

export default ApplicationForm;
