import { useState, useCallback, useEffect } from "react";

const useTodos = (initialValue, key) => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem(key)) || initialValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todos));
  }, [key, todos]);

  const onAdd = useCallback(
    text => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        done: false
      }
    ]);
  }, [todos]);

  const onDel = useCallback(
    id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, [todos]);

  const onToggle = useCallback(
    id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo));
  }, [todos]);

  return [todos, onAdd, onDel, onToggle];
}

export default useTodos;