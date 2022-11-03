import axios from 'axios';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import selectedDateState from '../recoil/dateState';
import dateParamGenerator from '../utils/dateParamGenerator';

const Todo = ({ onShowModal, setSelectedTodo }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [todoList, setTodoList] = useState([]);

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

  const handleInputTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleInputContent = (event) => {
    setContent(event.target.value);
  };

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

      setTitle('');
      setContent('');
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
          value={title}
          onChange={handleInputTitle}
          onKeyDown={handleEnterKeyDown}
          placeholder="이곳에 제목을 입력 (최대 30자)"
          maxLength="30"
        />
        <textarea
          value={content}
          onChange={handleInputContent}
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

const SaveButtonBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgray;

  & > button {
    width: 90%;
    padding: 10px 0;
    font-size: 20px;
    margin: 10px 0;
    border: 0;
    border-radius: 20px;
    transition-duration: 0.3s;
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
  font-size: 25px;
  padding: 26px 0;
`;

const TodoInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: lightgray;
  height: 410px;

  & > input {
    width: 90%;
    border: 0;
    border-radius: 20px;
    padding: 10px;
    font-size: 22px;
    margin: 10px 0;
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
  }

  & > button {
    width: 93%;
    border: 0;
    border-radius: 20px;
    padding: 10px 0;
    margin-bottom: 10px;
    font-size: 20px;

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
`;

const TodoItem = styled.li`
  display: flex;
  width: 100%;
  padding: 5px 0;

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
  color: ${(props) => props.isChecked && 'lightgray'};
`;

export default Todo;
