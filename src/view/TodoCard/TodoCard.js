import React, { useState } from "react";
import { Card } from "../../components/Card/Card";
import { Trash2 } from "react-feather";
import { useDispatchTodo } from "../../data/Todo";
import "./TodoCard.scss";

const TodoCard = ({ item }) => {
  const [isChecked, setIsChecked] = useState(
    item.status === "completed" ? 1 : 0
  );
  const dispatch = useDispatchTodo();

  const addToBoard = (item) => {
    setIsChecked(true);
    setTimeout(() => {
      dispatch({ type: "UPDATE STATUS", data: { item, status: "completed" } });
      setIsChecked(false);
    }, 200);
  };

  const deleteFromBoard = (item) => {
    dispatch({ type: "DELETE TODO", data: { item } });
  };

  return (
    <div
      className={` ${
        item.status === "completed" ? "done" : "progress"
      } todo-card`}
    >
      <div className="todo-card-wrapper">
        <div className="todo-card-check">
          <h4>{item.title}</h4>
          <label class="check-container">
            {isChecked ? (
              <input type="checkbox" checked />
            ) : (
              <input type="checkbox" onClick={() => addToBoard(item)} />
            )}
            <span class="checkmark"></span>
          </label>
        </div>
        {item.description && (
          <p className="item-description">{item.description}</p>
        )}
        <p></p>
        <div class="todo-card-wrapper-button">
          <button disabled="disabled">{item.type}</button>
          <i onClick={() => deleteFromBoard(item)}>
            <Trash2 />
          </i>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
