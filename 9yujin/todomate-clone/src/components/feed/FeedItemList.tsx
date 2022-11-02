import { useRecoilValue } from 'recoil';
import { ICategory } from '../../interfaces/ICategory';
import { editingState } from '../../stores/editing';
import { todosByCategory } from '../../stores/todo';
import CategoryButton from './CategoryButton';
import InputForm from './InputForm';
import TodoItem from './TodoItem';

const FeedItemList = ({ category }: { category: ICategory }) => {
  const todos = useRecoilValue(todosByCategory(category.label));
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
