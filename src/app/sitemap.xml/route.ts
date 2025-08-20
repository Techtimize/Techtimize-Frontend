import { NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function GET() {
  try {
    console.log("Fetching sitemap from:", `${baseUrl}/api/v1/sitemap.xml`);

    const res = await fetch(`${baseUrl}/api/v1/sitemap.xml`, {
      headers: {
        "Content-Type": "application/xml",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Sitemap fetch failed with status:", res.status);
      return new NextResponse("Failed to fetch sitemap", { status: 500 });
    }

    const data = await res.text();
    console.log("Sitemap fetched successfully, length:", data.length);

    return new NextResponse(data, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("Error fetching sitemap:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
