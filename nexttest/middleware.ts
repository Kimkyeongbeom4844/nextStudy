import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  console.log(request.nextUrl.pathname);
  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/apple/:path*"],
};
