import React from "react";
import "./Input.scss";

const Input = ({ id, type, label, value, setChange }) => {
  const classes = value ? "input input-with-value" : "input";
  return (
    <>
      <div className={classes}>
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => setChange(e.target.value)}
        />
        <label htmlFor={id} className="Input__label">
          {label}
        </label>
      </div>
    </>
  );
};

export default Input;
