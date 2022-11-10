import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const Wrapper = styled.div``;

const List = styled.ul`
  list-style: none;
  margin: 10px auto 22px auto;
  padding: 0px 20px 20px 10px;
  max-width: 315px;
  width: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(103, 125, 183, 0.1);
  }
  &::-webkit-scrollbar-track {
    background-color: #00ff0000;
  }
`;

const TodoList = ({ todos, onDel, onToggle }) => {
  return (
    <Wrapper>
      <List>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDel={onDel}
            onToggle={onToggle}
          />
        ))}
      </List>
    </Wrapper>
  )
}

export default TodoList