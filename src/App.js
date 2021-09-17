import { useState } from "react";
import CompletedTodoWrapper from "./view/TodoWrapper/CompletedTodoWrapper";
import TodoWrapper from "./view/TodoWrapper/TodoWrapper";
import Background from "./view/Background/Background";
import Sidebar from "./view/Sidebar/Sidebar";
import Header from "./view/Header/Header";
import { useType } from "./data/Type";
import { useTodo } from "./data/Todo";
import status from "./data/Status";

import "./assets/css/App.css";
const App = () => {
  const data = useTodo();
  const todoTypes = ["See All", ...useType()];
  const [filter, setFilter] = useState(todoTypes[0]);
  const changeFilter = (item) => {
    setFilter(item);
  };

  const filterData = (data, option) => {
    if (option === "See All") {
      return data;
    } else {
      return data.filter((item) => item.type === option);
    }
  };

  const todoData = filterData(data["todo"], filter);
  const completedData = filterData(data["completed"], filter);

  return (
    <div className="wrapper">
      <div>
        <Sidebar />
      </div>
      <div>
        <Header
          filter={filter}
          setFilter={changeFilter}
          filterItem={todoTypes}
        />
        <div className="todo-list-wrapper">
          {status.map((item, i) => {
            if (item.content === "completed") {
              return (
                <CompletedTodoWrapper
                  status={item.content}
                  title={item.title}
                  data={completedData}
                  key={i}
                />
              );
            } else {
              return (
                <TodoWrapper
                  data={todoData}
                  status={item.content}
                  title={item.title}
                  key={i}
                />
              );
            }
          })}
        </div>
      </div>
      <Background />
    </div>
  );
};

export default App;
