import { atom } from 'recoil';

const selectedProfileState = atom<string>({
  key: 'selectedProfile',
  default: 'user1',
});

export default selectedProfileState;
