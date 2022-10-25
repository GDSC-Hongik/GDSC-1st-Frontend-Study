import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onDel }) => {
  return (
    <>
      <ul className='todo-list'>
        {todos.map(todo => <TodoItem id={todo.id} text={todo.text} onDel={onDel}/>)}
      </ul>
    </>
  )
}

export default TodoList