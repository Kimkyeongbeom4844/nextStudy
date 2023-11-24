"use client";
import React from "react";

const TodoListElem = ({ fk, text }: { fk: number; text: string }) => {
  const onClickDeleteTodoListButton = async () => {
    // console.log(fk);
    const data = await fetch(`/api/todolist/${fk}`, {
      method: "DELETE",
    });
    const res = await data.json();
    console.log(res);
  };
  return (
    <li>
      <a>{text}</a>
      <button onClick={onClickDeleteTodoListButton}>삭제</button>
    </li>
  );
};

export default TodoListElem;
