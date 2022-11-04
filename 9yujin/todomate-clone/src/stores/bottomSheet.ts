import { atom } from 'recoil';
import { IBottomSheet } from '../interfaces/IBottomSheet';

export const bottomSheetState = atom<IBottomSheet>({
  key: 'bottomSheet',
  default: { selectedItem: null, isOpen: false },
});
