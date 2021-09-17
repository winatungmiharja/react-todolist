import React, { useReducer, useContext, createContext } from "react";

const TypeStateContext = createContext();
const TypeDispatchContext = createContext();

const addItem = (state, data) => {
  return [...state, data];
};

const intialType = ["My Todo"];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return addItem(state, action.data);
    default:
      return state;
  }
};

export const TypeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialType);
  return (
    <TypeDispatchContext.Provider value={dispatch}>
      <TypeStateContext.Provider value={state}>
        {children}
      </TypeStateContext.Provider>
    </TypeDispatchContext.Provider>
  );
};

export const useType = () => useContext(TypeStateContext);
export const useDispatchType = () => useContext(TypeDispatchContext);
