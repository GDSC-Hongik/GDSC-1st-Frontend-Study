import { useState, useCallback } from "react";

const useInput = (initialValue, onAdd) => {
  const [text, setText] = useState(initialValue);

  const onChange = useCallback(
    event => {
    setText(event.target.value);
  }, []);

  const onSubmit = useCallback(
    event => {
    event.preventDefault();
    onAdd(text);
    setText('');
  }, [onAdd, text]);

  return [text, onChange, onSubmit];
}

export default useInput;