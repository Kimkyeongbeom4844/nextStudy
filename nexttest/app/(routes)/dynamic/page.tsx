"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Client Components:
const ComponentA = dynamic(() => import("./components/A"), {
  loading: () => <p>A 로딩중</p>,
});
// import ComponentA from "./components/A";
const ComponentB = dynamic(() => import("./components/B"), {
  loading: () => <p>B 로딩중</p>,
});
const ComponentC = dynamic(() => import("./components/C"), {
  ssr: false,
  loading: () => <p>C 로딩중</p>,
});

export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {/* Load immediately, but in a separate client bundle */}
      <ComponentA />

      {/* Load on demand, only when/if the condition is met */}
      {showMore && <ComponentB />}
      <button onClick={() => setShowMore(!showMore)}>Toggle</button>

      {/* Load only on the client side */}
      <ComponentC />
    </div>
  );
}
