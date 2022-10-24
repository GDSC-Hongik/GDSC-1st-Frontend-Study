import React from 'react'
import { ReactComponent as DelButton } from '../../assets/x-solid.svg';
import { ReactComponent as DoneButton } from '../../assets/check-solid.svg';

const TodoItem = ({ todo, onDel, onToggle }) => {
  const {id, text, done} = todo;

  return (
    <>
      <li className={done ? 'on' : 'off'}>
        <span>{text}</span>
        <div className='buttons'>
          <DoneButton
            className='button'
            onClick={() => onToggle(id)}
            width={20} height={20}
            fill="rgba(156, 163, 219, 0.7)" />
          <DelButton
            className='button'
            onClick={() => onDel(id)}
            width={18} height={18}
            fill="rgba(50, 42, 38, 0.5)" />
          </div>
      </li>
    </>
  )
}

export default TodoItem