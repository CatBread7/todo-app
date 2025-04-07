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
    setTodos([...todos, { label: todoText, checked: false }]);
    setTodoText("");
  };

  return (
    <>
      <input
        type="text"
        value={todoText}
        placeholder="Add Todo"
        onChange={handleChange}
        onKeyUp={handleEnter}
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          backgroundColor: "white",
          width: "100%",
          color: "black",
        }}
      />
      <button
        onClick={handleAdd}
        style={{ backgroundColor: "darkorange", width: "6rem" }}
      >
        Add
      </button>
    </>
  );
}
