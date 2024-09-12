import React from "react";
import { PrismaClient } from "@prisma/client";
import Userinfo from "./components/Userinfo";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const prisma = new PrismaClient();
  const data = await prisma.user.findUnique({
    where: {
      id: Number(params.id),
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
  console.log("/edit/[:id] 데이터 : ", data);

  if (data === null) {
    redirect("/");
  }
  return (
    <>
      <p>
        /edit/{"["}:id{"]"} 페이지
      </p>
      <Userinfo userData={data} />
    </>
  );
}
