"use client";
import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div>/apple 페이지</div>
      <Link href={"/apple/big"}>go to /apple/big</Link>
      <Link href={"/"}>go to /</Link>
    </>
  );
};

export default Page;
