import { atom } from 'recoil';

export const dateState = atom({
    key : 'dateState',
    default : new Date() 
}); 

export const todoState = atom({ 
    key: 'todoState',
    default: [],
  });

export const todoId = atom({
    key : "todoId",
    default : 0,
})

export const diaryState = atom({
    key : "diaryState",
    default : [],
})

export const diaryId = atom({
    key : "diaryId",
    default : 0,
})