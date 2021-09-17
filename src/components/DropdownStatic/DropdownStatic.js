import React, { useState } from "react";
import { useType } from "../../data/Type";
import { ChevronUp, ChevronDown } from "react-feather";
import "./DropdownStatic.css";

const DropdownStatic = () => {
  const todoTypes = useType();
  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!isOpen);

  return (
    <div className="dropdown-static">
      <div className="dropdown-static-header" onClick={toggleDropdown}>
        {"All Type"}
        <i className="dropdown-static-icon ">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </i>
        <div className={`dropdown-static-body ${isOpen && "open"}`}>
          {todoTypes.map((item, i) => (
            <div className="dropdown-static-item" key={i}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownStatic;
