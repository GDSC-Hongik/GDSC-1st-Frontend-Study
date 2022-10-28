import { useState } from 'react';
import uuid from 'react-uuid';
import { useRecoilState } from 'recoil';
import { ICategory } from '../interfaces/ICategory';
import { todoState } from '../stores/todo';

const useTodo = () => {
  const [todo, setTodo] = useRecoilState(todoState);
  const [isEditing, setIsEditing] = useState<boolean>(false);

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
    const index = todo.findIndex((v) => v.id === id);
    const temp = [...todo];
    temp[index] = { ...temp[index], label: inputValue };
    setTodo(temp);
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

export default useTodo;
