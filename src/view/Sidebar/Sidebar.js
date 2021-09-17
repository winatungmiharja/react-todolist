import NewTodoCard from "../NewTodoCard/NewTodoCard";
import NewType from "../NewType/NewType";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <NewTodoCard />
      <NewType />
    </div>
  );
};

export default Sidebar;
