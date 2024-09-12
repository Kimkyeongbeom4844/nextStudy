"use client";
import React, { useState } from "react";

export default function Page() {
  const [file, setFile] = useState<string>("");

  const uploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return console.log("파일없음");
    const formData = new FormData();
    for (let i of e.target.files) {
      formData.append("file", i);
      console.log(i);
    }
    for (let i of formData) {
      console.log(i);
    }
    try {
      const res = await (
        await fetch("/api/upload", {
          method: "POST",
          body: formData,
        })
      ).json();
      console.log(res);
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <>
      <input type="file" multiple onChange={(e) => uploadFile(e)} />
    </>
  );
}
