import { ICategory } from './ICategory';

export interface ITodoItem {
  label: string;
  id: string;
  isDone: boolean;
  category: ICategory;
}
