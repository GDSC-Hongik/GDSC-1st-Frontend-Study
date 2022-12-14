import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 51px;

  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`;

const TodoHead = ({ title }) => {
  return (
    <Wrapper>
      {title}
    </Wrapper>
  )
}

export default TodoHead