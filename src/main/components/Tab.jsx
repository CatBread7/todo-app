import React from "react";

export default function Tab({ label, style, currentTab, setCurrentTab }) {
  const handleOnTabClick = () => {
    setCurrentTab(label);
  };
  const onSelectedStyle =
    currentTab === label
      ? {
          fontWeight: "bold",
          textDecoration: "underline",
          textDecorationColor: "white",
          textUnderlineOffset: "5px",
        }
      : {};

  return (
    <div
      onClick={handleOnTabClick}
      className="todo-tab"
      style={{
        ...onSelectedStyle,
        ...{ style },
      }}
    >
      {label}
    </div>
  );
}
