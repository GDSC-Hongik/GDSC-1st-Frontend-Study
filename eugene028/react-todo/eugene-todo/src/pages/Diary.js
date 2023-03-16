import React, { useState, useEffect } from 'react';
import TodoTemplate from '../components/TodoTemplate';
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";
import {
    MyDatePicker, DateSetting,
  } from '../components/styledComponent';
import DiaryTop from '../components/DiaryTop';
import useDiary from '../hooks/useDiary';
import DiaryText from '../components/DiaryText';
import { useRecoilState } from 'recoil';
import { diaryState, diaryId } from '../stores/Atom';
import { dateState } from '../stores/Atom';
import styled from 'styled-components';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { NavLink } from "react-router-dom";

const Diary = () => {
    const [date, setDate] = useRecoilState(dateState);
    const [diary, setDiary] = useRecoilState(diaryState);
    const [weather, setWeather] = useState('');
    const [id, setId] = useRecoilState(diaryId);
    const { diaryInsert, diaryRemove } = useDiary();

    const loadData = () => {
        const storedTodo = localStorage.getItem("DIARY"); 
        if (storedTodo != null){//만약 저장공간이 비지 않았더라면
          const myDiaryList = JSON.parse(storedTodo); //받아온 데이터를 파싱하고
          setDiary(myDiaryList);
          //setId(myDiaryList[(myDiaryList.length - 1)].id + 1); //수정을 대비하여 Id를 가져온다.
      }
    }
    
    useEffect(() => {
        loadData();
        console.log("Wlrglsk?")
    },[])

    return (
        <DiaryBox>
            <TodoTemplate>
                <BackIcon to = {'/'}>
                    <AiOutlineArrowLeft className = "back" color ="white"/>
                </BackIcon>
                <DateSetting>
                    <span>날짜 설정하기</span>
                    <MyDatePicker 
                        dateFormat = "yyyy/MM/dd" 
                        selected = {date} 
                        onChange = {date => setDate(date)}
                        locale = { ko } 
                        placeholderText='Weeks start on Monday' />
                </DateSetting>
                    <DiaryTop weatherProps = {weather}/>
                    <DiaryText onInsert={diaryInsert} onRemove = {diaryRemove}/>
            </TodoTemplate>
        </DiaryBox>
    );
};

const DiaryBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const BackIcon = styled(NavLink)`
    background-color: transparent;
    border: none;
    position: absolute;
    left: 10px;
    margin-left: 5px;
    scale: 1.4;
`

export default Diary;