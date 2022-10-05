import { useState } from 'react';
import Container from './Container';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const onAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text
      }
    ])
  }
  return (
    <Container>
      <Title title='⛧ 투두리스트 ⛧' />
      <TodoForm onAdd={onAdd} />
      <TodoList todos={todos}/>
    </Container>
  );
}

export default App;
