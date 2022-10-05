import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { ReactComponent as ThreeDot } from '../../assets/vectors/three-dots.svg';
import { ReactComponent as TodoCheck } from '../../assets/vectors/todo-check.svg';
import { ITodoItem } from '../../interfaces/ITodoItem';
import { todoSelector, todoState } from '../../stores/todo';

const TodoItem = ({ item }: { item: ITodoItem }) => {
  const { label, isDone, category } = item;
  const setTodo = useSetRecoilState(todoState);

  const handleToggleTodo = () => {};
  return (
    <Wrapper>
      <div>
        <TodoCheck fill={isDone ? category.color : '#DBDDDF'} />
        <p>{label}</p>
      </div>
      <ThreeDot />
    </Wrapper>
  );
};

export default TodoItem;

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
    p {
      margin-left: 8px;
    }
  }
`;
