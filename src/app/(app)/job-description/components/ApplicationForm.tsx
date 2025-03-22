import Button from "@/app/components/Button/Button";
import InputField from "@/app/components/InputField/InputField";
import React from "react";

const ApplicationForm = () => {
  return (
    <div className="sm:w-[70%] flex flex-col gap-[25px]">
      <InputField labelText="First Name*" placeHolderText={"Jack"} inputType="text" />
      <InputField labelText="Last Name*" placeHolderText={"Jones"} inputType="text" />
      <InputField labelText="Phone Number*" placeHolderText={"+92 33586708 56"} inputType="number" min={0} />
      <InputField labelText="City*" placeHolderText={"Lahore"} inputType="text" />
      <InputField labelText="Email*" placeHolderText={"abc@gmsil.com"} inputType="email" />
      <InputField
        labelText="How many years of experience do you have with software development?*"
        inputType="text"
        placeHolderText={"3 years"}
      />
      <InputField labelText="Your Portfolio URL" placeHolderText={""} inputType="text" />
        <InputField labelText={"Attach Your CV Below"} inputType="file" placeHolderText={""}/>
      <Button
        text="Submit Application"
        textClass="text"
        className="bg-[#0697D5] text-white p-[11px] rounded-[7px]"
      />
    </div>
  );
};

export default ApplicationForm;
