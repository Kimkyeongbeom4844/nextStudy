"use client";
import React, { useEffect } from "react";
import type { AppDispatch, RootState } from "@/stores/store";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "@/stores/slices/counter";

const Counter = (): JSX.Element => {
  const counterSlice = useSelector((state: RootState) => state.counter);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(increment());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [counterSlice.value]);

  return (
    <>
      <h3>{counterSlice.value}</h3>
    </>
  );
};

export default Counter;
