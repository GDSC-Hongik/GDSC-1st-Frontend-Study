import React from 'react';
import { useRecoilValue } from 'recoil';
import { ICategory } from '../../interfaces/ICategory';
import { editingState } from '../../stores/editing';
import selectedDateState from '../../stores/selectedDate';
import selectedProfileState from '../../stores/selectedProfile';
import { todosByCategory } from '../../stores/todo';
import CategoryButton from './CategoryButton';
import InputForm from './InputForm';
import TodoItem from './TodoItem';

const FeedItemList = ({ category }: { category: ICategory }) => {
  const selectedDate = useRecoilValue(selectedDateState);
  const selectedProfile = useRecoilValue(selectedProfileState);
  const todos = useRecoilValue(
    todosByCategory({
      todoItemKey: [selectedDate, selectedProfile],
      categoryLabel: category.label,
    }),
  );
  const editing = useRecoilValue(editingState);
  return (
    <>
      <CategoryButton category={category} />
      {todos.map((todo) =>
        editing === todo.id ? (
          <InputForm
            category={category}
            initialValue={todo.label}
            id={todo.id}
          />
        ) : (
          <TodoItem item={todo} key={todo.id} />
        ),
      )}
      {editing === category.label && <InputForm category={category} />}
    </>
  );
};

export default FeedItemList;
