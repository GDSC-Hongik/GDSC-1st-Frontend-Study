import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  return (
    <>
      <ul className='todo-list'>
        <TodoItem text='hi'/>
      </ul>
    </>
  )
}

export default TodoList