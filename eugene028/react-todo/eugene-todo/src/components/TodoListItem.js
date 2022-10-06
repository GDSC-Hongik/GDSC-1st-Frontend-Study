import React from 'react';
import {MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline,} from 'react-icons/md';
import './TodoListItem.scss'
import cn from 'classnames';

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;
    return (
        <div className = "TodoListItem">
            <div className = {cn("checkBox", {checked})} onClick = {() => onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank />}
                <div className ="text">{text}</div>
            </div>
            <div className = "remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
            
        </div>
    );
};

export default TodoListItem;