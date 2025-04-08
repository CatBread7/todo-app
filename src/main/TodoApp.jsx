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

const getFilteredItems = (todos, currentTab) => {
  if (currentTab === "All") {
    return todos;
  } else if (currentTab === "Active") {
    return todos.filter((todo) => todo.checked === false);
  } else if (currentTab === "Completed") {
    return todos.filter((todo) => todo.checked === true);
  } else {
    return [];
  }
};

export default function TodoApp() {
  const [currentTab, setCurrentTab] = useState(tabsInfo[0].label);

  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    if (!storedTodos) return defaultTodos;
    const parsedTodos = JSON.parse(storedTodos);
    // parse해야 Array.length 로 사용됨.
    return parsedTodos.length > 0 ? parsedTodos : defaultTodos;
  });

  const filtered = getFilteredItems(todos, currentTab);

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
        {filtered.map((todo) => (
          <TodoRow
            key={todo.key}
            currentTab={currentTab}
            todo={todo}
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
