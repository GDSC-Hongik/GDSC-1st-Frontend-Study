import React from 'react';
import { MdAdd } from 'react-icons/md';
import {useState, useCallback} from 'react';
import { useRecoilState } from 'recoil';
import { dateState } from '../stores/Atom'
import {
    TodoInsertForm,
    SubmitButton,
} from './styledComponent';

const TodoInsert = ({onInsert}) => {
    const [date, setDate] = useRecoilState(dateState);
    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);
    
    const onSubmit = useCallback(
        e => {
            if(value ==="")
                window.alert("빈칸은 안돼요!")
            else {
                onInsert(value, false, date.getDate(), date.getMonth()+1, date.getFullYear());
                setValue('');
                e.preventDefault();
            }
        },
        [onInsert, value],
    );
    return (
        <TodoInsertForm onSubmit={onSubmit}>
            <input placeholder='할 일을 입력해주세요'
            value = {value}
            onChange = {onChange}
            />
            <SubmitButton type = 'submit'><MdAdd /></SubmitButton>
        </TodoInsertForm>
    );
};

export default TodoInsert;