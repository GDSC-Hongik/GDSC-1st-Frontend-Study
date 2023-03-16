import React from 'react';
import { useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { dateState, diaryState, Editcheck } from '../stores/Atom';
import { TextArea } from './styledComponent';
import { DiaryBtnCSS } from './styledComponent';
import DiaryView from './DiaryView';
import { useEffect } from 'react';
import styled from 'styled-components';

const DiaryText = ({onInsert ,onRemove}) => {
    const [isEdit, setEdit] = useRecoilState(Editcheck);
    const date = useRecoilValue(dateState);
    const [isPower, setPower] = useState(false);
    const [body, setBody] = useState('');
    const diary = useRecoilValue(diaryState);

    const onSubmit = (e) => {
        if (body === "")
            window.alert("아무 내용도 입력하지 않았어요.");
        else{
            console.log("제출이벤트");
            onInsert( body, date.getDate(), date.getMonth() + 1, date.getFullYear());
            setBody('');
            setEdit(false);
            e.preventDefault();
        }
    }

    const onChange = (e) => {
        setBody(e.target.value);
        console.log(body);
    }

    let selectedDiaryTodo = diary.filter(
        diary => (diary.day === date.getDate() && diary.month === date.getMonth() + 1 && diary.year === date.getFullYear())
      )
    
    const onEdit = (e) => {
        console.log("왜 안찍혀;;")
        console.log(isEdit)
        setEdit(true);
        setPower(true);
        setBody(selectedDiaryTodo[0].text);
    }

    const onEditSubmit = (e) =>{
        const id = selectedDiaryTodo[0].id;
        const storedDiary = localStorage.getItem('DIARY');
        const myDiaryList = JSON.parse(storedDiary);
        const newList = myDiaryList.map(diary => diary.id === id ? {...diary, text : body} : diary)
        localStorage.setItem('DIARY', JSON.stringify(newList));
        setEdit(false);
        setPower(false);
        e.preventDefault();
    }

    useEffect(() => {
        if (selectedDiaryTodo.length > 0) {
            setEdit(false);
        }
    },[])


    return (
        <div>
            {(isEdit || selectedDiaryTodo.length === 0 ) ?
            <>
                <TextArea onChange = {onChange} value = {body} type = 'textarea'/>
                {isPower?
                <>
                    <DiaryBtnCSS onClick = {onEditSubmit}>일기 수정하기</DiaryBtnCSS>
                </>:
                <>
                    <DiaryBtnCSS type = 'submit' onClick = {onSubmit}>일기 저장하기</DiaryBtnCSS>
                </>}
            </>
            :
            <>
                <DiaryView id = {selectedDiaryTodo[0].id}/>
                <FlexBox>
                    <DiaryBtn onClick = {onEdit}>일기 수정하기</DiaryBtn>
                    <DiaryBtn onClick = {() => {
                        onRemove(selectedDiaryTodo[0].id)
                        setBody("")
                        setPower(false);}
                        }>일기 삭제하기</DiaryBtn>
                </FlexBox>
            </>}
            
        </div>
    );
};

const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
`;

const DiaryBtn = styled.button`
    width : 45%;
    font-size: 1rem;
    border : none;
    background : rgba(255, 255, 255, 0.4);
    border-radius : 10px;
    padding : 0.5rem;
    margin : 0.5rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background: pink;
    }
    color : black;
    text-decoration: none;
    cursor : pointer;
`;

export default DiaryText;