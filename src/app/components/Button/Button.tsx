import React, { ButtonHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const buttonVariants = cva("rounded-[10px]", {
  variants: {
    variant: {
      default: "bg-primary border border-primary text-white",
      outlined:
        "border border-secondary text-secondary bg-white hover:bg-primary hover:text-white hover:border-primary",
      disabled:
        "bg-inActive border border-primary text-white cursor-not-allowed",
    },
    size: {
      default: "p-[12px] flex items-center justify-center gap-[10px]",
      sm: "py-[6px] px-[25px] flex items-center justify-center gap-[10px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text?: string;
  textClass?: string;
  className?: string;
  icon?: any;
  onClick?: any;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  icon,
  onClick,
  textClass,
  variant,
  size,
}) => {
  return (
    <button
      className={`${cn(buttonVariants({ variant, size, className }))}`}
      onClick={onClick}
    >
      <p className={`${textClass} satoshi-medium`}>{text}</p>
      {icon && <div>{icon}</div>}
    </button>
  );
};

export default Button;
