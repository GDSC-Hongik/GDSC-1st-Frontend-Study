import { atom } from 'recoil';

export const editingState = atom<string | null>({
  key: 'editing',
  default: null,
});
