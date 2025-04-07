import React, { useEffect, useState } from "react";

import Tab from "./components/Tab";
import TodoRow from "./components/TodoRow";
import TodoFooter from "./components/TodoFooter";
import ToggleDarkMode from "./components/ToggleDarkMode";

const tabsInfo = [
  { label: "All" },
  { label: "Active" },
  { label: "Completed" },
];
const defaultTodos = [
  { key: "u1", label: "공부하기", checked: false },
  { key: "u2", label: "밥먹기", checked: false },
  { key: "u3", label: "강의 보기", checked: true },
];

export default function TodoApp() {
  const [currentTab, setCurrentTab] = useState(tabsInfo[0].label);

  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : defaultTodos;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
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
        {todos.map((todo) => (
          <TodoRow
            key={todo.key}
            label={todo.label}
            checked={todo.checked}
            currentTab={currentTab}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
      {/* footer */}
      <div className="todo-footer">
        <TodoFooter todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
