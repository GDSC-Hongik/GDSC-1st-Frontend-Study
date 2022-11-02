import { useState } from "react";

const useTodos = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  const onAdd = (text) => {
    setValues([
      ...values,
      {
        id: Date.now(),
        text,
        done: false
      }
    ]);
  }
  const onDel = (id) => {
    setValues(values.filter(value => value.id !== id));
  }
  const onToggle = (id) => {
    setValues(values.map(value => value.id === id ? {...value, done: !value.done} : value));
  }
  return [values, onAdd, onDel, onToggle];
}

export default useTodos;