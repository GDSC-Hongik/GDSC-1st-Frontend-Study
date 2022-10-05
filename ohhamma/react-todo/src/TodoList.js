import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  return (
    <>
      <ul className='todo-list'>
        <TodoItem text='안녕하세요'/>
        <TodoItem text='안녕하세요'/>
        <TodoItem text='안녕하세요'/>
      </ul>
    </>
  )
}

export default TodoList