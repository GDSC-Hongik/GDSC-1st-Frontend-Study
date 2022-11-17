import React from 'react';
import { useState, useRef, useCallback, useEffect } from 'react';
import TodoInsert from '../components/TodoInsert';
import TodoTemplate from '../components/TodoTemplate';
import TodoList from '../components/TodoList';
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";
import {
  MyDatePicker, DiaryBtnCSS, DateSetting
} from '../components/styledComponent';


const TodoHome = () => {
  const [date, setDate] = useState(new Date());
  const [todos, setTodos] = useState([]);

  let nextId = useRef(0); //useRef를 이용하여 id를 지정한다.
  /*사용자에게 입력받은 값 저장*/
  const onInsert = useCallback( 
    (text, checked) => {
      const newtodo ={
        id : nextId.current,
        text : text,
        checked : checked,
      };
      nextId.current++;
      setTodos(todos => todos.concat(newtodo));
      localStorage.setItem("TODO", JSON.stringify([...todos, newtodo]));
    },[todos]
  );

  //새로고침으로 해야 할 일 결정 
  useEffect(() => {
    const storedTodo = localStorage.getItem("TODO"); 
    if (storedTodo != null){//만약 저장공간이 비지 않았더라면
      const myTodoList = JSON.parse(storedTodo); //받아온 데이터를 파싱하고
      setTodos(myTodoList);
      console.log(myTodoList);
      nextId.current = myTodoList[(myTodoList.length - 1)].id + 1; //useRef이용하여서 저장할 key값을 제대로 설정합니다.
    }},[]
    )

    const onRemove = useCallback(
        id => {
          const deletedItem = todos.filter(todo => todo.id !== id);
          setTodos(deletedItem);
          localStorage.setItem("TODO",JSON.stringify(deletedItem));
        },
        [todos],
      );
    
      const onToggle = useCallback (id => {
          const toggledItem = todos.map(todo => 
            todo.id === id ? { ...todo, checked : !todo.checked } : todo)
          setTodos(todos => todos.map(todo => 
            todo.id === id ? { ...todo, checked : !todo.checked } : todo));
          localStorage.setItem("TODO",JSON.stringify(toggledItem));
        },
        [todos],
      );

      console.log(date);

    return (
        <>
            <TodoTemplate>
              <DateSetting>
                <span>날짜 설정하기</span>
                <MyDatePicker 
                    dateFormat = "yyyy/MM/dd" 
                    selected = {date} 
                    onChange = {date => setDate(date)}
                    locale = { ko } 
                    placeholderText='Weeks start on Monday' />
                </DateSetting>
                <TodoInsert onInsert = {onInsert}/>
                <TodoList todos = {todos} onRemove={onRemove} onToggle ={onToggle}/>
                <DiaryBtnCSS to = {'/diary'}>일기 작성하기</DiaryBtnCSS>
            </TodoTemplate>
        </>
    );
};

export default TodoHome;

