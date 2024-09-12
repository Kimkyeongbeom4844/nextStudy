"use client";
import React, { useState } from "react";

export default function B() {
  const [name, setName] = useState("B");
  return <div>여기는 {name}입니다</div>;
}
