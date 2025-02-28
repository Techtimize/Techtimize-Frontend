"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

interface GoBackButtonProps {
  state?: boolean;
  onClick?: () => void;
  className?: string;
}

const GoBackButton: React.FC<GoBackButtonProps> = ({ state, onClick, className }) => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <IoChevronBackCircleOutline
      color="#909090"
      size={40}
      className={twMerge("cursor-pointer", className)}
      onClick={state ? onClick : handleClick}
    />
  );
};

export default GoBackButton;
