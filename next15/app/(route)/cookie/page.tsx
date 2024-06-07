"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const onClickGetCookieButton = () => {
    console.log(document.cookie);
  };

  const onClickRootButton = () => {
    router.push("/");
  };

  return (
    <>
      <h1>/cookie 페이지</h1>
      <button onClick={onClickGetCookieButton}>쿠키얻기</button>
      <button onClick={onClickRootButton}>/ 페이지로</button>
    </>
  );
}
