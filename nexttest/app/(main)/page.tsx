"use client";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <div>/ 페이지</div>
      <Link href={"/apple"}>go to /apple</Link>
    </>
  );
};

export default Page;
