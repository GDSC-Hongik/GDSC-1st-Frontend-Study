import React, { createContext, useContext, useEffect, useReducer } from 'react'

const TODOS_KEY = "todos";
const initialTodos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];

const todoReducer = (state, action) => {
  switch(action.type) {
    case 'ADD':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? {...todo, done: !todo.done} : todo
      );
    case 'DELETE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  
  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if(!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if(!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}