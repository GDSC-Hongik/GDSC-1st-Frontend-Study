import { useRecoilValue } from 'recoil';
import { todoState } from '../../stores/todo';

const useGetTodoCount = (date: string, userId: string) => {
  const todos = useRecoilValue(todoState([date, userId]));
  return todos.filter((todo) => !todo.isDone).length;
};

export default useGetTodoCount;
