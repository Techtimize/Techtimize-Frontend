"use client";
import { sidebarOption } from "@/app/constants/sidebarOption";
import Image from "next/image";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import TechtimizeLogo from "../TechtimizeLogo/TechtimizeLogo";
interface SidebarProps {
  openSidebar: boolean;
  setOpenSidebar: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ openSidebar, setOpenSidebar }) => {
  return (
    <div
      className={`lg:w-64 w-full bg-white flex flex-col gap-y-[65px] transition-all duration-500 sticky box-border`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between py-[3px] px-4">
        <Link href={"/"}>
          {/* <Image
            src="/assets/svgs/companyLogo.svg"
            width={263}
            height={94}
            className={`transition-all duration-300 ${"w-[230px] h-[84px]"}`}
            alt={"Company Logo"}
          /> */}
          <TechtimizeLogo className="transition-all duration-300" />
        </Link>
        <button
          className="lg:hidden block"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <RxCross1 color="black" />
        </button>
      </div>

      {/* Sidebar Links */}
      <ul className="space-y-2">
        {sidebarOption?.map((item) => (
          <li
            key={item.id}
            className="group flex items-center text-primary-dark px-4 w-full hover:bg-primary hover:text-white"
          >
            {/* Image with hover filter */}
            <Image
              src={item.icon}
              alt={item.title}
              width={24}
              height={24}
              className="group-hover:brightness-0 group-hover:invert"
            />
            <Link
              href={item.path}
              className="px-4 py-2"
              target="_blank"
            >
              <span className='font-[800]'>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
