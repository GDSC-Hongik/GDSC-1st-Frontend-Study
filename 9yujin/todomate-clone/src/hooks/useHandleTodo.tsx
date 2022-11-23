import uuid from 'react-uuid';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ICategory } from '../interfaces/ICategory';
import selectedDateState from '../stores/selectedDate';
import selectedProfileState from '../stores/selectedProfile';
import { todoState } from '../stores/todo';

const useHandleTodo = () => {
  const selectedDate = useRecoilValue(selectedDateState);
  const selectedProfile = useRecoilValue(selectedProfileState);
  const [todo, setTodo] = useRecoilState(
    todoState([selectedDate, selectedProfile]),
  );

  const insertTodo = (inputValue: string, category: ICategory) => {
    if (inputValue) {
      const newTodo = {
        label: inputValue,
        id: uuid(),
        isDone: false,
        category: category,
      };
      setTodo((prev) => [...prev, newTodo]);
    }
  };

  const editTodo = (inputValue: string, id: string) => {
    if (inputValue) {
      const index = todo.findIndex((v) => v.id === id);
      const temp = [...todo];
      temp[index] = { ...temp[index], label: inputValue };
      setTodo(temp);
    }
  };

  const toggleTodo = (id: string) => {
    const index = todo.findIndex((v) => v.id === id);
    const temp = [...todo];
    temp[index] = { ...temp[index], isDone: !temp[index].isDone };
    setTodo(temp);
  };

  const deleteTodo = (id: string) => {
    setTodo(todo.filter((v) => v.id !== id));
  };

  return { insertTodo, editTodo, toggleTodo, deleteTodo };
};

export default useHandleTodo;
