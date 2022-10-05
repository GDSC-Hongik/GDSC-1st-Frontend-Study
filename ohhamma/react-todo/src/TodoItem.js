import React from 'react'
import { ReactComponent as DelButton } from './x-solid.svg';

const TodoItem = ({ text }) => {
  const onClick = () => {
    console.log('clicked');
  }
  return (
    <>
      <li>
        <span>{text}</span>
        <DelButton
          className='button'
          onClick={onClick}
          width={18} height={18}
          fill="rgba(65, 60, 88, 0.4)"/>
      </li>
    </>
  )
}

export default TodoItem