import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { DarkModeContext } from "../context/DarkModeProvider";

export default function TodoRow({ currentTab, todo, todos, setTodos }) {
  const { key, label, checked } = todo;
  const handleClick = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === key) {
          return { ...todo, checked: !checked };
        } else {
          return todo;
        }
      })
    );
  };
  const handleDelete = () => {
    console.log(todos, todo);
    console.log(todos.filter((todo) => todo.key !== key));
    setTodos(todos.filter((todo) => todo.key !== key));
  };

  const hiddenStyle =
    (currentTab === "Active" && checked) ||
    (currentTab === "Completed" && !checked)
      ? { display: "none" }
      : {};

  const additionalLabelStyle = checked
    ? { textDecoration: "line-through" }
    : {};
  return (
    <div className={`todo-row`} style={hiddenStyle}>
      <input
        id={`${key}`}
        type="checkbox"
        style={{}}
        checked={checked ?? false}
        onChange={handleClick}
      />
      <label
        htmlFor={`${key}`}
        className="todoText"
        style={{ marginLeft: "0.5rem", ...additionalLabelStyle }}
      >
        {label}
      </label>
      <div
        className="todoDeleteIcon"
        onClick={handleDelete}
        style={{
          marginLeft: "auto",
          marginRight: "10px",
          borderRadius: "10px",
          width: "1.5rem",
          height: "1.5rem",
          backgroundColor: "gray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FaTrashAlt size="0.8rem" />
      </div>
    </div>
  );
}
