import PageHeader from "@/app/components/PageHeader/PageHeader";
import React from "react";
import Link from 'next/link';
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
        <Link href="home" className="block pb-[18px]">Home</Link>
        <Link href="About" className="block pb-[18px]">About</Link>
        <Link href="hiring-staff" className="block pb-[18px]">Hiring Staff</Link>
        <Link href="services" className="block pb-[18px]">Services</Link>
        <Link href="contact-us" className="block pb-[18px]">Contact</Link>
        <Link href="projects" className="block pb-[18px]">Projects</Link>
        </div>
          </div>

          <div className="services max-w-[1536px] w-full md:pt-[84px] pt-[40px] pb-[41px] xl:px-[170px] md:px-[40px] px-[15px]">
            <h2 className="md:pl-[50px] pb-[35px] lg:text-[46px] text-[40px] text-[#1D1D1D] font-semibold mb-[15px]">
          Services
        </h2>
        <div className="md:pl-[120px] text-[#0B4D8E]">
        <Link href="/services?service=Artificial Intelligence" className="block pb-[18px]"> Artificial Intelligence</Link>
        <Link href="/services?service=App Development" className="block pb-[18px]">Mobile App Development</Link>
        <Link href="/services?service=App Development" className="block pb-[18px]">Web App Development</Link>
        <Link href="/services?service=Cloud Services" className="block pb-[18px]">Cloud Services</Link>
        <Link href="/services?service=UI UX" className="block pb-[18px]">UI UX Design</Link>
        <Link href="/services?service=Management" className="block pb-[18px]">Project Management</Link>
        <Link href="/services?service=Staff Augmentation" className="block pb-[18px]">Staff Augmentation</Link>
        </div>
          </div>
    </div>
  );
};

export default SiteMap;
