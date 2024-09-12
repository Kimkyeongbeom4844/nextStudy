import { type NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  console.log(request.cookies.getAll());
  request.cookies.clear();
  response.cookies.set({
    name: "access_token",
    value: (Math.random() * 100).toString(),
    path: "/",
    httpOnly: true,
  });
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
