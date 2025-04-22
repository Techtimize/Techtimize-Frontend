import { cn } from "@/lib/utils";
import Link from "next/link";
import { PropsWithChildren } from "react";

const BreadcrumbItem = ({
  children,
  href,
  isActive,
}: PropsWithChildren<{
  href: string;
  isActive?: boolean;
}>) => {
  return (
    <Link href={href} className={cn(isActive && "pointer-events-none")}>
      <span
        className={cn(
          "capitalize satoshi-medium text-[#727272] text-[16px] tracking-wider",
          {
            "text-[#069AD8]": isActive,
          }
        )}
      >
        {children}
      </span>
    </Link>
  );
};

export { BreadcrumbItem };
