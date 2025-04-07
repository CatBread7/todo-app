import React, { useContext } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { DarkModeContext } from "../context/DarkModeProvider";

export default function ToggleDarkMode() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div
      style={{
        marginLeft: "1rem",
        cursor: "pointer",
        transition: "transform 0.3s ease",
      }}
      className={darkMode ? "rotate-icon" : ""}
      onClick={toggleDarkMode}
    >
      {darkMode ? <IoSunny size="1.2rem" /> : <IoMoon size="1.2rem" />}
    </div>
  );
}
