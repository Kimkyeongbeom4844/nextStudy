import React from "react";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

export default async function Page() {
  const prisma = new PrismaClient();

  const data = await prisma.tbFamilySite.findMany();
  console.log(data);

  return (
    <>
      <h1>/ 페이지</h1>
      {data.map((v) => {
        return (
          <React.Fragment key={v.site_id}>
            <p>{v.site_id}</p>
            <p>{v.sitename}</p>
          </React.Fragment>
        );
      })}
      <Link href={"/user"}>/user 로</Link>
      <Link href={"/cookie"}>/cookie 로</Link>
    </>
  );
}
