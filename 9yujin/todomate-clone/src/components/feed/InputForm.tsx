import styled from 'styled-components';
import { ICategory } from '../../interfaces/ICategory';
import { ReactComponent as ThreeDot } from '../../assets/vectors/three-dots.svg';
import { ReactComponent as TodoCheck } from '../../assets/vectors/todo-check.svg';
import useOutsideRef from '../../hooks/useOutsideRef';
import { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import useInput from '../../hooks/useInput';
import useTodo from '../../hooks/useTodo';

interface InputFormProps {
  category: ICategory;
  setOpen: Dispatch<SetStateAction<any>>;
  initialValue?: string;
}

const InputForm = ({
  category,
  setOpen,
  initialValue = '',
}: InputFormProps) => {
  const { value, onChange, resetValue } = useInput(initialValue);
  const { insertTodo, editTodo } = useTodo();

  

  const onCreate = () => {
    insertTodo(value, category);
    setOpen(false);
    resetValue();
  };

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      if (e.nativeEvent.isComposing === false) {
        onCreate();
        if (value !== '') {
          setOpen(true);
        } else {
          setOpen(false);
        }
        e.preventDefault();
      }
    }
  };

  const inputRef = useOutsideRef(onCreate, value);

  return (
    <>
      <Wrapper>
        <div>
          <TodoCheck fill="#DBDDDF" />
          <input
            placeholder="입력"
            autoFocus
            ref={inputRef}
            value={value}
            onChange={onChange}
            onKeyDown={onEnter}
          />
        </div>
        <ThreeDot />
      </Wrapper>
      <Border color={category.color} />
    </>
  );
};

export default InputForm;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6px 0;
  & > div {
    display: flex;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;

    input {
      margin-left: 8px;
      border: none;
      padding: 0;
      font-size: 16px;
      font-weight: 400;
      line-height: 21px;
      &:focus {
        outline: none !important;
      }
    }
  }
`;

const Border = styled.div`
  height: 2px;
  width: calc(100% - 30px);
  transform: translateX(30px);
  background-color: ${({ color }) => color};
  @keyframes fadeIn {
    from {
      background-color: white;
    }
    to {
      background-color: ${({ color }) => color};
    }
  }
  animation: fadeIn 0.5s ease;
`;
