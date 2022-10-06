import { useState } from 'react';

import InputTodo from '../components/InputTodo';
import ProgressTodo from '../components/ProgressTodo';
import CompleteTodo from '../components/CompleteTodo';

export default function Main() {
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <InputTodo onInputChanged={setTodoList} />
      <ProgressTodo todoList={todoList} setTodoList={setTodoList} />
      <CompleteTodo todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}
