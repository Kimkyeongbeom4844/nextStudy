"use client";
import React, { FormEvent, useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await (
        await fetch("/api/login", {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
          }),
        })
      ).json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      const data = await (
        await fetch("/api/login", {
          method: "GET",
        })
      ).json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <label
          style={{
            display: "flex",
          }}
        >
          <h3>이메일</h3>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label
          style={{
            display: "flex",
          }}
        >
          <h3>비밀번호</h3>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button>로그인</button>
      </form>
      <button type="button" onClick={logout}>
        로그아웃
      </button>
    </>
  );
};

export default Page;
