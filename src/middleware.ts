import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  const headers = new Headers(request.headers);
  headers.set("x-current-path", request.nextUrl.pathname);

  // Protect all admin sub-routes (except the login page at /admin)
  const pathname = request.nextUrl.pathname;
  if (
    pathname.startsWith("/admin/") &&
    pathname !== "/admin"
  ) {
    const adminAuth = request.cookies.get("admin-auth");
    if (!adminAuth || adminAuth.value !== "authenticated") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/api/v1")) {
    return fetch(new URL(request.nextUrl.pathname, process.env.API_URL), {
      body: request.body,
      method: request.method,
    });
  }

  return NextResponse.next({
    request: {
      headers,
    },
  });
};
