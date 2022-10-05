import React from 'react'

const TodoItem = ({ text }) => {
  return (
    <>
      <li>
        <span>{text}</span>
      </li>
    </>
  )
}

export default TodoItem