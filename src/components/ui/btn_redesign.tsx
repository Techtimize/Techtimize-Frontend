import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

type BtnProps = {
  content: string;
  url: string;
  icon?: IconType;
  className?: string;
};

export default function Btn_redesign({ content, url, className, icon: Icon }: BtnProps) {
  const IconComponent = Icon || MdArrowOutward;

  return (
    <Link
      href={url}
      className={cn(
        "px-[10px] text-[#fff] btn-grad sm:px-[30px] py-[12px] rounded-[8px] font-medium inline-flex items-center",
        className
      )}
    >
      {content}
      <IconComponent className="ml-[10px]" />
    </Link>
  );
}
