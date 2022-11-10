import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 700px;
  
  background: #FFFFFF;
  box-shadow: 3px 4px 9px 5px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
`;

const TodoContainer = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default TodoContainer