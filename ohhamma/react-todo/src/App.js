import TodoContainer from './pages/Todo/TodoContainer';
import TodoHead from './pages/Todo/TodoHead';
import TodoForm from './pages/Todo/TodoForm';
import TodoList from './pages/Todo/TodoList';
import useTodos from './hooks/useTodos';
import { createGlobalStyle } from 'styled-components';

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
  const [todos, onAdd, onDel, onToggle] = useTodos([], TODOS_KEY);

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