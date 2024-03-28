"use client";
import React from "react";
import { formAction } from "./action";

const Page = () => {
  return (
    <>
      <form
        action={async (formData: FormData) => {
          try {
            formAction(formData);
          } catch (error: any) {
            console.log(error.message);
          }
        }}
      >
        <h2>이름을 입력하세요</h2>
        <input name="name" />
        <button>제출</button>
      </form>
    </>
  );
};

export default Page;
