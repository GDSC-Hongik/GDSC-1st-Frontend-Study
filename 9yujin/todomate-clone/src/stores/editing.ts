import { atom } from 'recoil';

const editingState = atom<string | null>({
  key: 'editing',
  default: null,
});

export default editingState;
