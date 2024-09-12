import React from "react";
import { PrismaClient } from "@prisma/client";

export default async function Userlist() {
  const prisma = new PrismaClient();
  const data = await prisma.user.findMany();
  console.log(data);

  return (
    <ul>
      {data.length !== 0 ? (
        data.map((v) => (
          <li key={v.id}>
            <p>이메일 : {v.email}</p>
            <p>이름 : {v.name}</p>
          </li>
        ))
      ) : (
        <p>없음</p>
      )}
    </ul>
  );
}
