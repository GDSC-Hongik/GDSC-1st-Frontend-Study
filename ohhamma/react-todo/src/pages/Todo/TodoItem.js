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
          fill="rgba(65, 60, 88, 0.4)" />
      </li>
    </>
  )
}

export default TodoItem