"use client";
import { InlineWidget } from "react-calendly";

const NeedToConsult = () => {
  const username = process.env.NEXT_PUBLIC_CALENDLY_USERNAME;
  return (
    // <div className='h-[1000px]'>
      <InlineWidget
        url={`https://calendly.com/${username}/30min`}
        pageSettings={{
          backgroundColor: "ffffff",
          primaryColor: "00a2ff",
          textColor: "000000",
        }}
        styles={{height: "800px"}}
        prefill={{
          date: new Date(Date.now() + 86400000),
        }}
        utm={{
          utmCampaign: "Spring Sale 2024",
          utmContent: "Discount Offer",
          utmMedium: "Email",
          utmSource: "Newsletter",
          utmTerm: "Spring",
        }}
      />
    // </div>
  );
};

export default NeedToConsult;
