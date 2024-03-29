"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  return (
    <>
      <header className="container sm:bg-[#4ade80] md:bg-[#7c3aed] lg:bg-[#9d174d] xl:bg-[#fcd34d] 2xl:bg-slate-800">
        <Button variant={"myButton"}>버튼</Button>
        <Button variant={"destructive"} onClick={() => setCount(count + 1)}>
          카운트 : {count}
        </Button>
      </header>
    </>
  );
}
