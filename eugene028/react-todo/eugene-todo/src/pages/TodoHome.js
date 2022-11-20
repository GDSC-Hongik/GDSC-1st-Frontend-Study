import React from 'react';
import { useState, useEffect } from 'react';
import TodoInsert from '../components/TodoInsert';
import TodoTemplate from '../components/TodoTemplate';
import TodoList from '../components/TodoList';
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";
import useTodo from '../hooks/useTodo';
import { useRecoilState } from 'recoil';
import { todoState, todoId } from '../stores/Atom'
import {
  MyDatePicker, DiaryBtnCSS, DateSetting
} from '../components/styledComponent';


const TodoHome = () => {
  const [date, setDate] = useState(new Date());
  const [, setTodos] = useRecoilState(todoState);
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

  useEffect(() => {
    loadData();
    },[])

  /*사용자에게 입력받은 값 저장*/
  var todayDate = new Date();
  var todayDateValue = todayDate.toLocaleString().slice(0,13).replace(/ /g,"");
  var settingDate = date.toLocaleDateString().replace(/ /g,"");

  console.log('todayDate 형식 : ' + typeof(todayDateValue));
  console.log('settingDate 형식 : ' + typeof(settingDate));

  console.log('날짜값 ID :' + settingDate);
  //파싱완료
  console.log('오늘의 날짜 :' + todayDateValue);

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
                <TodoInsert onInsert = {todoInsert}/>
                <TodoList  onRemove={todoRemove} onToggle ={todoToggle}/> 
                <DiaryBtnCSS to = {'/diary'}>일기 작성하기</DiaryBtnCSS>
            </TodoTemplate>
        </>
    );
};

export default TodoHome;

/*todos = {todos} todoList에 props 넘겨주지 않아씀! */
/*
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
          setTodos(toggledItem);
          localStorage.setItem("TODO",JSON.stringify(toggledItem));
        },
        [todos],
      );
      */