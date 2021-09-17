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
  return { ...state, todo: [newData, ...state.todo] };
};

const updateStatus = (state, info) => {
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

const updateData = (state, info) => {
  console.log(info.item);
  const newState = state[info.item.status].map((key) => {
    if (key.id === info.item.id) {
      return { ...info.item };
    } else {
      return { ...key };
    }
  });
  return {
    ...state,
    [info.item.status]: [...newState],
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

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD TODO":
      return addTodo(state, action.data);
    case "UPDATE STATUS":
      return updateStatus(state, action.data);
    case "UPDATE DATA":
      return updateData(state, action.data);
    case "DELETE TODO":
      return deleteItem(state, action.data);
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
