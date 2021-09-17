import DropdownFilter from "../../components/Dropdown/DropdownFilter";
import "./Header.css";

const Header = ({ filter, setFilter, filterItem }) => {
  return (
    <div className="header">
      <h2>To do List</h2>
      <div className="filter">
        <p>Filter by Category :</p>

        <DropdownFilter
          value={filter}
          setChange={setFilter}
          filterItem={filterItem}
        />
      </div>
    </div>
  );
};

export default Header;
