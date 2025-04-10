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

  /** 잘못된 사용: useStates는 rerender 마다 아래 초기값이 아닌 업데이트값을 사용하도록 설계되어 있으나,
   * rerender 시의 useState 선언때문에 아래의 함수호출 ( 혹은 Network 통신일 수도 있음!! )이 계속 사용된다
   * 이걸 방지해 주기 위해서 함수를 호출한 값( func() )을 전달하는 것이 아니라,
   *    한 단계 콜백함수( () => func() )로 감싸줘야 한다.
   *
   *  function() { return returnTodosFromLocalStorage(); } 형식으로 설정해두면
   *  초기값이 필요하지 않다면 내부함수를 호출하지 않는다.
   */
  // const [todos, setTodos] = useState(readTodosFromLocalStorage());
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

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

function readTodosFromLocalStorage() {
  const storedTodos = localStorage.getItem("todos");
  if (!storedTodos) return defaultTodos;
  const parsedTodos = JSON.parse(storedTodos);
  // parse해야 Array.length 로 사용됨.
  return parsedTodos.length > 0 ? parsedTodos : defaultTodos;
}
