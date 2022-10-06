import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const InputTodo = ({ onInputChanged }) => {
  const [inputValue, setInputValue] = useState('');
  const id = useRef(0);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    onInputChanged((prev) => [
      ...prev,
      { id: id.current++, value: inputValue, done: false },
    ]);
    setInputValue('');
  };

  return (
    <>
      <input
        placeholder="입력하세요"
        onChange={handleInput}
        value={inputValue}
      ></input>
      <button type="button" onClick={handleButtonClick}>
        입력
      </button>
    </>
  );
};

InputTodo.propTypes = {
  onInputChanged: PropTypes.func.isRequired,
};

export default InputTodo;
