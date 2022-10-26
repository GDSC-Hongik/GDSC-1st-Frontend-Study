import { ITodoItem } from './ITodoItem';

export interface IBottomSheet {
  selectedItem: ITodoItem | null;
  isOpen: boolean;
}
