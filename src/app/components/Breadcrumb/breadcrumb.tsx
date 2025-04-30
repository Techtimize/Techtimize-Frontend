"use client";

import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { BreadcrumbItem } from "./breadcrumb-item";
import { ChevronsRight } from "lucide-react";

const Breadcrumb = () => {
  const pathname = usePathname();
  const [root, ...rest] = pathname.split("/");

  const formatDisplay = (label: string): string =>
    label
      .split("-")
      .map((s) => s.replace(/^(?=.*[A-Za-z])(?=.*\d).+$/, ""))
      .join(" ");

  const constructHref = (path: string): string => {
    const precedingPart = rest.join("").split(path)[0];
    return `${precedingPart}/${path}`;
  };

  return (
    <div className="flex justify-center items-center gap-x-1 mb-[5px] py-1">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      {rest.map((path, i) => (
        <Fragment key={path}>
          <ChevronsRight className="text-[#727272]" height={20} width={20} />
          <BreadcrumbItem
            href={constructHref(path)}
            isActive={i === rest.length - 1}
          >
            {formatDisplay(path)}
          </BreadcrumbItem>
        </Fragment>
      ))}
    </div>
  );
};

export { Breadcrumb };
