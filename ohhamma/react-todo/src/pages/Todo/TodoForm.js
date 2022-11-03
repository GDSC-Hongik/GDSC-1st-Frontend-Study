//import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';

const Form = styled.form`
  text-align: center;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  font-size: 12pt;
  border: 0px;
  border-radius: 15px;
  outline: none;
  padding-left: 15px;
  padding-right: 15px;
  background: rgba(25, 19, 8, 0.1);
`;

const TodoForm = ({ onAdd }) => {
  const [text, onChange, onSubmit] = useInput('', onAdd);

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          type='text'
          value={text}
          placeholder='오늘의 할 일을 적어봐요'
          onChange={onChange}
          required />
      </Form>
    </>
  )
}

export default TodoForm