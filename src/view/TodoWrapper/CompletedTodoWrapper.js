import EmptyCompleted from "../Status/EmptyCompleted";
import TodoCard from "../TodoCard/TodoCard";
import "./TodoWrapper.scss";

const CompletedTodoWrapper = ({ data, status, title }) => {
  return (
    <div className="todo-wrapper">
      <p class="todo-wrapper-title">{title}👍</p>
      <div className="todo-list">
        {data.length > 0 ? (
          data.map((value, i) => <TodoCard item={value} key={i} />)
        ) : (
          <EmptyCompleted />
        )}
      </div>
    </div>
  );
};

export default CompletedTodoWrapper;
