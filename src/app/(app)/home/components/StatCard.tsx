import CountUp from "react-countup";

interface StatCardProps {
  title: string;
  stat: number;
  suffix: string;
}
export default function StatCard({ title, stat, suffix }: StatCardProps) {
  return (
    <div className="rounded-[10px] shadow-lg xl:px-[30px] md:p-[20px] sm:px-[20px] sm:py-[15px] px-[15px] py-[10px] border flex-1 border-statBorder">
      <p className="text text-statGrey">
        {title}
      </p>
      <p className="xl:text-[33px] text-[31px] md:text-[25px] sm:text-[25px] font-semibold xl:mt-[22px] md:mt-[10px] sm:mt-[10px] text-tertiary">
        <CountUp start={0} end={stat} duration={2} suffix={suffix}

        />
      </p>
    </div>
  );
};

