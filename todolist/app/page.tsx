"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import TodoListElem from "@/components/list/TodoListElem";

const Home = () => {
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/todolist");
      console.log(await res.json());
    })();
  }, []);
  const [inputText, setInputText] = useState("");
  const onChangeInputText = (e: any) => {
    setInputText(e.currentTarget.value);
  };
  const onSubmitInputText = (e: any) => {
    e.preventDefault();
    console.log(inputText);
  };
  const onClickDeleteTodoListButton = (e: any) => {
    alert(111);
  };
  return (
    <>
      <form onSubmit={onSubmitInputText} className={styles.input_text_wrap}>
        <input
          className={styles.input_text}
          type={"text"}
          value={inputText}
          onChange={onChangeInputText}
          required
        />
        <button>추가</button>
      </form>
      <ul className={styles.todolist_wrap}>
        <TodoListElem
          text="일어나기"
          onClickDeleteTodoListButton={onClickDeleteTodoListButton}
        />
        <TodoListElem
          text="일어나기"
          onClickDeleteTodoListButton={onClickDeleteTodoListButton}
        />
        <TodoListElem
          text="일어나기"
          onClickDeleteTodoListButton={onClickDeleteTodoListButton}
        />
        <TodoListElem
          text="일어나기"
          onClickDeleteTodoListButton={onClickDeleteTodoListButton}
        />
      </ul>
    </>
  );
};

export default Home;
