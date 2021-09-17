import { Trash2, Edit } from "react-feather";

const ContentTodoCard = ({
  item,
  isChecked,
  addToCompleted,
  deleteFromBoard,
  setIsEdited,
}) => {
  return (
    <>
      <div className="todo-card-wrapper">
        <div className="todo-card-check">
          <h4>{item.title}</h4>
          <label class="check-container">
            {isChecked ? (
              <input type="checkbox" checked />
            ) : (
              <input type="checkbox" onClick={() => addToCompleted(item)} />
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
          <div className="button-group">
            {item.status !== "completed" && (
              <i onClick={() => setIsEdited(true)}>
                <Edit />
              </i>
            )}

            <i onClick={() => deleteFromBoard(item)}>
              <Trash2 />
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentTodoCard;
