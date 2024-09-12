"use client";
import React, { useState } from "react";

export default function C() {
  const [name, setName] = useState("C");
  return <div>여기는 {name}입니다</div>;
}
