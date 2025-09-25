import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

type BtnProps = {
  content: string;
  url: string;
  icon?: IconType;
  className?: string;
};

const animationMap = new Map<IconType, string>([
  [FaVideo, "icon-video"],
  [HiOutlineSparkles, "icon-sparkle"],
  [MdArrowOutward, "icon-rotate"],
]);

export default function Btn_redesign({ content, url, className, icon: Icon }: BtnProps) {
  const IconComponent = Icon || MdArrowOutward;
  const animationClass =  Icon ? animationMap.get(Icon) : animationMap.get(MdArrowOutward);
  return (
    <Link
      href={url}
      className={cn(
        "px-[15px] text-[#fff] btn-grad sm:px-[30px] py-[12px] rounded-[8px] font-medium inline-flex items-center group",
        className
      )}
    >
      {content}
      <IconComponent
        className={cn(
          "ml-[10px] transition-all duration-300 group-hover:opacity-80",
          animationClass
        )}
      />

    </Link>
  );
}
