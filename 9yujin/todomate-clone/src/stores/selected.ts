import { atom } from 'recoil';

const selectedState = atom<string>({
  key: 'selected',
  default: 'user1',
});

export default selectedState;
