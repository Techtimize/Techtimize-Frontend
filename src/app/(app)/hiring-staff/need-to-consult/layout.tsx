import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: "https://techtimize.co/hiring-staff/need-to-consult",
    },
  };
}

export default function NeedToConsultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}


