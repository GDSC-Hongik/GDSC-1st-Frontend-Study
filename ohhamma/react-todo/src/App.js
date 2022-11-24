import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoContainer from './components/Todo/TodoContainer';
import TodoHead from './components/Todo/TodoHead';
import TodoForm from './components/Todo/TodoForm';
import TodoList from './components/Todo/TodoList';
import WeatherBox from './components/Weather/WeatherBox';
import { TodoProvider } from './components/Todo/TodoContext';
import background from './assets/background1.png';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    position: absolute;
    background: url(${background}) no-repeat center fixed;
    width: 100%;
    height: 100%;
    background-size: cover;

    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    overflow: overlay;
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      height: 30%;
      background-color: rgba(0, 0, 0, 0.25);
      border-radius: 20px;
    }
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-contents: center;
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <Wrapper>
        <TodoContainer>
          <TodoHead title='투두리스트' />
          <TodoForm />
          <TodoList />
        </TodoContainer>
        <WeatherBox/>
      </Wrapper>
    </TodoProvider>
  );
}

export default App;