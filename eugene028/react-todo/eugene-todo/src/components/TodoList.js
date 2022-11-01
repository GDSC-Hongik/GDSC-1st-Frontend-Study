import React from 'react';
import TodoListItem from './TodoListItem';
import {
    TodoListCSS,
} from './styledComponent';

const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <TodoListCSS>
            {todos.length === 0 && 
            <h2>오늘의 할 일이 없습니다.</h2>}
            {todos.map(todo => {return(
                <TodoListItem todo ={todo} key = {todo.id} onRemove ={onRemove} onToggle = {onToggle} />
            )})}
        </TodoListCSS>
    );
};

export default TodoList; 