import Link from "next/link";
import React from "react";

const Page = async () => {
  const data = (await (await getUsers()).json()) as Array<any>;
  console.log("ssr");
  return (
    <>
      <h2>SSR</h2>
      <ul>
        {Array.isArray(data)
          ? data.map((v, i) => {
              return <li key={v.id}>{v.name}</li>;
            })
          : null}
      </ul>
      <Link href={"/csr"}>csr로 가기</Link>
      <Link href={"/ssg"}>ssg로 가기</Link>
    </>
  );
};

const getUsers = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    cache: "no-store",
  });
};

export default Page;
