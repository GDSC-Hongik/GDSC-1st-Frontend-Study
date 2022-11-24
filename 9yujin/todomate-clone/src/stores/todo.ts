import { atom, atomFamily, selectorFamily } from 'recoil';
import {
  ITodoItem,
  ITodoItemKey,
  ITodoItemSelectorKey,
} from '../interfaces/ITodoItem';

const initialState: ITodoItem[] = [
  {
    label: '과제 시작하기',
    isDone: true,
    id: '1',
    category: {
      label: 'GDSC',
      color: '#ae68ec',
    },
  },
  {
    label: '과제 완료 토글 구현하기',
    isDone: false,
    id: '2',
    category: {
      label: 'GDSC',
      color: '#ae68ec',
    },
  },
  {
    label: '검정치마 노래듣기',
    isDone: false,
    id: '3',
    category: {
      label: '할일',
      color: '#dc7b82',
    },
  },
];

export const todoState = atomFamily<ITodoItem[], ITodoItemKey>({
  key: 'todo',
  default: [],
});

export const todosByCategory = selectorFamily<
  ITodoItem[],
  ITodoItemSelectorKey
>({
  key: 'todoSelector',
  get:
    (params: ITodoItemSelectorKey) =>
    ({ get }) =>
      get(todoState([params[0], params[1]])).filter(
        (todo) => todo.category.label === params[2],
      ),
});
