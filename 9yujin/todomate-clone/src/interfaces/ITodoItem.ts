import { ICategory } from './ICategory';

export interface ITodoItem {
  label: string;
  isDone: boolean;
  category: ICategory;
}
