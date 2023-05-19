"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/users");
      setData(await res.json());
    })();
  }, []);

  return <div>{data?.name}</div>;
};

export default Page;
