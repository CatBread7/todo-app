import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { DarkModeContext } from "../context/DarkModeProvider";

export default function TodoRow({ todo, todos, setTodos }) {
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
    setTodos(todos.filter((todo) => todo.key !== key));
  };

  const additionalLabelStyle = checked
    ? { textDecoration: "line-through" }
    : {};
  return (
    <div className={`todo-row`}>
      <input
        id={`${key}`}
        className="todo-checkbox"
        type="checkbox"
        checked={checked ?? false}
        onChange={handleClick}
      />
      <label
        htmlFor={`${key}`}
        className="todo-text"
        style={additionalLabelStyle}
      >
        {label}
      </label>
      <div className="todo-delete-icon" onClick={handleDelete}>
        <FaTrashAlt size="0.8rem" />
      </div>
    </div>
  );
}
