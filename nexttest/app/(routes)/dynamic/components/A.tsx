"use client";
import React, { useState } from "react";

export default function A() {
  const [name, setName] = useState("A");
  return (
    <>
      {Array.from({ length: 100 }, (_, i) => i).map((v) => (
        <div key={v}>
          여기는 {name}과 {v}
          입니다
        </div>
      ))}
    </>
  );
}
