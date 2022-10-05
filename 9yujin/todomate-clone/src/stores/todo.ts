import { atom, selectorFamily } from 'recoil';
import { ITodoItem } from '../interfaces/ITodoItem';

const initialState: ITodoItem[] = [
  {
    label: '과제 시작하기',
    isDone: true,
    category: {
      label: 'GDSC',
      color: '#ae68ec',
    },
  },
  {
    label: '과제 완료 토글 구현하기',
    isDone: false,
    category: {
      label: 'GDSC',
      color: '#ae68ec',
    },
  },
  {
    label: '검정치마 노래듣기',
    isDone: false,
    category: {
      label: '할일',
      color: '#dc7b82',
    },
  },
];

export const todoState = atom<ITodoItem[]>({
  key: 'todo',
  default: initialState,
});

export const todoSelector = selectorFamily<ITodoItem[], string>({
  key: 'todoSelector',
  get:
    (categoryName: string) =>
    ({ get }) =>
      get(todoState).filter((todo) => todo.category.label === categoryName),
});
