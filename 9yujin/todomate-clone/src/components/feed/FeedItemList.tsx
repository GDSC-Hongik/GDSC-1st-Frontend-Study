import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ICategory } from '../../interfaces/ICategory';
import { editingState } from '../../stores/editing';
import { todosByCategory } from '../../stores/todo';
import CategoryButton from './CategoryButton';
import InputForm from './InputForm';
import TodoItem from './TodoItem';

const FeedItemList = ({ category }: { category: ICategory }) => {
  const items = useRecoilValue(todosByCategory(category.label));
  const editing = useRecoilValue(editingState);
  return (
    <>
      <CategoryButton category={category} />
      {items.map((item) =>
        editing === item.id ? (
          <InputForm
            category={category}
            initialValue={item.label}
            id={item.id}
          />
        ) : (
          <TodoItem item={item} key={item.id} />
        ),
      )}
      {editing === category.label && <InputForm category={category} />}
    </>
  );
};

export default FeedItemList;
