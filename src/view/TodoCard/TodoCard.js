import React, { useState } from "react";
import ContentTodoCard from "./ContentTodoCard";
import { useDispatchTodo } from "../../data/Todo";
import "./TodoCard.scss";
import EditedTodoCard from "./EditedTodoCard";

const TodoCard = ({ item }) => {
  const [isChecked, setIsChecked] = useState(
    item.status === "completed" ? 1 : 0
  );
  const [isEdited, setIsEdited] = useState(0);
  const dispatch = useDispatchTodo();

  const addToCompleted = (item) => {
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
      {isEdited ? (
        <EditedTodoCard item={item} setIsEdited={setIsEdited} />
      ) : (
        <ContentTodoCard
          item={item}
          isChecked={isChecked}
          addToCompleted={addToCompleted}
          deleteFromBoard={deleteFromBoard}
          setIsEdited={setIsEdited}
        />
      )}
    </div>
  );
};

export default TodoCard;
