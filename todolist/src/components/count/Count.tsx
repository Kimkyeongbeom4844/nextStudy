"use client";
import React, { useState, useEffect } from "react";

const Count = ({ data }: { data: any }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((currentState) => currentState + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);
  return (
    <div>
      <p> {count}</p>
      <p>{data}</p>
    </div>
  );
};

export default Count;
