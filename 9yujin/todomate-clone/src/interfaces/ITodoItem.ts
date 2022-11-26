import { ICategory } from './ICategory';

export interface ITodoItem {
  label: string;
  id: string;
  isDone: boolean;
  category: ICategory;
}

/**
 * @type [selectedDate, selectedProfile]
 */
export type ITodoItemKey = [string, string];

/**
 * @type [selectedDate, selectedProfile, category label]
 */
//export type ITodoItemSelectorKey = [string, string, string];
export type ITodoItemSelectorParams = {
  todoItemKey: ITodoItemKey;
  categoryLabel: string;
};
