import PageHeader from "@/app/components/PageHeader/PageHeader";
import React from "react";
import { getCanonicalUrl } from "@/app/lib/getCanonial";
import { Metadata } from "next";
import { generateMetadataFromBE } from "@/app/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const canonical = await getCanonicalUrl("/privacy-policy");

  const baseMetadata = await generateMetadataFromBE("privacy");

  return {
    ...baseMetadata,
    alternates: {
      canonical,
    },
  };
}

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col w-full items-center font-montserrat px-4 md:px-12 xl:px-32">
      <PageHeader heading="Privacy Policy" subHeading={""} />
      <div className="max-w-[1536px] w-full md:pt-[84px] pt-[40px] pb-[41px] xl:px-[170px] md:px-[40px] px-[15px]">
        
        {/* Intro */}
        <h2 className="lg:text-[46px] text-[40px] text-[#1D1D1D] font-semibold mb-[15px]">
          Privacy Policy
        </h2>
        <div className="max-w-[1200px] w-full flex flex-col gap-[20px] text-[16px] text-black mb-[43px]">
          <p>
            At Techtimize, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, and safeguard your data when you visit our website
            Techtimize.co or use our services. By using our website, you agree
            to the practices described in this policy.
          </p>
        </div>

        {/* Information We Collect & How We Use It */}
        <div className="max-w-[1200px] w-full flex flex-col gap-[15px] text-[16px] text-black mb-[43px]">
          <h2 className="text-[28px] font-semibold">
            Information We Collect & How We Use It
          </h2>
          <p>We may collect personal and non-personal information in the following ways:</p>
          <ul className="list-disc pl-5">
            <li>
              <strong>Personal Information</strong> – such as your name, email address, phone number, or company details when you fill out forms, request services, or contact us.
            </li>
            <li>
              <strong>Technical Information</strong> – such as your IP address, browser type, device details, and pages visited, collected automatically through cookies and analytics tools.
            </li>
            <li>
              <strong>Usage Data</strong> – information about how you interact with our website and services, which helps us improve user experience and performance.
            </li>
          </ul>
          <p>We use this information to:</p>
          <ul className="list-disc pl-5">
            <li>Provide and improve our services.</li>
            <li>Respond to inquiries, support requests, or career applications.</li>
            <li>Communicate updates, offers, or relevant information (only if you opt in).</li>
            <li>Analyze website usage and enhance user experience.</li>
          </ul>
          <p>We do not sell, rent, or trade your personal data to third parties.</p>
        </div>

        {/* Data Sharing & Protection */}
        <div className="max-w-[1200px] w-full flex flex-col gap-[15px] text-[16px] text-black mb-[43px]">
          <h2 className="text-[28px] font-semibold">Data Sharing & Protection</h2>
          <p>Your information may be shared only in the following cases:</p>
          <ul className="list-disc pl-5">
            <li>
              With trusted partners – such as hosting providers or third-party tools (e.g., cloud platforms, analytics services) who assist us in delivering services.
            </li>
            <li>
              For legal compliance – if required by law, regulation, or valid government request.
            </li>
          </ul>
          <p>We take strict measures to protect your data, including:</p>
          <ul className="list-disc pl-5">
            <li>Using secure servers and encryption protocols.</li>
            <li>Restricting access to authorized personnel only.</li>
            <li>Regular monitoring to prevent unauthorized access, misuse, or loss of data.</li>
          </ul>
        </div>

        {/* Cookies & Tracking Technologies */}
        <div className="max-w-[1200px] w-full flex flex-col gap-[15px] text-[16px] text-black mb-[43px]">
          <h2 className="text-[28px] font-semibold">Cookies & Tracking Technologies</h2>
          <p>Our website may use cookies and similar technologies to:</p>
          <ul className="list-disc pl-5">
            <li>Enhance browsing experience.</li>
            <li>Remember preferences.</li>
            <li>Collect analytics data for site performance and improvements.</li>
          </ul>
          <p>
            You can manage or disable cookies through your browser settings, but some features of the site may not function properly without them.
          </p>
        </div>

        {/* Your Rights & Choices */}
        <div className="max-w-[1200px] w-full flex flex-col gap-[15px] text-[16px] text-black mb-[43px]">
          <h2 className="text-[28px] font-semibold">Your Rights & Choices</h2>
          <p>As a user, you have the right to:</p>
          <ul className="list-disc pl-5">
            <li>Access, update, or correct your personal information.</li>
            <li>Request deletion of your personal data, subject to legal obligations.</li>
            <li>Opt out of receiving marketing emails at any time.</li>
            <li>Restrict certain data collection through browser or device settings.</li>
          </ul>
          <p>
            For any such requests, you can contact us directly at{" "}
            <a href="mailto:info@techtimize.co" className="text-blue-600 underline">
              info@techtimize.co
            </a>.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
