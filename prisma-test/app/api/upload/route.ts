import { type NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  console.log(data);
  // await fs.mkdir("./test");
  try {
    const res = await fs.access("./public");
    console.log("결과 : ", res);
  } catch (err) {
    console.error("에러 : ", err);
  }
  for (let [key, value] of data) {
    console.log(value);
  }
  return NextResponse.json({ error: "업로드 성공" }, { status: 500 });
}
