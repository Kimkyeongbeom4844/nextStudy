import React from "react";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import Userlist from "./components/Userlist";

export interface Userdata {
  id: number;
  email: string;
  name: string | null;
}

export interface Userdata {
  profile: {
    id: number;
    bio: string | null;
  } | null;
}

export default async function Page() {
  const prisma = new PrismaClient();

  const data: Userdata[] = await prisma.user.findMany({
    include: {
      profile: {
        select: {
          id: true,
          bio: true,
        },
      },
    },
  });
  console.log(data);

  return (
    <>
      <h1>/ 페이지</h1>
      <Userlist data={data} />
      <Link href={"/user"}>/user 로</Link>
      <Link href={"/cookie"}>/cookie 로</Link>
    </>
  );
}
