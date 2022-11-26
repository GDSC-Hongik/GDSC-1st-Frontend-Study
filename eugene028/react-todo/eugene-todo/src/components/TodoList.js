import React from 'react';
import TodoListItem from './TodoListItem';
import { todoState, dateState } from '../stores/Atom';
import { useRecoilValue } from 'recoil';
import {
    TodoListCSS, NullBox
} from './styledComponent';

const TodoList = ({onRemove, onToggle}) => {
    const todos = useRecoilValue(todoState);
    const date = useRecoilValue(dateState);

    
    const selectedDateTodo = todos.filter(
        todos => (todos.day === date.getDate() && todos.month === date.getMonth() + 1 && todos.year === date.getFullYear())
      )
    
 
    return (
        <TodoListCSS>
            {selectedDateTodo.length === 0 && 
            <NullBox>오늘의 할 일을 작성해주세요 :)</NullBox>}
            {selectedDateTodo.map(todo => {return(
                <TodoListItem todo ={todo} key = {todo.id} onRemove ={onRemove} onToggle = {onToggle} />
            )})}
        </TodoListCSS>
    );
};

export default React.memo(TodoList); 