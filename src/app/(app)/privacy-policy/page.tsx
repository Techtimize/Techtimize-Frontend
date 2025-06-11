import PageHeader from "@/app/components/PageHeader/PageHeader";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <PageHeader heading="Privacy Policy" />
      <div className="max-w-[1536px] w-full md:pt-[84px] pt-[40px] pb-[41px] xl:px-[170px] md:px-[40px] px-[15px]">
        <h2 className="lg:text-[46px] text-[40px] text-[#1D1D1D] font-semibold mb-[15px]">
          Privacy Policy
        </h2>
        <div className="max-w-[520px] w-full flex flex-col gap-[30px] text-[16px] text-black mb-[43px]">
          <p>
            We are committed to protecting your privacy and safeguarding your
            personal information. This Privacy Policy outlines how we collect,
            use, disclose, and protect your information when you visit our
            website or use our services.At the core of our UI/UX design process
            is a deep understanding of your users and business goals. We begin
            with thorough research and discovery to gather insights that inform
            every design decision.{" "}
          </p>
          <p>
            Our team then maps out intuitive user flows and organizes content
            through effective information architecture. We bring ideas to life
            with wireframes and interactive prototypes.
          </p>
        </div>
        <h2 className="lg:text-[46px] text-[40px] text-[#1D1D1D] font-semibold mb-[15px]">
          Information We Collect
        </h2>
        <div className="max-w-[560px] w-full mb-[43px]">
          <p className="text-[16px] text-black">
            We may collect the following information:
          </p>
          <ul className="text-[16px] text-black list-disc list-inside">
            <li>
              Personal details (e.g., name, email, phone number) when you
              contact us
            </li>
            <li>
              Professional details (e.g., medical practice information) for
              service inquiries
            </li>
            <li>Website usage data through cookies and analytics tools</li>
          </ul>
        </div>

        <h2 className="lg:text-[46px] text-[40px] text-[#1D1D1D] font-semibold mb-[15px]">
          How We Use Your Information
        </h2>
        <div className="max-w-[560px] w-full mb-[43px]">
          <p className="text-[16px] text-black">We use your information to:</p>
          <ul className="text-[16px] text-black list-disc list-inside">
            <li>Respond to inquiries and provide requested services</li>
            <li>Improve our website, services, and customer experience</li>
            <li>
              Communicate important updates or marketing (with your consent)
            </li>
          </ul>
        </div>
        <h2 className="lg:text-[46px] text-[40px] text-[#1D1D1D] font-semibold mb-[15px]">
          Sharing of Information
        </h2>
        <p className="text-[16px] text-black mb-[43px]">
          We do not sell or rent your information. We may share information with
          trusted third-party partners who assist in providing services, under
          strict confidentiality agreements, or as required by law.
        </p>
        <h2 className="lg:text-[46px] text-[40px] text-[#1D1D1D] font-semibold mb-[15px]">
          Data Security
        </h2>
        <p className="text-[16px] text-black mb-[43px]">
          We implement technical and organizational measures to protect your
          data from unauthorized access, disclosure, alteration, or destruction.
        </p>
        <h2 className="lg:text-[46px] text-[40px] text-[#1D1D1D] font-semibold mb-[15px]">
          Your Rights
        </h2>
        <p className="text-[16px] text-black mb-[43px]">
          You have the right to access, update, or request deletion of your
          personal information. Contact us at [contact email] for any
          privacy-related requests.
        </p>
        <h2 className="lg:text-[46px] text-[40px] text-[#1D1D1D] font-semibold mb-[15px]">
          Updates to This Policy
        </h2>
        <p className="text-[16px] text-black">
          We may update this policy from time to time. The latest version will
          always be available on our website. By using our website or services,
          you agree to this Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
