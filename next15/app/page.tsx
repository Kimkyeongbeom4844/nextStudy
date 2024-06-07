import React from "react";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

export default async function Page() {
  const prisma = new PrismaClient();

  const data = await prisma.user.findMany();
  console.log(data);

  return (
    <>
      <h1>/ 페이지</h1>
      {data.map((v) => {
        return (
          <>
            <p>{v.id}</p>
            <p>{v.email}</p>
            <p>{v.name}</p>
          </>
        );
      })}
      <Link href={"/user"}>/user 로</Link>
      <Link href={"/cookie"}>/cookie 로</Link>
    </>
  );
}
