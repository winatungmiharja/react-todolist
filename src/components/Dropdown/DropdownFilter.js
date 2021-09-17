import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "react-feather";
import "./Dropdown.css";

const Dropdown = ({ value, setChange, filterItem }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!isOpen);

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {value}
        <i className="dropdown-icon ">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </i>
        <div className={`dropdown-body ${isOpen && "open"}`}>
          {filterItem.map((item, i) => (
            <div
              className={`dropdown-item ${item === value && "yellow"}`}
              onClick={(e) => setChange(item)}
              key={i}
            >
              <span
                className={`dropdown-item-dot ${i === value && "selected"}`}
              >
                •{" "}
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
