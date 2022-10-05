import React from 'react'
import Title from './Title'
import TodoForm from './TodoForm'

const Container = () => {
  return (
    <div className='container'>
      <Title title='⛧ 투두리스트 ⛧' />
      <TodoForm />
    </div>
  )
}

export default Container