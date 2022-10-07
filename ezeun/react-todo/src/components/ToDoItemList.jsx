import React from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

const ToDoItemList = ({ title, todoList, setTodoList }) => (
  <div className="todoapp__list">
    {/*props로 부터 title 전달받음*/}
    <p className="todoapp__list-tit">{title}</p>

    <ul className="todoapp__list-ul">
      {todoList && // todoList가 있을때만 출력
        todoList.map((todoItem) => (
          // map을 이용하여 ToDoItem을 출력
          <ToDoItem
            key={todoItem.id}
            todoItem={todoItem}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        ))}
    </ul>
  </div>
);

ToDoItemList.propTypes = {
  title: PropTypes.string.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  setTodoList: PropTypes.func.isRequired,
};

export default ToDoItemList;