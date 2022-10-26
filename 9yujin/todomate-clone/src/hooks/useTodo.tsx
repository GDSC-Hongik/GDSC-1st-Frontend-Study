import { useRecoilState } from 'recoil';
import { todoState } from '../stores/todo';

const useTodo = () => {
  const [todo, setTodo] = useRecoilState(todoState);

  const toggleTodo = (id: string) => {
    const index = todo.findIndex((v) => v.id === id);
    const temp = [...todo];
    temp[index] = { ...temp[index], isDone: !temp[index].isDone };
    setTodo(temp);
  };

  const deleteTodo = (id: string) => {
    setTodo(todo.filter((v) => v.id !== id));
  };

  return { toggleTodo, deleteTodo };
};

export default useTodo;
