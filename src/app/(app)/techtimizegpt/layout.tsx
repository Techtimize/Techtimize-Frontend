import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: "https://techtimize.co/techtimizegpt",
    },
  };
}

export default function TechtimizeGPTLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}


