import { useState, useRef } from 'react';
import Container from './Container';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

function App() {
  const num = useRef(1)
  const [todos, setTodos] = useState([]);

  const onAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: num.current++,
        text
      }
    ])
  }

  const onDel = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Container>
      <Title title='⛧ 투두리스트 ⛧' />
      <TodoForm onAdd={onAdd} />
      <TodoList todos={todos} onDel={onDel} />
    </Container>
  );
}

export default App;
