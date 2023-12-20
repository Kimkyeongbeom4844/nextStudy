"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState<Array<any> | null>(null);
  useEffect(() => {
    (async () => {
      setData((await (await getUsers()).json()) as Array<any>);
    })();
  });

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
