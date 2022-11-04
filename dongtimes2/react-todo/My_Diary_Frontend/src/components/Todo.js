import axios from 'axios';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import useInput from '../hooks/useInput';
import selectedDateState from '../recoil/dateState';
import dateParamGenerator from '../utils/dateParamGenerator';

const Todo = ({ onShowModal, setSelectedTodo }) => {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle, titleReset] = useInput('');
  const [content, setContent, contentReset] = useInput('');

  const selectedDate = useRecoilValue(selectedDateState);

  useEffect(() => {
    const params = dateParamGenerator(
      selectedDate.year,
      selectedDate.month,
      selectedDate.date,
    );

    const loadTodo = async () => {
      const result = await axios.get(
        process.env.REACT_APP_SERVER_URL + '/todo/' + params,
      );

      result.data?.todos
        ? setTodoList([...result.data.todos])
        : setTodoList([]);
    };

    params && loadTodo();
  }, [selectedDate]);

  const handleEnterKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleCreateTodo();
    }
  };

  const handleSavetodo = async (date) => {
    const params = dateParamGenerator(date.year, date.month, date.date);

    if (params) {
      await axios.post(
        process.env.REACT_APP_SERVER_URL + '/todo/' + params,
        todoList,
      );
    }
  };

  const handleCreateTodo = () => {
    if (title.length) {
      const newTodoElement = {
        id: uuidv4(),
        createdAt: `${selectedDate.year}${selectedDate.month}${selectedDate.date}`,
        title,
        content,
        isChecked: false,
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

  const handleDeleteTodo = (index) => {
    setTodoList([...todoList.filter((_, idx) => idx !== index)]);
  };

  const handleShowModal = (data) => {
    onShowModal(true);
    setSelectedTodo(data);
  };

  const handleCheckTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].isChecked = newTodoList[index].isChecked ? false : true;

    setTodoList([...newTodoList]);
  };

  return (
    <>
      <DateInfoBox>
        선택된 날짜: {selectedDate.year}년 {selectedDate.month}월{' '}
        {selectedDate.date}일
      </DateInfoBox>

      <TodoInputBox>
        <input
          onKeyDown={handleEnterKeyDown}
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

        <button type="button" onClick={handleCreateTodo}>
          확인
        </button>
      </TodoInputBox>

      <TodoItemList>
        {todoList.map((todo, index) => (
          <TodoItem key={todo.id}>
            <div className="checkbox-area">
              <input
                type="checkbox"
                onChange={() => handleCheckTodo(index)}
                checked={todo.isChecked}
              />
            </div>

            <ContentBox className="content-area" isChecked={todo.isChecked}>
              {todo.title}
            </ContentBox>

            <div className="button-area">
              <div className="detail-button-area">
                {todo.content && (
                  <button type="button" onClick={() => handleShowModal(todo)}>
                    상세
                  </button>
                )}
              </div>
              <div className="delete-button-area">
                <button type="button" onClick={() => handleDeleteTodo(index)}>
                  삭제
                </button>
              </div>
            </div>
          </TodoItem>
        ))}
        {!todoList.length && <BlankItem>저장된 기록이 없습니다</BlankItem>}
      </TodoItemList>

      <SaveButtonBox>
        <button type="button" onClick={() => handleSavetodo(selectedDate)}>
          저장하기
        </button>
      </SaveButtonBox>
    </>
  );
};

Todo.propTypes = {
  onShowModal: PropTypes.func.isRequired,
  setSelectedTodo: PropTypes.func.isRequired,
};

const BlankItem = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const SaveButtonBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgray;
  border-radius: 20px;
  background-color: rgba(224, 223, 220, 25%);

  & > button {
    width: 90%;
    padding: 10px 0;
    font-size: 20px;
    margin: 10px 0;
    border: 0;
    border-radius: 20px;
    transition-duration: 0.3s;
    background-color: rgba(255, 255, 255, 70%);
  }

  & > button:hover {
    background-color: gray;
    color: white;
  }
`;

const DateInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  padding: 20px 0;
  background-color: rgba(50, 50, 50, 40%);
  border-radius: 20px;
  color: white;
`;

const TodoInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(224, 223, 220, 25%);
  height: 410px;
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

const TodoItemList = styled.ul`
  height: 100%;
  overflow: scroll;
  background-color: rgba(224, 223, 220, 70%);
  border-radius: 20px;
`;

const TodoItem = styled.li`
  display: flex;
  width: 100%;
  padding: 5px 0;
  border-bottom: 1px solid white;

  & button {
    padding: 5px 7px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;
    transition-duration: 0.3s;
    color: white;
    background-color: rgba(100, 100, 100, 70%);
  }

  & button:hover {
    background-color: lightgray;
  }

  .checkbox-area {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 5%;

    & > input {
      width: 100%;
      height: 100%;
      margin: 0;
    }
  }

  .button-area {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 15%;

    .detail-button-area {
      display: flex;
      flex-basis: 50%;
    }

    .delete-button-area {
      display: flex;
      flex-basis: 50%;
    }
  }
`;

const ContentBox = styled.div`
  flex-basis: 80%;
  width: 100px;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
  text-decoration: ${(props) => props.isChecked && 'line-through'};
  color: ${(props) => props.isChecked && 'gray'};
`;

export default Todo;
