import React, { useContext } from "react";
import { DarkModeContext } from "./context/DarkModeProvider";

export default function TodoApp() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div>
      <p>{darkMode.toString()}</p>
      <button onClick={toggleDarkMode}>버튼</button>
    </div>
  );
}
