import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 700px;
  
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  margin: 96px 30px 32px auto;
`;

const TodoContainer = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default TodoContainer