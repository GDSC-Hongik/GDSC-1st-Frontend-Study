import { useEffect } from 'react';
import TodoContainer from './pages/Todo/TodoContainer';
import TodoHead from './pages/Todo/TodoHead';
import TodoForm from './pages/Todo/TodoForm';
import TodoList from './pages/Todo/TodoList';
import { createGlobalStyle } from 'styled-components';
import useTodos from './hooks/useTodos';

const GlobalStyle = createGlobalStyle`
  body {
    background: #677DB7;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
`;

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

  const [todos, onAdd, onDel, onToggle] = useTodos(loadTodos());

  useEffect(() => {
    saveTodos();
  })

  return (
    <>
      <GlobalStyle />
      <TodoContainer>
        <TodoHead title='투두리스트' />
        <TodoForm onAdd={onAdd} />
        <TodoList todos={todos} onDel={onDel} onToggle={onToggle}/>
      </TodoContainer>
    </>
  );
}

export default App;