import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

const DepartmentFilter = ({
  onClick,
  isActive,
  children,
}: PropsWithChildren<{
  onClick: () => void;
  isActive: boolean;
}>) => {
  return (
    <span
      className={cn(
        "text-[15px] mb-5 lg:mb-0 lg:text-[20px] satoshi-variable w-max cursor-pointer p-1",
        {
          "text-primary-highlight": isActive,
        }
      )}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export { DepartmentFilter };
