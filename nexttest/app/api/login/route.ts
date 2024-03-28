import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const GET = async (request: Request) => {
  try {
    const cookieStore = cookies();
    if (cookieStore.get("access_token") === undefined) {
      return NextResponse.json({ error: "이미 로그아웃됨" });
    }
    cookieStore.delete("access_token");
    return NextResponse.json({ message: "로그아웃" });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message });
  }
};

export const POST = async (request: Request) => {
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
    } else {
      const decoded = jwt.verify(
        (cookieStore.get("access_token") as any).value,
        body.password
      );
      console.log(decoded);
      return NextResponse.json({ message: "이미 로그인 됨" });
    }
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message });
  }
};
