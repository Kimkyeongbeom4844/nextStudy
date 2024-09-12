import { PrismaClient } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";

// 유저 생성 api
export async function POST(request: NextRequest) {
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
    return NextResponse.json(res);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
}

// 유저 정보 얻기
export async function GET(request: NextRequest) {
  try {
    const prisma = new PrismaClient();
    const res = await prisma.user.findMany();
    return NextResponse.json(res);
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
}

// 유저 정보 업데이트
export async function PUT(request: NextRequest) {
  try {
    const prisma = new PrismaClient();
    const body = await request.json();
    console.log(body);

    const checkExistingProfile = await prisma.profile.findUnique({
      where: {
        userId: Number(body.id),
      },
    });
    if (checkExistingProfile === null) {
      const res = await prisma.profile.create({
        data: {
          bio: body.profile,
          userId: Number(body.id),
        },
        include: {
          user: true,
        },
      });
      console.log(res);
      return NextResponse.json(res);
    }
    const res = await prisma.user.update({
      where: {
        id: Number(body.id),
      },
      data: {
        name: body.name,
        email: body.email,
        profile: {
          update: {
            where: {
              userId: Number(body.id),
            },
            data: {
              bio: body.profile,
            },
          },
        },
      },
      include: {
        profile: {
          select: {
            id: true,
            bio: true,
          },
        },
      },
    });
    return NextResponse.json(res);
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}
