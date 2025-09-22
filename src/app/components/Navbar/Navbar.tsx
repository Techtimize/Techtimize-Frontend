"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { links } from "@/app/constants/nav-links";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { HiOutlineSparkles } from "react-icons/hi2";


import Btn_redesign from "@/components/ui/btn_redesign";

const Navbar = () => {
  //  const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   if (window.pageYOffset > 0) {
  //     setIsSticky(true);
  //   } else {
  //     setIsSticky(false);
  //   }
  // };
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = "auto";
  };

  

  return (
    <header className="fixed top-0 left-0 w-full  z-[9999999] border-black">
{/* <nav className={`${isSticky ? 'stickynavbar' : ''}  transition-all container mx-auto flex items-center justify-between px-5 lg:max-w-[90%] rounded-[8px] sm:mt-[25px] border-[#ECECEC] border-[1px]`}>         */}
<nav className={`stickynavbar   transition-all container mx-auto flex items-center justify-between px-5 !max-w-[93%] rounded-[8px] mt-[25px] border-[#ECECEC] border-[1px]`}>        
<div>
        <Link href="/">
          <Image
            priority
            src="/assets/svgs/companyLogo.svg"
            width={230}
            height={84}
            className="lg:w-[230px] lg:h-[84px] w-[171px] h-[63px]"
            alt="techtimize-logo"
          />
        </Link>
</div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-[16px]">
            {links?.map((item) => (
              <li key={item?.id} className="relative">
                <Link
                  href={item?.path}
                  className={`cursor-pointer ${
                    item?.path === pathname
                      ? "text-[#0697D5] font-bold"
                      : "text-gray-700"
                  }`}
                >
                  {item?.link}
                </Link>
              
              </li>
            ))}
       
          </ul>
          </div>
            <div className="hidden lg:block">
          

        < Btn_redesign content="Techtimize GPT " url = "/techtimizegpt" icon={HiOutlineSparkles}/>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleSidebarToggle}
          className="lg:hidden focus:outline-none"
          aria-label="Open Menu"
        >
          <Image
            src="/assets/svgs/menu.svg"
            alt="Menu Icon"
            width={25}
            height={25}
          />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <div className="flex justify-end p-5">
          <button onClick={handleCloseSidebar} className="text-gray-700">
            <IoClose size={30} />
          </button>
        </div>

        <ul className="text-lg text-gray-800 space-y-5 p-5">
          {links?.map((item) => (
            <li key={item?.id}>
              <Link
                href={item?.path}
                onClick={handleCloseSidebar}
                className="block"
              >
                {item?.link}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="https://chat.techtimize.org/"
              target="_blank"
              className="hover:underline hover:underline-offset-4 hover:text-[#00008B] hover:font-bolder"
            >
              AI Assistant
            </Link>
          </li>
          <li>
        < Btn_redesign content="Get In Touch " url = "/contact-us"/>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
