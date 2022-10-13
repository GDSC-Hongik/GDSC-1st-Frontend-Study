import React from 'react';
import cn from 'classnames';
import {MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline,} from 'react-icons/md';

const TodoListItem = ({todo}) => {
    const {text, checked} = todo;
    return (
        <div className="TodoLisitItem">
            <div className={cn('checkbox', {checked })}>
                {checked ? <MdCheckBox/>:<MdCheckBoxOutlineBlank/>}
                <div clasName="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline />
            </div>
        </div>

    );
};

export default TodoListItem;