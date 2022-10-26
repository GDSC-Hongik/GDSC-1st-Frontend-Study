import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ICategory } from '../../interfaces/ICategory';
import { todosByCategory } from '../../stores/todo';
import CategoryButton from './CategoryButton';
import InputForm from './InputForm';
import TodoItem from './TodoItem';

const FeedItemList = ({ category }: { category: ICategory }) => {
  const items = useRecoilValue(todosByCategory(category.label));
  const [editorOpened, setEditorOpened] = useState<boolean>(false);

  return (
    <>
      <CategoryButton category={category} setOpen={setEditorOpened} />
      {items.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
      {editorOpened && (
        <InputForm category={category} setOpen={setEditorOpened} />
      )}
    </>
  );
};

export default FeedItemList;
