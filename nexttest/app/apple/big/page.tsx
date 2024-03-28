"use client";
import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div>/apple/big 페이지</div>
      <Link href={"/apple"}>go to /apple</Link>
    </>
  );
};

export default Page;
