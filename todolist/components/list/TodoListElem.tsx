import React from "react";

const TodoListElem = ({
  text,
  onClickDeleteTodoListButton,
}: {
  text: string;
  onClickDeleteTodoListButton(e: any): void;
}) => {
  return (
    <li>
      <a>{text}</a>
      <button onClick={onClickDeleteTodoListButton}>삭제</button>
    </li>
  );
};

export default TodoListElem;
