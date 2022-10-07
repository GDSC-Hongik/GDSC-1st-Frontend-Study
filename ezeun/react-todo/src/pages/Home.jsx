import React, { useState } from 'react';
import InputBox from '../components/InputBox';
import ToDoItemList from '../components/ToDoItemList';

const Home = () => {
  const [todoList, setTodoList] = useState([]); //todo 아이템 담을 리스트

  return (
    <div className="homepage__container">
      {/* ToDo Item을 추가할 수 있는 input 박스 */}
      {/* 입력한 값을 todoList에 담기 위해 InputBox 컴포넌트로 넘겨주기*/}
      <InputBox
        todoList={todoList}
        setTodoList={setTodoList}
      />

      {/* 할 일 Item 리스트 */}
      <ToDoItemList
        title={'할 일'}
        todoList={todoList}
        setTodoList={setTodoList}
      />

      {/* 완료한 Item 리스트 */}
      <ToDoItemList />
    </div>
  );
};

export default Home;