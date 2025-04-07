import React, { useState } from "react";

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
    if (!todoText) return;
    setTodos([...todos, { label: todoText, checked: false }]);
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
