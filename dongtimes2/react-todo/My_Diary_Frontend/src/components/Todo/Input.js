import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import useInput from '../../hooks/useInput';
import dateParamGenerator from '../../utils/dateParamGenerator';

const Input = ({ setTodoList, date }) => {
  const [title, setTitle, titleReset] = useInput('');
  const [content, setContent, contentReset] = useInput('');

  const handleEnterKeyDown = (event, date) => {
    if (event.keyCode === 13) {
      handleCreateTodo(date.year, date.month, date.date);
    }
  };

  const handleCreateTodo = (date) => {
    if (title.length) {
      const newTodoElement = {
        id: uuidv4(),
        createdAt: dateParamGenerator(date.year, date.month, date.date),
        title,
        content,
        isChecked: false,
        isDisabled: false,
      };

      titleReset();
      contentReset();

      setTodoList((prev) => {
        return [...prev, newTodoElement];
      });
    } else {
      window.alert('메모를 입력하세요');
    }
  };

  return (
    <InputBox>
      <input
        onKeyDown={(event) => handleEnterKeyDown(event, date)}
        placeholder="이곳에 제목을 입력 (최대 30자)"
        maxLength="30"
        onChange={setTitle}
        value={title}
      />
      <textarea
        value={content}
        onChange={setContent}
        placeholder="이곳에 설명을 입력"
      />

      <button type="button" onClick={() => handleCreateTodo(date)}>
        확인
      </button>
    </InputBox>
  );
};

Input.propTypes = {
  setTodoList: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
};

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(224, 223, 220, 25%);
  border-radius: 20px;

  & > input {
    width: 90%;
    border: 0;
    border-radius: 20px;
    padding: 10px;
    font-size: 20px;
    margin: 10px 0;
    background-color: rgba(220, 220, 220, 80%);
  }

  & > textarea {
    width: 90%;
    height: 150px;
    border: 0;
    border-radius: 20px;
    padding: 10px;
    resize: none;
    font-size: 20px;
    margin-bottom: 10px;
    background-color: rgba(220, 220, 220, 80%);
  }

  & > button {
    width: 93%;
    border: 0;
    border-radius: 20px;
    padding: 10px 0;
    margin-bottom: 10px;
    font-size: 20px;
    background-color: rgba(255, 255, 255, 70%);
    transition-duration: 0.3s;
  }

  & > button:hover {
    background-color: gray;
    color: white;
  }
`;

export default Input;
