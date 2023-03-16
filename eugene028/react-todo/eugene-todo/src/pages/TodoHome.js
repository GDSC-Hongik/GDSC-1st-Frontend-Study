import React from 'react';
import { useState, useEffect } from 'react';
import TodoInsert from '../components/TodoInsert';
import TodoTemplate from '../components/TodoTemplate';
import TodoList from '../components/TodoList';
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";
import useTodo from '../hooks/useTodo';
import { useRecoilState } from 'recoil';
import { todoState, todoId, dateState } from '../stores/Atom'
import styled from 'styled-components';
import {
  MyDatePicker, DiaryBtnCSS, DateSetting
} from '../components/styledComponent';
import {BiLeftArrow , BiRightArrow} from 'react-icons/bi';

const TodoHome = () => {
  const [date, setDate] = useRecoilState(dateState);
  const [todos, setTodos] = useRecoilState(todoState);
  const [, setId] = useRecoilState(todoId);
  const { todoInsert, todoRemove, todoToggle } = useTodo();

  const loadData = () => {
    const storedTodo = localStorage.getItem("TODO"); 
    if (storedTodo != null){//만약 저장공간이 비지 않았더라면
      const myTodoList = JSON.parse(storedTodo); //받아온 데이터를 파싱하고
      setTodos(myTodoList);
      setId(myTodoList[(myTodoList.length - 1)].id + 1);
  }
}

  const nextDay = () => {
    let nextDay = date.getDate() + 1;
    date.setDate(nextDay)
    const NewDay = new Date(date);
    setDate(NewDay);
  }

  const beforeDay = () =>{
    let beforeDay = date.getDate() - 1 ;
    date.setDate(beforeDay)
    const NewDay = new Date(date);
    setDate(NewDay)
  }

  useEffect(() => {
    loadData();
    }, [date])

    return (
      <>
        <BeforeDay onClick = {beforeDay}> 
          <BiLeftArrow size = "2rem"/>
        </BeforeDay>
        <NextDay onClick = {nextDay}>
          <BiRightArrow size = "2rem"/>
        </NextDay>
          <DiaryBox> 
              <TodoTemplate>
                <DateSetting>
                  <span>날짜 설정하기</span>
                  <MyDatePicker 
                      dateFormat = "yyyy/MM/dd" 
                      selected = { date } 
                      onChange = {(date) => setDate(date)}
                      locale = { ko } 
                      placeholderText='Weeks start on Monday' />
                  </DateSetting>
                  <TodoInsert onInsert = {todoInsert}/>
                  <TodoList  onRemove={todoRemove} onToggle ={todoToggle}/> 
                  <DiaryBtnCSS to = {'/diary'}>일기 작성하기</DiaryBtnCSS>
              </TodoTemplate>
            </DiaryBox>
      </>
    );
};

const DiaryBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const BeforeDay = styled.button`
    position : absolute;
    color : rgba(255, 255, 255, 0.4);
    background-color : transparent;
    border : none;
    top : 50%;
    left: 0%;
    z-index: 100;
`;

const NextDay = styled.button`
    position : absolute;
    color : rgba(255, 255, 255, 0.4);
    background-color : transparent;
    border : none;
    top : 50%;
    right: 0%;
    z-index: 9999;
`;




export default TodoHome;