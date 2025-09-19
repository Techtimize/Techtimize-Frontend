type Props = {
  heading: string;
  para?: string;
  para2?: string;
  alignment?: string;
  className?: string;
};

export default function Heading_proto({ heading, para,para2, alignment, className }: Props) {
  const alignmentClass = alignment || 'text-center';
  
  return (
    <div className={`mt-[40px] max-w-[90%] mx-[auto] sm:mx-[unset] sm:max-w-[unset] lg:mt-[60px] mb-[30px] ${className || ''}`}>
      <h2 className={`${alignmentClass} text-[27px] sm:text-[32px] mb-[20px] font-[700]`}>{heading}</h2>
      {para && <p className={`${alignmentClass} text-[#727272] text-[18px]`}>{para}</p>}
      {para2 && <p className={`${alignmentClass} text-[#727272] text-[18px]`}>{para2}</p>}
    </div>
  );
}
