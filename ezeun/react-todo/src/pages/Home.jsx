import React from 'react';
import InputBox from '../components/InputBox';
import ToDoItemList from '../components/ToDoItemList';

const Home = () => (
  <div className="homepage__container">
    {/* ToDo Item을 추가할 수 있는 input 박스 */}
    <InputBox />

    {/* 할 일 Item 리스트 */}
    <ToDoItemList />

    {/* 완료한 Item 리스트 */}
    <ToDoItemList />
  </div>
);

export default Home;