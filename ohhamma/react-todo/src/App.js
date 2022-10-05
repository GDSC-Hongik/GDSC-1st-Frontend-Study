import { useState, useEffect } from 'react';
import Container from './Container';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

function App() {
  const TODOS_KEY = "todos";

  const saveTodos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }

  const loadTodos = () => {
    const savedTodos = localStorage.getItem(TODOS_KEY);
    if (savedTodos !== null) {
      const parsedTodos = JSON.parse(savedTodos);
      return parsedTodos;
    }
    else return [];
  }

  const [todos, setTodos] = useState(loadTodos());
  
  const onAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text
      }
    ])
  }

  const onDel = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  useEffect(() => {
    saveTodos();
  })

  return (
    <Container>
      <Title title='⛧ 투두리스트 ⛧' />
      <TodoForm onAdd={onAdd} />
      <TodoList todos={todos} onDel={onDel} />
    </Container>
  );
}

export default App;
