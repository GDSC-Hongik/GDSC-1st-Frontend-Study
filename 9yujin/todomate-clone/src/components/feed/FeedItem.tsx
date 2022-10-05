import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ICategory } from '../../interfaces/ICategory';
import { todoSelector } from '../../stores/todo';
import CategoryButton from './CategoryButton';
import InputForm from './InputForm';
import TodoItem from './TodoItem';

const FeedItem = ({ category }: { category: ICategory }) => {
  const items = useRecoilValue(todoSelector(category.label));
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <CategoryButton category={category} setOpen={setOpen} />
      {items.map((item) => (
        <TodoItem item={item} key={item.label} />
      ))}
      {open && <InputForm category={category} setOpen={setOpen} />}
    </>
  );
};

export default FeedItem;
