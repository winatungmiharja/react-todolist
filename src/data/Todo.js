import React, { useReducer, useContext, createContext } from "react";

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
let id = 0;

const addTodo = (state, info) => {
  const newData = {
    id: id,
    title: info.title,
    description: info.description,
    status: info.status,
    type: info.type,
  };
  id++;
  return { ...state, todo: [...state.todo, newData] };
};

const updateItem = (state, info) => {
  const newData = {
    ...info.item,
    status: info.status,
  };
  let deleteStatus = state[info.item.status].filter(
    (item) => item.id !== info.item.id
  );
  let newStatus = [newData, ...state[info.status]];
  return {
    ...state,
    [info.status]: [...newStatus],
    [info.item.status]: [...deleteStatus],
  };
};

const deleteItem = (state, info) => {
  let deleteStatus = state[info.item.status].filter(
    (item) => item.id !== info.item.id
  );
  return {
    ...state,
    [info.item.status]: [...deleteStatus],
  };
};

const intialState = {
  todo: [],
  completed: [],
};

// action.data {
//   status : " ",
//   item : {
//     ...
//   }
// }

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD TODO":
      let text = addTodo(state, action.data);
      return text;
    case "UPDATE STATUS":
      let text1 = updateItem(state, action.data);
      return text1;
    case "DELETE TODO":
      let text2 = deleteItem(state, action.data);
      return text2;
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <TodoDispatchContext.Provider value={dispatch}>
      <TodoStateContext.Provider value={state}>
        {children}
      </TodoStateContext.Provider>
    </TodoDispatchContext.Provider>
  );
};

export const useTodo = () => useContext(TodoStateContext);
export const useDispatchTodo = () => useContext(TodoDispatchContext);
