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
  if (isActive) {
    return (
      <p>
        <span
          className={cn(
            "capitalize satoshi-medium text-[#069AD8] text-[16px] tracking-wider"
          )}
        >
          {children}
        </span>
      </p>
    );
  }

  return (
    <Link href={href}>
      <span
        className={cn(
          "capitalize satoshi-medium text-[#727272] text-[16px] tracking-wider"
        )}
      >
        {children}
      </span>
    </Link>
  );
};

export { BreadcrumbItem };