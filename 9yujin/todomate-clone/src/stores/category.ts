import { atom } from 'recoil';
import { ICategory } from '../interfaces/ICategory';

const initialState: ICategory[] = [
  {
    label: 'GDSC',
    color: '#ae68ec',
  },
  {
    label: '할일',
    color: '#dc7b82',
  },
];

export const categoryState = atom<ICategory[]>({
  key: 'category',
  default: initialState,
});
