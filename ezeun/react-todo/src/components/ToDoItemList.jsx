import React from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

const ToDoItemList = () => (
  <div className="todoapp__list">
    <p className="todoapp__list-tit">제목</p>
    {/* 기능 구현 전, 임시로 아래와 같이 작성. 기능 개발시에는 map으로 컴포넌트 반환 */}
    <ul className="todoapp__list-ul">
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </ul>
  </div>
);

export default ToDoItemList;