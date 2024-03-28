import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  // if (typeof request.headers.get("referer") === "string") {
  //   const beforeUrl = new URL(request.headers.get("referer") as string);
  //   console.log(beforeUrl.pathname);
  //   revalidatePath("/");
  // }
  console.log(request.nextUrl.pathname);
  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/apple/:path*"],
};
