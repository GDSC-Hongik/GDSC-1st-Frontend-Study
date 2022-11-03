import { useState, useCallback } from "react";

const useTodos = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  const onAdd = useCallback(
    text => {
    setValues([
      ...values,
      {
        id: Date.now(),
        text,
        done: false
      }
    ]);
  }, [values]);

  const onDel = useCallback(
    id => {
    setValues(values.filter(value => value.id !== id));
  }, [values]);

  const onToggle = useCallback(
    id => {
    setValues(values.map(value => value.id === id ? {...value, done: !value.done} : value));
  }, [values]);
  
  return [values, onAdd, onDel, onToggle];
}

export default useTodos;