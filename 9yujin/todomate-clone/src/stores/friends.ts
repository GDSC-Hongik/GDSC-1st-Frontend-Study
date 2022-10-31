import { atom } from 'recoil';
import { IFriend } from '../interfaces/IFriend';

const initialState: IFriend[] = [
  {
    userId: 'user1',
    name: '규진',
    profileImage: '🐬',
    statusMessage: '어쩌다 갓생',
  },
  {
    userId: 'user2',
    name: '유진',
    profileImage: 'https://i.ibb.co/MgmDcz1/1021805078815985664.webp',
    statusMessage: '주니어 PM이 되기 위한 노력',
  },
  {
    userId: 'user3',
    name: '김테스트',
    profileImage: '',
    statusMessage: 'user3',
  },
  {
    userId: 'user4',
    name: '이테스트',
    profileImage: '',
    statusMessage: 'user4',
  },
  {
    userId: 'user5',
    name: '박테스트',
    profileImage: '',
    statusMessage: 'user5',
  },
  {
    userId: 'user6',
    name: '최테스트',
    profileImage: '',
    statusMessage: 'user6',
  },
];

const friendsState = atom<IFriend[]>({
  key: 'friends',
  default: initialState,
});

export default friendsState;
