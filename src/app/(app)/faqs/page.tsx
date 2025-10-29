import PageHeader from "@/app/components/PageHeader/PageHeader";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import "./faqs.css";

import { getFaqs } from "@/app/api/faqs/getFaqs";
import { getCanonicalUrl } from "@/app/lib/getCanonial";
import { Metadata } from "next";
import { generateMetadataFromBE } from "@/app/lib/utils";
export async function generateMetadata(): Promise<Metadata> {
  const canonical = await getCanonicalUrl("/faqs");

  const baseMetadata = await generateMetadataFromBE("faqs");

  return {
    ...baseMetadata,
    alternates: {
      canonical,
    },
  };
}

// Custom AccordionTrigger component
const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Accordion.Trigger>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames("AccordionTrigger", className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <span className="AccordionIcon" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

// Custom AccordionContent component
const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Accordion.Content>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames("AccordionContent", className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));
AccordionContent.displayName = "AccordionContent";

const FAQs = async () => {
  const faqs: Awaited<ReturnType<typeof getFaqs>> = await getFaqs();
  

  return (
    <div style={{ padding: "40px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <PageHeader subHeading="FAQs" heading="Frequently Asked Questions" />
      <div style={{ width: "100%", maxWidth: "1500px" }}>
        <Accordion.Root
          className="AccordionRoot"
          type="single"
          defaultValue="item-0"
          collapsible
        >
          {faqs.map((faq: any, idx: number) => (
            <Accordion.Item className="AccordionItem" value={`item-${idx}`} key={faq._id || idx}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
};

export default FAQs;