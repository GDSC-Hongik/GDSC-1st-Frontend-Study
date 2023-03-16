import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { diaryTitle, diaryState } from '../stores/Atom';
import styled from'styled-components';

const DiaryView = ({id}) => {
    const [title, setTitle] = useRecoilState(diaryTitle);
    const [diary, setDiary] = useRecoilState(diaryState);
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
    },[])

    let selectedDiaryTodo = diary.filter(
        diary => (diary.id === id)
    )

    return (
        <DiaryViewText>
            {selectedDiaryTodo[0].text}
        </DiaryViewText>
    );
};

const DiaryViewText = styled.div`
    font-size: 20px;display : flex;
    width : 90%;
    height : 250px;
    margin : 1rem auto;
    padding : 20px;
    border-radius : 10px;
    border : none;
`

export default DiaryView;