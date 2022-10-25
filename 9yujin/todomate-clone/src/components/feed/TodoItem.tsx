import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { ReactComponent as ThreeDot } from '../../assets/vectors/three-dots.svg';
import { ReactComponent as TodoCheck } from '../../assets/vectors/todo-check.svg';
import { ReactComponent as CheckIcon } from '../../assets/vectors/check.svg';
import { ITodoItem } from '../../interfaces/ITodoItem';
import { todoState } from '../../stores/todo';
import useBottomSheet from '../../hooks/useBottomSheet';
import MenuBottomSheet from './MenuBottomSheet';

const TodoItem = ({ item }: { item: ITodoItem }) => {
  const { label, isDone, category, id } = item;
  const [todo, setTodo] = useRecoilState(todoState);
  const [isOpen, onOpen, onDismiss] = useBottomSheet(false);

  const handleToggleTodo = () => {
    const index = todo.findIndex((v) => v.id === id);
    const temp = [...todo];
    temp[index] = { ...temp[index], isDone: !isDone };
    setTodo(temp);
  };

  const handleDeleteTodo = () => {
    setTodo(todo.filter((v) => v.id !== id));
  };

  return (
    <>
      <Wrapper>
        <div>
          <Check onClick={handleToggleTodo}>
            <TodoCheck fill={isDone ? category.color : '#DBDDDF'} />
            {isDone && <CheckIcon className="check" />}
          </Check>
          <p>{label}</p>
        </div>
        <ThreeDot onClick={onOpen} />
      </Wrapper>

      {/* 수정, 삭제 바텀시트 */}
      <MenuBottomSheet
        isOpen={isOpen}
        onDismiss={onDismiss}
        onDeleteTodo={handleDeleteTodo}
        label={label}
      />
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
