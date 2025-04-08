import React from "react";

export default function Tab({ label, currentTab, setCurrentTab }) {
  const handleOnTabClick = () => {
    setCurrentTab(label);
  };

  return (
    <div
      onClick={handleOnTabClick}
      className={`todo-tab ${currentTab === label ? "selected" : ""}`}
    >
      {label}
    </div>
  );
}
