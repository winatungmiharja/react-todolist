import React, { useState } from "react";
import { Save } from "react-feather";
import TitleInput from "../../components/Input/TitleInput";
import DescriptionInput from "../../components/InputArea/DescriptionInput";
import { useDispatchTodo } from "../../data/Todo";
import "./TodoCard.scss";

const EditedTodoCard = ({ item, setIsEdited, status }) => {
  const dispatch = useDispatchTodo();
  const editItem = (item) => {
    dispatch({ type: "UPDATE DATA", data: { item } });
    setIsEdited(false);
  };
  const [task, setTask] = useState({
    id: item.id,
    status: item.status,
    type: item.type,
    title: item.title,
    description: item.description,
  });

  const setChange = (option, value) => {
    setTask((prevState) => {
      return { ...prevState, [option]: value };
    });
  };

  return (
    <div className="todo-card-wrapper">
      <div className="todo-card-check">
        <h4>
          <TitleInput
            value={task.title}
            id="edit-title"
            setChange={(value) => setChange("title", value)}
          />
        </h4>
      </div>
      <DescriptionInput
        value={task.description}
        id="edit-desc"
        setChange={(value) => setChange("description", value)}
      />
      <p></p>
      <div class="todo-card-wrapper-button">
        <button disabled="disabled">{item.type}</button>
        <div className="button-group">
          <i onClick={() => editItem(task)}>
            <Save />
          </i>
        </div>
      </div>
    </div>
  );
};

export default EditedTodoCard;
