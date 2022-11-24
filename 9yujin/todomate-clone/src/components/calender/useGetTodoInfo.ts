import { useRecoilValue } from 'recoil';
import { todoState } from '../../stores/todo';

const useGetTodoInfo = (date: string, userId: string) => {
  const todos = useRecoilValue(todoState([date, userId]));
  const colors = todos
    .filter((todo) => todo.isDone === true)
    .map((done) => done.category.color);
  const count = todos.filter((todo) => !todo.isDone).length;
  const isDone = count === 0 && todos.length !== 0;
  return { count, colors, isDone };
};

export default useGetTodoInfo;
