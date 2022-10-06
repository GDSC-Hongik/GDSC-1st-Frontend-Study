
import './App.css';
import { useState, useRef, useCallback } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState([
    {
      id : 1,
      text : 'velog에 정리할 글 업로드하기',
      checked : true,
    },
    {
      id : 2,
      text : '스터디를 위한 준비하기',
      checked : false,
    },
  ])

  const nextId = useRef(3);
  const onInsert = useCallback(
    text => {
      const todo ={
        id : nextId.current,
        text,
        checked : false,
      };
      setTodos(todos.concat(todo));
      nextId.current +=1;
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );
  return (
   <>
    <TodoTemplate>
      <TodoInsert onInsert = {onInsert}/>
      <TodoList todos = {todos} onRemove={onRemove}/>
    </TodoTemplate>
   </>
  );
}

export default App;
