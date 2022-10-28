import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ICategory } from '../../interfaces/ICategory';
import editingState from '../../stores/editing';
import { todosByCategory } from '../../stores/todo';
import CategoryButton from './CategoryButton';
import InputForm from './InputForm';
import TodoItem from './TodoItem';

const FeedItemList = ({ category }: { category: ICategory }) => {
  const items = useRecoilValue(todosByCategory(category.label));
  const [editing, setEditing] = useRecoilState(editingState);
  const [isCreating, setIsCreating] = useState<boolean>(false);

  return (
    <>
      <CategoryButton category={category} setOpen={setIsCreating} />
      {items.map((item) =>
        editing === item.id ? (
          <InputForm
            category={category}
            initialValue={item.label}
            setOpen={setEditing}
          />
        ) : (
          <TodoItem item={item} key={item.id} />
        ),
      )}
      {isCreating && <InputForm category={category} setOpen={setIsCreating} />}
    </>
  );
};

export default FeedItemList;
