import React, { useState } from "react";
import { DarkModeContext } from "./context/DarkModeProvider";

import Tab from "./components/Tab";
import TodoRow from "./components/TodoRow";
import TodoFooter from "./components/TodoFooter";
import ToggleDarkMode from "./components/ToggleDarkMode";

const tabsInfo = [
  { label: "All" },
  { label: "Active" },
  { label: "Completed" },
];

export default function TodoApp() {
  const [currentTab, setCurrentTab] = useState(tabsInfo[0].label);

  const [todos, setTodos] = useState([
    { label: "공부하기", checked: false },
    { label: "밥먹기", checked: false },
    { label: "강의 보기", checked: true },
  ]);
  return (
    <div className="todo-app">
      {/* header */}
      <div className="todo-header">
        <ToggleDarkMode />
        <div className="todo-tabs">
          {tabsInfo.map((tabs) => (
            <Tab
              key={tabs.label}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              label={tabs.label}
            />
          ))}
        </div>
      </div>
      {/* body */}
      <div className="todo-body">
        {todos.map((row) => (
          <TodoRow
            key={row.label}
            label={row.label}
            checked={row.checked}
            currentTab={currentTab}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
      {/* footer */}
      <div style={{ display: "flex", margin: "20px" }}>
        <TodoFooter todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
