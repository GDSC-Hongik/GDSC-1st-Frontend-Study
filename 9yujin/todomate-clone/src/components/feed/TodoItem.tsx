import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { ReactComponent as ThreeDot } from '../../assets/vectors/three-dots.svg';
import { ReactComponent as TodoCheck } from '../../assets/vectors/todo-check.svg';
import { ReactComponent as CheckIcon } from '../../assets/vectors/check.svg';
import { ITodoItem } from '../../interfaces/ITodoItem';
import { todoState } from '../../stores/todo';
import useTodo from '../../hooks/useTodo';
import useBottomSheet from '../../hooks/useBottomSheet';

const TodoItem = ({ item }: { item: ITodoItem }) => {
  const { label, isDone, category, id } = item;
  const { toggleTodo } = useTodo();
  const { onOpen } = useBottomSheet(false);

  return (
    <>
      <Wrapper>
        <div>
          <Check onClick={() => toggleTodo(id)}>
            <TodoCheck fill={isDone ? category.color : '#DBDDDF'} />
            {isDone && <CheckIcon className="check" />}
          </Check>
          <p>{label}</p>
        </div>
        <ThreeDot onClick={() => onOpen(item)} />
      </Wrapper>
    </>
  );
};

export default TodoItem;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 6px 0;

  & > div {
    display: flex;

    align-items: center;
    p {
      margin-left: 8px;
    }
  }

  /* threedot button */
  & > svg {
    cursor: pointer;
  }
`;

const Check = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;

  /* 체크박스 */
  svg {
    cursor: pointer;
  }
  .check {
    position: absolute;
  }
`;
