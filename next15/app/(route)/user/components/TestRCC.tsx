"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const onSubmitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await (
        await fetch("/api/user/", {
          method: "POST",
          body: JSON.stringify({
            email,
          }),
        })
      ).json();
      console.log(data);
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>/user 페이지</h2>
      <form className="flex" onSubmit={(e) => onSubmitEmail(e)}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-[#000000]"
          required
        />
        <button className="bg-[#B5B5B5]">추가</button>
      </form>
      {children}
      <Link href={"/"}>/ 로</Link>
    </>
  );
}
