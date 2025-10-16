import { NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function GET() {
  try {
    const res = await fetch(`${baseUrl}/api/v1/sitemap.xml`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Sitemap fetch failed with status:", res.status);
      return new NextResponse("Failed to fetch sitemap", { status: 500 });
    }
    console.log("before xml : " , res)
    const xml = await res.text();
    console.log("after xml : " , xml)
    // 🔥 Ensure we return pure XML text with no encoding issues
    return new NextResponse(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("Error fetching sitemap:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}