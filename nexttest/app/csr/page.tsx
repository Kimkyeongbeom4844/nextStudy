"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState<Array<any> | null>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    (async () => {
      setData((await (await getUsers()).json()) as Array<any>);
    })();
  }, []);

  return (
    <>
      <h2>SSG</h2>
      <ul>
        {Array.isArray(data)
          ? data.map((v, i) => {
              return <li key={v.id}>{v.name}</li>;
            })
          : null}
      </ul>
      <Link href={"/ssr"}>ssr로 가기</Link>
      <Link href={"/ssg"}>ssg로 가기</Link>
      <button onClick={() => setCount(count + 1)}>{count}</button>
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
