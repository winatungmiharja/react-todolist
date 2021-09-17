import React, { useState } from "react";
import { Card } from "../../components/Card/Card";
import Dropdown from "../../components/Dropdown/Dropdown";
import Input from "../../components/Input/Input";
import InputArea from "../../components/InputArea/InputArea";
import { useDispatchTodo } from "../../data/Todo";
import { useType } from "../../data/Type";
import "./NewTodoCard.scss";

const NewTodoCard = (params) => {
  const todoTypes = useType();
  const dispatch = useDispatchTodo();

  const [error, setError] = useState({ status: false, message: "" });
  const [task, setTask] = useState({
    type: todoTypes[0],
    title: "",
    description: "",
  });

  let style = task.title.length > 0 ? { backgroundColor: "#eacbfb" } : {};

  const addToList = () => {
    const todoData = { ...task, status: "todo" };
    setError((prevState) => {
      return { status: false, message: "" };
    });
    dispatch({ type: "ADD TODO", data: todoData });
    setTask({
      type: todoTypes[0],
      title: "",
      description: "",
    });
  };

  const checkInput = () => {
    if (task.title.length > 0) {
      addToList();
    } else {
      setError((prevState) => {
        return { status: true, message: "Title is Required" };
      });
    }
  };

  const setChange = (option, value) => {
    setTask((prevState) => {
      return { ...prevState, [option]: value };
    });
  };

  return (
    <>
      <div className="new-todo-card-wrapper">
        <div>
          <h4>Create new task!😉</h4>
          {error.status && <p class="error-text">{error.message}</p>}
        </div>
        <div className="new-todo-card-wrapper-header">
          <div ClassName="new-title">
            <Input
              id="title"
              label="title"
              value={task.title}
              setChange={(value) => setChange("title", value)}
            />
          </div>
          <Dropdown
            value={task.type}
            setChange={(value) => setChange("type", value)}
          />
        </div>
        <div classname="new-description">
          <p>Description</p>
          <InputArea
            id="description"
            label="write your task's description"
            value={task.description}
            setChange={(value) => setChange("description", value)}
          />
        </div>
        <button onClick={checkInput} style={style}>
          +
        </button>
      </div>
    </>
  );
};

export default NewTodoCard;
