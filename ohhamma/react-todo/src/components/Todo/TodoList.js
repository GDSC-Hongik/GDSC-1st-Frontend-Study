import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';

const Wrapper = styled.div``;

const List = styled.ul`
  list-style: none;
  margin: 10px auto 22px auto;
  padding: 0px 20px 20px 10px;
  max-width: 315px;
  width: 100%;
  max-height: 475px;
  overflow-y: overlay;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    height: 10%;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
  }
  &::-webkit-scrollbar-track {
    background-color: #00ff0000;
  }
`;

const TodoList = () => {
  const todos = useTodoState();

  return (
    <Wrapper>
      <List>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </List>
    </Wrapper>
  )
}

export default TodoList