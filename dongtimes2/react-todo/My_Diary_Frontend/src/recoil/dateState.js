import { atom } from 'recoil';

const selectedDateState = atom({
  key: 'selectedDate',
  default: {
    year: '',
    month: '',
    date: '',
  },
});

export default selectedDateState;
