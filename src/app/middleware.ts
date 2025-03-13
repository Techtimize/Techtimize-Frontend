import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
    const headers = new Headers(request.headers);
    headers.set("x-current-path", request.nextUrl.pathname);

    if (
        request.nextUrl.pathname.includes("api/v1")
    )

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
