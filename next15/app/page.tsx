import React from "react";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import InsertUser from "./components/InsertUser";

export default async function Page() {
  const prisma = new PrismaClient();

  const data = await prisma.user.findMany();
  console.log(data);

  return (
    <>
      <h1>/ 페이지</h1>
      <InsertUser data={data} />
      {data.map((v) => {
        return (
          <React.Fragment key={v.id}>
            <p>{v.email}</p>
            <p>{v.name}</p>
          </React.Fragment>
        );
      })}
      <Link href={"/user"}>/user 로</Link>
      <Link href={"/cookie"}>/cookie 로</Link>
    </>
  );
}
