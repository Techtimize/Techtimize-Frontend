import { headers } from "next/headers";

export async function getCanonicalUrl(pathname?: string): Promise<string> {
  const headersList = await headers();
  const host = headersList.get("host") || "www.techtimize.co";
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  if (pathname) {
    return `${protocol}://${host}${pathname}`;
  }

  const url = headersList.get("x-url") || headersList.get("referer") || "";
  const resolvedPath = url
    ? new URL(url, `${protocol}://${host}`).pathname
    : "/";

  return `${protocol}://${host}${resolvedPath}`;
}
