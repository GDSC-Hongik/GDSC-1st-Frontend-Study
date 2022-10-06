import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { ReactComponent as ThreeDot } from '../../assets/vectors/three-dots.svg';
import { ReactComponent as TodoCheck } from '../../assets/vectors/todo-check.svg';
import { ITodoItem } from '../../interfaces/ITodoItem';
import { todoSelector, todoState } from '../../stores/todo';

const TodoItem = ({ item }: { item: ITodoItem }) => {
  const { label, isDone, category, id } = item;
  const [todo, setTodo] = useRecoilState(todoState);

  const handleToggleTodo = () => {
    const index = todo.findIndex((v) => v.id === id);
    const temp = [...todo];
    temp[index] = { ...temp[index], isDone: !isDone };
    setTodo(temp);
  };
  return (
    <Wrapper>
      <div>
        <TodoCheck
          fill={isDone ? category.color : '#DBDDDF'}
          onClick={handleToggleTodo}
        />
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
    /* 체크박스 */
    svg {
      cursor: pointer;
    }
  }
  /* threedot button */
  & > svg {
    cursor: pointer;
  }
`;
