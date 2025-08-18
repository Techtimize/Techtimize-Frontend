"use client"

import { usePathname } from "next/navigation"
import Head from "next/head"

export default function Canonical() {
  const baseUrl = "https://www.techtimize.co" 
  const pathname = usePathname()
  const canonicalUrl = baseUrl + (pathname || "")
  console.log("Canonical url  : " , canonicalUrl);
  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  )
}
