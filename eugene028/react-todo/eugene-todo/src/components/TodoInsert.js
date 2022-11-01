import React from 'react';
import {MdAdd} from 'react-icons/md';
import {useState, useCallback} from 'react';
import {
    TodoInsertForm,
    SubmitButton,
} from './styledComponent';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value, false);
            setValue('');
            e.preventDefault();
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