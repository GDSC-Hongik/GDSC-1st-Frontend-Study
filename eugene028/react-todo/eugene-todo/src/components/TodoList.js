import React from 'react';
import TodoListItem from './TodoListItem';
import { todoState } from '../stores/Atom';
import { useRecoilValue } from 'recoil';
import {
    TodoListCSS, NullBox
} from './styledComponent';

const TodoList = ({onRemove, onToggle}) => {
    const todos = useRecoilValue(todoState);
    return (
        <TodoListCSS>
            {todos.length === 0 && 
            <NullBox>오늘의 할 일을 작성해주세요 :)</NullBox>}
            {todos.map(todo => {return(
                <TodoListItem todo ={todo} key = {todo.id} onRemove ={onRemove} onToggle = {onToggle} />
            )})}
        </TodoListCSS>
    );
};

export default React.memo(TodoList); 