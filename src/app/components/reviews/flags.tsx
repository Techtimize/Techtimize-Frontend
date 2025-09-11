import { getCode } from "country-list";

type Props = {
  countryName: string;
};

const countryNameMap: Record<string, string> = {
  "United States": "United States of America",
  "USA": "United States of America",
  "US": "United States of America",
  "United States of America": "United States of America",
};

export default function CountryFlag({ countryName }: Props) {
  const normalizedName = countryNameMap[countryName.trim()] || countryName;

  const code = getCode(normalizedName);

  if (!code) {
    return <span>🌍 {countryName}</span>; 
  }

  return (
    <img
      src={`https://flagcdn.com/${code.toLowerCase()}.svg`}
      alt={`${normalizedName} Flag`}
      width={32}
      height={32}
      className="rounded-[2px]"
    />
  );
}
