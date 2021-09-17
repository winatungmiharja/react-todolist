import React from "react";
import "./InputArea.scss";

const InputArea = ({ id, type, label, value, setChange }) => {
  return (
    <>
      <div className="input-area">
        <textarea
          id={id}
          type={type}
          value={value}
          onChange={(e) => setChange(e.target.value)}
          placeholder={label}
        />
      </div>
    </>
  );
};

export default InputArea;
