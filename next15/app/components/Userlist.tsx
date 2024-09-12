"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { type Userdata } from "../page";

export default function Userlist({ data }: { data: Userdata[] }) {
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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={(e) => onSubmitEmail(e)}>
        <input
          type="email"
          className="border border-[#000]"
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-[#B5B5B5]">추가</button>
      </form>
      {Array.isArray(data) &&
        data.map((v) => {
          return (
            <div
              key={v.id}
              onClick={() => router.push(`/edit/${v.id}`)}
              className="my-[10px] hover:cursor-pointer border hover:bg-[#B5B5B5]"
            >
              <p>이름 : {v.name}</p>
              <p>이메일 : {v.email}</p>
              <p>프로필 : {v.profile?.bio ?? "X"}</p>
            </div>
          );
        })}
    </>
  );
}
