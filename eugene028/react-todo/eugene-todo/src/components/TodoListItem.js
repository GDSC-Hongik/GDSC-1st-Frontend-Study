import React from 'react';
import {MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline,} from 'react-icons/md';
import cn from 'classnames';
import {
    TodoListItemCSS,
} from './styledComponent';

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;
    return (
        <TodoListItemCSS>
            <div className = {cn("checkBox", {checked})} onClick = {() => onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank />}
                <div className ="text">{text}</div>
            </div>
            <div className = "remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
            
        </TodoListItemCSS>
    );
};

export default React.memo(TodoListItem);