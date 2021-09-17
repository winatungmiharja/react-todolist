import React from "react";
import { useTodo } from "../data/Todo";

const List = () => {
  const todoItem = useTodo();
  return (
    <ul>
      {todoItem.map((item, i) => (
        <li key={i}>{item.type}</li>
      ))}
    </ul>
  );
};

export default List;
