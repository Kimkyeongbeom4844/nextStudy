import { type NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const GET = async (request: NextRequest) => {
  try {
    const cookieStore = cookies();
    if (cookieStore.get("access_token") === undefined) {
      throw new Error("이미 로그아웃됨");
    }
    cookieStore.delete("access_token");
    return NextResponse.json({ message: "로그아웃" });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    console.log(body.email, body.password);
    const cookieStore = cookies();
    if (cookieStore.get("access_token") === undefined) {
      const token = jwt.sign({ email: body.email }, body.password, {
        algorithm: "HS256", // 암호화 알고리즘
        expiresIn: 60 * 30, // 유효기간
      });
      cookieStore.set("access_token", token, {
        httpOnly: true,
      });
      return NextResponse.json({ message: "로그인" });
    }
    const decoded = jwt.verify(
      (cookieStore.get("access_token") as RequestCookie).value,
      body.password
    );
    console.log(decoded);
    throw new Error("이미 로그인 됨");
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
