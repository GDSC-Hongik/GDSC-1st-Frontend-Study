import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onDel, onToggle }) => {
  return (
    <>
      <ul className='todo-list'>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDel={onDel}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </>
  )
}

export default TodoList