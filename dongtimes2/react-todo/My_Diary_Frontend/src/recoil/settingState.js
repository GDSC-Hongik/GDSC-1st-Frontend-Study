import { atom } from 'recoil';

const settingState = atom({
  key: 'settingState',
  default: {
    font: '',
  },
});

export default settingState;
