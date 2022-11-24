import PropTypes from 'prop-types';
import { RiDeleteRow } from 'react-icons/ri';
import styled from 'styled-components';

import Spinner from '../Spinner';

const ItemList = ({ todoList, setTodoList, onShowModal, setSelectedTodo }) => {
  const handleCheckTodo = (index) => {
    const newTodoList = [...todoList];

    newTodoList[index].isChecked = newTodoList[index].isChecked ? false : true;
    setTodoList([...newTodoList]);
  };

  const handleShowModal = (data) => {
    onShowModal(true);
    setSelectedTodo(data);
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = [...todoList];

    newTodoList[index].isDisabled = !newTodoList[index].isDisabled;
    setTodoList([...newTodoList]);
  };

  return (
    <List>
      {todoList[0] === 'initial' ? (
        <BlankItem>
          <Spinner />
        </BlankItem>
      ) : (
        todoList.map((todo, index) => (
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

            <div className="icon-area">
              {todo.isDisabled && <RiDeleteRow />}
            </div>

            <div className="button-area">
              <div className="detail-button-area">
                <button type="button" onClick={() => handleShowModal(todo)}>
                  상세
                </button>
              </div>
              <div className="delete-button-area">
                <button type="button" onClick={() => handleDeleteTodo(index)}>
                  삭제
                </button>
              </div>
            </div>
          </TodoItem>
        ))
      )}
      {!todoList.length && <BlankItem>저장된 기록이 없습니다</BlankItem>}
    </List>
  );
};

ItemList.propTypes = {
  todoList: PropTypes.array.isRequired,
  setTodoList: PropTypes.func.isRequired,
  onShowModal: PropTypes.func.isRequired,
  setSelectedTodo: PropTypes.func.isRequired,
};

const List = styled.ul`
  height: 100%;
  overflow: scroll;
  background-color: rgba(224, 223, 220, 70%);
  border-radius: 20px;
  position: relative;
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

  .icon-area {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 5%;
    font-size: 25px;
    color: rgba(255, 0, 0, 70%);
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
  flex-basis: 75%;
  width: 100px;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
  text-decoration: ${(props) => props.isChecked && 'line-through'};
  color: ${(props) => props.isChecked && 'gray'};
`;

const BlankItem = styled.li`
  text-align: center;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default ItemList;
