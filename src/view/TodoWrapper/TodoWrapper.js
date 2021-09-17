import React, { useState } from "react";
import { Card } from "../../components/Card/Card";
import { useTodo, useDispatchTodo } from "../../data/Todo";
import EmptyTodo from "../Status/EmptyTodo";
import TodoCard from "../TodoCard/TodoCard";
import "./TodoWrapper.scss";

const TodoWrapper = ({ data, status, title }) => {
  return (
    <div className="todo-wrapper">
      <p class="todo-wrapper-title">{title}👌</p>
      <div className="todo-list-wrapper-1">
        <div className="todo-list">
          {data.length > 0 ? (
            data.map((value, i) => <TodoCard item={value} key={i} />)
          ) : (
            <EmptyTodo />
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoWrapper;
