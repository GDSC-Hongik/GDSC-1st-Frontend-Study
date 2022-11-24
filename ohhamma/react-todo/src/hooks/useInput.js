import { useState, useCallback } from "react";
import { useTodoDispatch } from "../components/Todo/TodoContext";

const useInput = (initialValue, onAdd) => {
  const [text, setText] = useState(initialValue);
  const dispatch = useTodoDispatch();

  const onChange = useCallback(
    event => {
    setText(event.target.value);
  }, []);

  const onSubmit = useCallback(
    event => {
    event.preventDefault();
    dispatch({
      type: 'ADD',
      todo: {
        id: Date.now(),
        text,
        done: false
    }});
    setText('');
  }, [dispatch, text]);

  return [text, onChange, onSubmit];
}

export default useInput;