import React, { useContext, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { DarkModeContext } from "../context/DarkModeProvider";

export default function TodoRow({
  label,
  selected,
  currentTab,
  todos,
  setTodos,
}) {
  const { darkMode } = useContext(DarkModeContext);
  const [checked, setChecked] = useState(selected);
  const handleClick = () => {
    setChecked((prev) => !prev);
  };
  const handleDelete = () => {
    setTodos(todos.filter((todo) => todo.label !== label));
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
    <div
      className={`todo-row ${darkMode ? "dark-mode" : ""}`}
      style={hiddenStyle}
      onClick={handleClick}
    >
      <input
        id={`rowid_${label}`}
        type="checkbox"
        style={{}}
        checked={checked ?? false}
        onChange={() => {}}
      />
      <label
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
