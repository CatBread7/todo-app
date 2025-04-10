import React, { useState } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { DarkModeContext, useDarkMode } from "../context/DarkModeProvider";

export default function ToggleDarkMode() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isRotating, setIsRotating] = useState(false);

  const handleToggle = () => {
    toggleDarkMode();
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 500); // 0.5초 후 초기화 (애니메이션 시간과 맞춰주세요)
  };
  return (
    <div
      style={{
        marginLeft: "1rem",
        cursor: "pointer",
        transition: "transform 0.3s ease",
      }}
      className={isRotating ? "rotate-icon" : ""}
      onClick={handleToggle}
    >
      {darkMode ? <IoSunny size="1.2rem" /> : <IoMoon size="1.2rem" />}
    </div>
  );
}
