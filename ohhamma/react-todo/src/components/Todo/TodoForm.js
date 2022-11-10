import React from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';

const Wrapper = styled.div``;

const Form = styled.form`
  text-align: center;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  font-size: 12pt;
  color: rgba(255, 255, 255, 0.5);
  border: 0px;
  border-radius: 15px;
  outline: none;
  padding-left: 15px;
  margin-left: 10px;
  padding-right: 15px;
  margin-bottom: 8px;
  background: rgba(0, 0, 0, 0.2);

  :focus {
    outline: 2px solid rgba(255, 255, 255, 0.15);
  }
  ::placeholder {
  color: rgba(255, 255, 255, 0.2);
  font-style: italic;
}
`;

const TodoForm = ({ onAdd }) => {
  const [text, onChange, onSubmit] = useInput('', onAdd);

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <Input
          type='text'
          value={text}
          placeholder='오늘의 할 일을 적어봐요'
          onChange={onChange}
          required />
      </Form>
    </Wrapper>
  )
}

export default TodoForm