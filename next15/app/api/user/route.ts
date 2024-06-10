import { PrismaClient } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const prisma = new PrismaClient();
    const data = await request.json();
    const res = await prisma.user.create({
      data: {
        email: data.email,
        name: "김경범",
      },
    });
    console.log("생성완료 : ", res);
    return Response.json({ message: "success" });
  } catch (err) {
    console.log(err);
    return Response.error();
  }
}
