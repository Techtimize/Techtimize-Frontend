import PageHeader from "@/app/components/PageHeader/PageHeader";
import React from "react";
import Link from 'next/link';
import { sitelinks, serviceslinks } from "@/app/constants/sitemap";
import "./sitemap.css"

const SiteMap = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <PageHeader heading="Site Map" />
      <div className="max-w-[1536px] w-full md:pt-[84px] pt-[40px] pb-[41px] xl:px-[170px] md:px-[40px] px-[15px]">
        <h2 className="lg:text-[46px] text-[40px] text-[#1D1D1D] font-semibold mb-[15px]">
          Site Map
        </h2>
        <div className="w-full flex flex-col gap-[30px] text-[16px] text-black mb-[43px]">
          <p>
            we are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website or use our services..{" "}
          </p>
        </div>
      </div>
      <div className="quick-links max-w-[1536px] w-full md:pt-[84px] pt-[40px] pb-[41px] xl:px-[170px] md:px-[40px] px-[15px]">
            <h2 className="md:pl-[50px] pb-[35px] lg:text-[46px] text-[40px] text-[#1D1D1D] font-semibold mb-[15px] z-9">
          Quick Links
        </h2>
        <div className="md:pl-[120px] text-[#0B4D8E]">
        {sitelinks.map(({ label, path }) => (
          <Link 
            key={label} 
            href={path} 
            className="block pb-[18px] hover:text-blue-500"
          >
            {label}
          </Link>
        ))}

        </div>
          </div>

          <div className="services max-w-[1536px] w-full md:pt-[84px] pt-[40px] pb-[41px] xl:px-[170px] md:px-[40px] px-[15px]">
            <h2 className="md:pl-[50px] pb-[35px] lg:text-[46px] text-[40px] text-[#1D1D1D] font-semibold mb-[15px]">
          Services
        </h2>
        <div className="md:pl-[120px] text-[#0B4D8E]">
          {serviceslinks.map(({ label, href }) => (
          <Link 
            key={href} 
            href={href} 
            className="block pb-[18px] hover:text-blue-500"
          >
            {label}
          </Link>
        ))}
        </div>
          </div>
    </div>
  );
};

export default SiteMap;
