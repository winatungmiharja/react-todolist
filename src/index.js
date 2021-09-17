import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TodoProvider } from "./data/Todo";
import { TypeProvider } from "./data/Type";

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <TypeProvider>
        <App />
      </TypeProvider>
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
