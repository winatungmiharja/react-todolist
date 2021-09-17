import React, { useState } from "react";
import DropdownStatic from "../../components/DropdownStatic/DropdownStatic";
import Input from "../../components/Input/Input";
import { useDispatchType } from "../../data/Type";
import "./NewType.scss";

const NewType = (params) => {
  const [error, setError] = useState({ status: false, message: "" });
  const [type, setType] = useState("");

  const dispatch = useDispatchType();

  const addType = () => {
    dispatch({ type: "ADD", data: type });
    setType("");
    setError({ status: false, message: "" });
  };

  const checkInput = () => {
    if (type.length > 0) {
      addType();
    } else {
      setError((prevState) => {
        return { status: true, message: "Type is Required" };
      });
    }
  };

  return (
    <>
      <div className="new-type-wrapper">
        <div className="text">
          <h4>Create new category!</h4>
          {error.status ? (
            <p class="error-text">{error.message}</p>
          ) : (
            <p>Add new Category:</p>
          )}
        </div>
        <div className="new-type-wrapper-header">
          <Input
            id="type"
            label="Category"
            value={type}
            setChange={(value) => setType(value)}
          />
          <DropdownStatic />
        </div>
        <button
          onClick={checkInput}
          className={`${type.length > 0 && "bg-purple"}`}
        >
          Add Category
        </button>
      </div>
    </>
  );
};

export default NewType;
