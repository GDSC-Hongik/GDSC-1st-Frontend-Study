import { atom } from 'recoil';
//var defaultDate = todayDate.toLocaleString().slice(0,13).replace(/ /g,"");

export const dateState = atom({
    key : 'dateState',
    default : new Date() //전역상태의 초기
}); //date를 전역값으로 관리

export const todoState = atom({ //itom으로 저장. date값도 저장해야할까?
    key: 'todoState',
    default: [],
  });

export const todoId = atom({
    key : "todoId",
    default : 0,
})