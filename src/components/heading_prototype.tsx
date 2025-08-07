type Props = {
  heading: string;
  para?: string;
  alignment? : string
};

export default function Heading_proto({ heading, para, alignment }: Props) {
  const alignmentClass = alignment ? alignment : 'text-center';
  return (
    <div className={`mt-[100px] mb-[30px]`}>
      <h2 className={`${alignmentClass}  text-[32px] mb-[20px]`}>{heading}</h2>
      <p className={`${alignmentClass}  text-[#727272] text-[18px]`}>{para}</p>
    </div>
  );
}
