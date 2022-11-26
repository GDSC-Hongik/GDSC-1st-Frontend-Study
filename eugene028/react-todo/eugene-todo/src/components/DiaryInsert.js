import React from 'react';
import { useRecoilState } from 'recoil';
import { dateState } from './../stores/Atom';
import { useState, useCallback } from 'react';

const DiaryInsert = ({onInsert}) => {
    const [date, setDate] = useRecoilState(dateState);
    const [localContent, setLocalContent] = useState(localStorage.getItem('name')); //수정하기 textarea값 저장 위함
    const [value, setValue] = useState('');
    const [isEdit, setIsEdit] = useState(false); //수정버튼 일단은 false 
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = e => {
            if(value === "")
                window.alert('빈칸은 안돼요!');
            else {
                onInsert(value, date.getDate(), date.getMonth() + 1, date.getFullYear());
                setValue('');
                e.preventDefault();
            }
    }
    const handleEdit = () => {
        window.confirm("제목을 수정하시겠습니까?");
      }
    const toggleIsEdit = () => setIsEdit(!isEdit); //호출되면 setIsEdit()이 되고 수정상태 변경

    return (
        <>
            <div value = {value} onChange ={onChange} className="nameBox">
                { //수정중인 상태 ? 수정폼 보여줌, 수정중인 상태 아니면 컨텐츠 보여주기 
                isEdit 
                    ? (<>
                        <textarea className = "nameText"
                            value = {localContent} //수정내용 기본값 설정
                            onChange={(e) => setLocalContent(e.target.value)}
                        ></textarea>
                            </>) :
                            <>
                            {value}
                        </>
                }
        </div>
        <div>
            {
                isEdit
                ? (<>
                        <button className = "editButton" onClick ={handleEdit}>수정완료</button>
                </>)
                : <>
                        <button className = "editButton" onClick = {toggleIsEdit}>수정하기</button>
                </>
            }
        </div>
    </>
    )
};


export default DiaryInsert;