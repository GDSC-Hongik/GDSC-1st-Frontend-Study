import React from 'react'
import { ReactComponent as DelButton } from '../../assets/x-solid.svg';

const TodoItem = ({ id, text, onDel }) => {
  return (
    <>
      <li>
        <span>{text}</span>
        <DelButton
          className='button'
          onClick={() => onDel(id)}
          width={18} height={18}
          fill="rgba(50, 42, 38, 0.5)" />
      </li>
    </>
  )
}

export default TodoItem