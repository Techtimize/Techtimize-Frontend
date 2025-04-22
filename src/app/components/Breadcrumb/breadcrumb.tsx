"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { BreadcrumbItem } from "./breadcrumb-item";

const Breadcrumb = () => {
  const pathname = usePathname();
  const [root, ...rest] = pathname.split("/");

  const formatDisplay = (label: string): string => label.split("-").join(" ");

  const constructHref = (path: string): string => {
    const precedingPart = rest.join("").split(path)[0];
    return `${precedingPart}/${path}`;
  };

  return (
    <div className="flex justify-center gap-x-1 mb-[5px] py-1">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      {rest.map((path, i) => (
        <Fragment key={path}>
          <span className="text-[16px] text-[#727272]">{">>"}</span>
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
