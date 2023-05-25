"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import TodoListElem from "@/components/list/TodoListElem";

const Home = () => {
  const [inputText, setInputText] = useState<string>("");
  const [todoList, setTodoList] = useState<
    { id: number; title: string }[] | null
  >(null);
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/todolist");
      const data = await res.json();
      console.log(data);
      setTodoList(data);
    })();
  }, []);
  const onChangeInputText = (e: {
    currentTarget: { value: React.SetStateAction<string> };
  }) => {
    setInputText(e.currentTarget.value);
  };
  const onSubmitInputText = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const res = await fetch("/api/todolist", {
      method: "POST",
      body: JSON.stringify({ message: inputText }),
    });
    const data = await res.json();
    console.log(data);
    setTodoList([...todoList, { id: data.id, title: inputText }]);
    setInputText("");
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
        {todoList === null ? (
          <div>로딩중</div>
        ) : (
          todoList.map((v: { id: number; title: string }) => (
            <TodoListElem key={v.id} fk={v.id} text={v.title} />
          ))
        )}
      </ul>
    </>
  );
};

export default Home;
