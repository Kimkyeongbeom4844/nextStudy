"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function InsertUser({
  data,
}: {
  data: {
    id: number;
    email: string;
    name: string | null;
  }[];
}) {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const onClickButton = async () => {
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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <input
        type="text"
        className="border border-[#000]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="border border-[#000] bg-[red]" onClick={onClickButton}>
        추가
      </button>
    </>
  );
}
