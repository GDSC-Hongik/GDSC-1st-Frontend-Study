import TodoContainer from './components/Todo/TodoContainer';
import TodoHead from './components/Todo/TodoHead';
import TodoForm from './components/Todo/TodoForm';
import TodoList from './components/Todo/TodoList';
import WeatherBox from './components/Weather/WeatherBox';
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
        <WeatherBox/>
        <TodoForm onAdd={onAdd} />
        <TodoList todos={todos} onDel={onDel} onToggle={onToggle}/>
      </TodoContainer>
    </>
  );
}

export default App;