
import './App.css';
import React, { useCallback, useState, useRef } from 'react';
import TodoList from './component/TodoList';
import TodoInsert from './component/TodoList';
import TodoTemplate from './component/TodoTemplate';


function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: '밥먹기',
      checked: true,
    },
    {
      id: 2,
      text: '과제하기',
      checked: false,
    },
    {
      id: 3,
      text: '잠자기',
      checked: true,
    },
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current +=1;
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos ={todos} />
    </TodoTemplate>

  );
}

export default App;
