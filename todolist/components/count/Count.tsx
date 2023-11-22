"use client";
import React, { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((currentState) => currentState + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);
  return <div>{count}</div>;
};

export default Count;
