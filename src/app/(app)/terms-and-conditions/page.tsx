import PageHeader from "@/app/components/PageHeader/PageHeader";
import React from "react";
import { getCanonicalUrl } from "@/app/lib/getCanonial";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const canonical = await getCanonicalUrl("/terms-and-conditions");

  return {
    title: "Terms & Conditions | Techtimize",
    alternates: {
      canonical,
    },
  };
}

const TermsAndConditions = () => {
  return (
    <div className="flex flex-col w-full items-center font-montserrat px-4 md:px-12 xl:px-32">
      <PageHeader heading="Terms & Conditions" subHeading={""} />
      <div className="max-w-[1536px] w-full md:pt-[84px] pt-[40px] pb-[41px] xl:px-[170px] md:px-[40px] px-[15px]">
        
        {/* Intro */}
        <h2 className="lg:text-[46px] text-[40px] text-[#1D1D1D] font-semibold mb-[15px]">
          Terms & Conditions
        </h2>
        <div className="max-w-[1200px] w-full flex flex-col gap-[30px] text-[16px] text-black mb-[43px]">
          Welcome to Techtimize. These Terms & Conditions (“Terms”) govern your
          use of our website www.techtimize.co (the “Site”) and all associated
          products, services, and solutions offered by Techtimize. By accessing
          or using our website, you agree to be bound by these Terms. If you do
          not agree, please discontinue using the website and our services
          immediately.
        </div>

        {/* 1. Acceptance of Terms */}
        <div className="max-w-[1200px] w-full flex flex-col gap-[15px] text-[16px] text-black mb-[43px]">
          <h2 className="text-[28px] text-[#1D1D1D] font-semibold">
             Acceptance of Terms
          </h2>
          <p>By visiting or using our Site, you acknowledge that you:</p>
          <ul className="list-disc pl-5">
            <li>
              Are at least 18 years of age or accessing under the supervision of
              a parent/guardian.
            </li>
            <li>
              Have read, understood, and agreed to comply with these Terms.
            </li>
            <li>
              Consent to abide by all applicable local and international laws
              while using our Site and services.
            </li>
          </ul>
        </div>

        {/* 2. Scope of Services */}
        <div className="max-w-[1200px] w-full flex flex-col gap-[15px] text-[16px] text-black mb-[43px]">
          <h2 className="text-[28px] font-semibold"> Scope of Services</h2>
          <p>
            Techtimize provides custom technology solutions that may include but
            are not limited to:
          </p>
          <ul className="list-disc pl-5">
            <li>Web & Mobile Application Development</li>
            <li>Artificial Intelligence (AI)</li>
            <li>UI/UX Design</li>
            <li>Cloud & DevOps Services</li>
            <li>Staff Augmentation</li>
            <li>Digital Marketing</li>
          </ul>
          <p>
            We may expand, modify, or discontinue any service at our sole
            discretion without prior notice.
          </p>
        </div>

        {/* 3. Website Usage */}
        <div className="max-w-[1200px] w-full flex flex-col gap-[15px] text-[16px] text-black mb-[43px]">
          <h2 className="text-[28px] font-semibold"> Website Usage</h2>
          <p>You agree to use our Site responsibly and not to:</p>
          <ul className="list-disc pl-5">
            <li>Engage in unlawful, harmful, or fraudulent activities.</li>
            <li>Upload or transmit malicious code, viruses, or harmful content.</li>
            <li>
              Attempt unauthorized access to restricted areas, servers, or
              databases.
            </li>
            <li>
              Copy, reproduce, or redistribute content without written
              permission.
            </li>
            <li>
              Use automated tools (bots, scrapers, crawlers) that may disrupt
              Site functionality.
            </li>
          </ul>
        </div>

        {/* 4. User Accounts */}
        <div className="max-w-[1200px] w-full flex flex-col gap-[15px] text-[16px] text-black mb-[43px]">
          <h2 className="text-[28px] font-semibold"> User Accounts (If Applicable)</h2>
          <p>Some services may require registration or account creation. You agree to:</p>
          <ul className="list-disc pl-5">
            <li>Provide accurate and current information during any communication.</li>
            <li>Maintain confidentiality of your login credentials.</li>
            <li>Accept full responsibility for all activities under your account.</li>
            <li>Immediately notify us in case of unauthorized account use.</li>
          </ul>
          <p>
            Techtimize will not be liable for damages resulting from compromised
            accounts due to negligence.
          </p>
        </div>

        {/* 5. Intellectual Property Rights */}
        <div className="max-w-[1200px] w-full flex flex-col gap-[15px] text-[16px] text-black mb-[43px]">
          <h2 className="text-[28px] font-semibold"> Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, all content on this Site—including text,
            graphics, code, designs, logos, trademarks, and software—is the
            exclusive property of Techtimize.
          </p>
          <p>
            You may not use, modify, or distribute our intellectual property
            without prior written consent. Unauthorized use may lead to legal
            consequences under copyright, trademark, and intellectual property
            laws.
          </p>
        </div>

        {/* 6. Pricing, Payments & Contracts */}
        <div className="max-w-[1200px] w-full flex flex-col gap-[15px] text-[16px] text-black mb-[43px]">
          <h2 className="text-[28px] font-semibold"> Pricing, Payments & Contracts</h2>
          <p>If you engage Techtimize for services:</p>
          <ul className="list-disc pl-5">
            <li>
              Pricing will be agreed upon before project initiation and
              documented in a contract or invoice.
            </li>
            <li>Payments must be made as per the agreed schedule.</li>
            <li>
              Late or non-payments may result in project delays, suspension, or
              termination of services.
            </li>
            <li>
              All fees are non-refundable unless explicitly stated in the
              contract.
            </li>
          </ul>
        </div>

        {/* 7. Confidentiality */}
        <div className="max-w-[1200px] w-full flex flex-col gap-[15px] text-[16px] text-black mb-[43px]">
          <h2 className="text-[28px] font-semibold"> Confidentiality</h2>
          <p>
            Techtimize respects client confidentiality and agrees not to
            disclose sensitive project information without consent, unless
            required by law. Both parties must maintain confidentiality of
            proprietary or non-public information shared during the course of a
            project.
          </p>
        </div>

        {/* 9. Limitation of Liability */}
        <div className="max-w-[1200px] w-full flex flex-col gap-[15px] text-[16px] text-black mb-[43px]">
          <h2 className="text-[28px] font-semibold"> Limitation of Liability</h2>
          <p>
            Techtimize shall not be liable for any indirect, incidental, or
            consequential damages (including data loss, downtime, or business
            interruption) arising from the use or inability to use our Site or
            services. Our liability, if proven under applicable law, shall not
            exceed the amount paid by the client for the specific service that
            caused the claim.
          </p>
        </div>

        {/* 11. Termination of Use */}
        <div className="max-w-[1200px] w-full flex flex-col gap-[15px] text-[16px] text-black mb-[43px]">
          <h2 className="text-[28px] font-semibold"> Termination of Use</h2>
          <p>We reserve the right to:</p>
          <ul className="list-disc pl-5">
            <li>
              Restrict or terminate your access to our Site or services without
              prior notice if you violate these Terms.
            </li>
            <li>Suspend or cancel accounts that engage in unlawful or abusive activity.</li>
            <li>Take legal action if necessary to protect our rights and users.</li>
          </ul>
        </div>

        {/* 13. Amendments to Terms */}
        <div className="max-w-[1200px] w-full flex flex-col gap-[15px] text-[16px] text-black mb-[43px]">
          <h2 className="text-[28px] font-semibold"> Amendments to Terms</h2>
          <p>
            We may revise or update these Terms & Conditions at any time without
            prior notice. Updates will be posted on this page with a new “Last
            Updated” date. Continued use of the Site after changes means you
            accept the updated Terms.
          </p>
        </div>

        {/* 15. Entire Agreement */}
        <div className="max-w-[1200px] w-full flex flex-col gap-[15px] text-[16px] text-black">
          <h2 className="text-[28px] font-semibold"> Entire Agreement</h2>
          <p>
            These Terms & Conditions, along with any project agreements or
            contracts signed between Techtimize and clients, constitute the
            entire agreement regarding the use of our website and services.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;
