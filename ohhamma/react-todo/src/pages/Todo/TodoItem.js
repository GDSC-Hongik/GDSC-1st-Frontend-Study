import React from 'react';
import { ReactComponent as CheckSolid } from '../../assets/check-solid.svg';
import { ReactComponent as XSolid } from '../../assets/x-solid.svg';
import styled from 'styled-components';

const Item = styled.li`
  color: ${props => props.done ? 'rgba(69, 75, 102, 0.6)' : 'rgba(69, 75, 102, 0.3)'};
  font-weight: ${props => props.done ? 600 : 300};
  font-style: ${props => props.done ? 'normal' : 'unset'};
  text-decoration: ${props => props.done ? 'none' : 'line-through'};
  padding: 7px 0px 8px 7px;
  margin-bottom: 7px;
  border-bottom: 1px solid rgba(25, 19, 8, 0.1);
  font-size: 15px;
  display: flex;
  justify-content: space-between;
`;

const DoneButton = styled(CheckSolid)`
  margin: 0px 0px 0px 10px;
  &:hover {
    cursor: pointer;
  }
`;

const DelButton = styled(XSolid)`
  margin: 0px 0px 0px 10px;
  &:hover {
    cursor: pointer;
  }
`;

const TodoItem = ({ todo, onDel, onToggle }) => {
  const {id, text, done} = todo;

  return (
    <>
      <Item done={done ? false : true}>
        <span>{text}</span>
        <div className='buttons'>
          <DoneButton
            className='button'
            onClick={() => onToggle(id)}
            width={20} height={20}
            fill="rgba(156, 163, 219, 0.7)" />
          <DelButton
            className='button'
            onClick={() => onDel(id)}
            width={18} height={18}
            fill="rgba(50, 42, 38, 0.5)" />
          </div>
      </Item>
    </>
  )
}

export default TodoItem;