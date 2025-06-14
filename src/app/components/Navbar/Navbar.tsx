"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { links } from "@/app/constants/nav-links";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Navbar = () => {
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
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-between px-5 lg:px-[69px] py-4">
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

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-[16px]">
            {links?.map((item) => (
              <li key={item?.id} className="relative">
                <Link
                  href={item?.path}
                  className={`cursor-pointer ${
                    item?.path === pathname
                      ? "text-blue-600 font-bold"
                      : "text-gray-700"
                  }`}
                >
                  {item?.link}
                </Link>
                {item?.path === pathname && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-5px] w-[25px] h-[3px] bg-blue-600 rounded-full"></div>
                )}
              </li>
            ))}
            <Link
              href="https://chat.techtimize.org/"
              target="_blank"
              className="hover:underline hover:underline-offset-4 text-[#0B4D8E] hover:text-[#00008B] hover:font-bolder"
            >
              <span className="font-bolder">AI Assistant</span>
            </Link>
          </ul>

          <Link href="/contact-us">
            <Button className=" bg-[#0B4D8E] hover:bg-[#0B4D8E] text-white">
              Get in Touch
            </Button>
          </Link>
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
            <Link href="/contact-us" className="block">
              <Button className="bg-[#0B4D8E] text-white hover:bg-[#0B4D8E] ">
                Get In Touch
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
