import { atom } from 'recoil';

const settingState = atom({
  key: 'settingState',
  default: {
    image: '',
  },
});

export default settingState;
