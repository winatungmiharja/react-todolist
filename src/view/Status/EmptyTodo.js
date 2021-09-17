import React, { useState } from "react";

const EmptyTodo = () => {
  return (
    <div className={`progress todo-card`}>
      <div className="todo-card-wrapper">
        <div className="todo-card-check">
          <h4>Your Todo is still empty!😝</h4>
        </div>
        <p className="item-description">
          start adding your task in the sidebar
        </p>
      </div>
    </div>
  );
};

export default EmptyTodo;
