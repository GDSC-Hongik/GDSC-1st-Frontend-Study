import { useState, useCallback, useEffect } from "react";

const useTodos = (initialValue, TODOS_KEY) => {
  const [todos, setTodos] = useState(initialValue);

  useEffect(() => {
    saveTodos();
    setTodos(loadTodos());
  }, [todos]);

  const saveTodos = useCallback(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos, TODOS_KEY]);

  const loadTodos = useCallback(() => {
    const savedTodos = localStorage.getItem(TODOS_KEY);
    if (savedTodos !== null) {
      const parsedTodos = JSON.parse(savedTodos);
      return parsedTodos;
    }
    else return [];
  }, [TODOS_KEY]);

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