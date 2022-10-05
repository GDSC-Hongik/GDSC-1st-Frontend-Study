import React, { useState } from 'react'

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    onAdd(text);
    setText('');
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={text}
          placeholder='오늘의 할 일을 적어봐요'
          onChange={onChange}
          required />
      </form>
    </>
  )
}

export default TodoForm