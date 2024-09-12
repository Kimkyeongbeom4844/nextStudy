"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function Userinfo({
  userData,
}: {
  userData: {
    profile: {
      id: number;
      bio: string | null;
    } | null;
  } & {
    id: number;
    email: string;
    name: string | null;
  };
}) {
  const [name, setName] = useState(userData.name ?? "");
  const [email, setEmail] = useState(userData.email);
  const [profile, setProfile] = useState(userData.profile?.bio ?? "");

  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await (
        await fetch("/api/user", {
          method: "PUT",
          body: JSON.stringify({
            id,
            name,
            email,
            profile,
          }),
        })
      ).json();
      // console.log(data);
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={(e) => onSubmitForm(e)}>
      <div className="flex gap-x-[5px]">
        <p>이름 : </p>
        <input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex gap-x-[5px]">
        <p>이메일 : </p>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex gap-x-[5px]">
        <p>프로필 : </p>
        <input
          type="text"
          value={profile}
          required
          onChange={(e) => setProfile(e.target.value)}
        />
      </div>
      <button>수정</button>
    </form>
  );
}
