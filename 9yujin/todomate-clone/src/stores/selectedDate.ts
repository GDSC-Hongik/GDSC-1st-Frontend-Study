import dayjs from 'dayjs';
import { atom } from 'recoil';

const selectedDateState = atom<string>({
  key: 'selectedDate',
  default: dayjs().format('MM/DD/YY'),
});

export default selectedDateState;
