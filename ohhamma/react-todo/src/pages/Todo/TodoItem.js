import React from 'react';
import { ReactComponent as CheckSolid } from '../../assets/check-solid.svg';
import { ReactComponent as XSolid } from '../../assets/x-solid.svg';
import styled, { css } from 'styled-components';

const Item = styled.li`
  ${(props) => {
    switch (props.done) {
      case "on":
        return css`
          color: rgba(69, 75, 102, 0.3);
          font-weight: 400;
          font-style: unset;
          text-decoration: line-through;
        `;
      default:
        return css`
          color: rgba(69, 75, 102, 0.6);
          font-weight: 600;
        `;
    }
  }}
  min-height: 24px;
  padding: 12px 7px 9px 7px;
  border-bottom: 1px solid rgba(25, 19, 8, 0.1);
  font-size: 15px;
  display: flex;
  justify-content: space-between;
`;

const TodoText = styled.span`
  max-width: 225px;
  word-wrap: break-word;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50px;
`;

const DoneButton = styled(CheckSolid)`
  fill: ${props => props.done === 'on' ? 'rgba(255, 99, 71, 0.6)' : 'rgba(154, 205, 50, 0.7)'};
  &:hover {
    cursor: pointer;
    width: 22px;
    height: 22px;
  }
`;

const DelButton = styled(XSolid)`
  margin-top: 1px;
  &:hover {
    cursor: pointer;
    width: 19px;
    height: 19px;
  }
`;

const TodoItem = ({ todo, onDel, onToggle }) => {
  const {id, text, done} = todo;

  return (
    <>
      <Item done={done ? 'on' : 'off'}>
        <TodoText>{text}</TodoText>
        <Buttons>
          <DoneButton
            onClick={() => onToggle(id)}
            width={20} height={20}
            done={done ? 'on' : 'off'}
            fill="rgba(156, 163, 219, 0.7)" />
          <DelButton
            onClick={() => onDel(id)}
            width={17} height={17}
            fill="rgba(50, 42, 38, 0.4)" />
          </Buttons>
      </Item>
    </>
  )
}

export default TodoItem;