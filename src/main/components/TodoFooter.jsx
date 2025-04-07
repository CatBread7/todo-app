import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoFooter({ todos, setTodos }) {
  const [todoText, setTodoText] = useState("");

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };
  const handleAdd = () => {
    if (!todoText || todoText.trim().length === 0) return;
    setTodos([...todos, { key: uuidv4(), label: todoText, checked: false }]);
    setTodoText("");
  };

  return (
    <>
      <input
        className="todo-input"
        type="text"
        value={todoText}
        placeholder="Add Todo"
        onChange={handleChange}
        onKeyUp={handleEnter}
      />
      <button className="todo-input-button" onClick={handleAdd}>
        Add
      </button>
    </>
  );
}
