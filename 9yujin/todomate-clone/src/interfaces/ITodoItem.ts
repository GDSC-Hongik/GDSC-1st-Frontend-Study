import { ICategory } from './ICategory';

export interface ITodoItem {
  label: string;
  id: string;
  isDone: boolean;
  category: ICategory;
}

export type ITodoItemKey = [string, string];
export type ITodoItemSelectorKey = [string, string, string];
