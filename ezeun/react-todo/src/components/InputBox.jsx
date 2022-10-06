import React, { useRef, useState } from 'react';

const InputBox = () => {

    const [text, setText] = useState('');
    const inputRef = useRef(null);

    const onChangeInput = (e) => {
        setText(e.target.value);
    };
    
    const onClickAddButton = () => { 
        setText(''); 
        inputRef.current.focus(); 
    };
    
    return (
        <div className="todoapp__inputbox">
            {/* 아이템 내용 입력 input */}
            <input
                type="text"
                name="todoItem"
                value={text}
                ref={inputRef}
                placeholder="할 일을 입력해주세요"
                className="todoapp__inputbox-inp"
                onChange={onChangeInput}
            />
            {/* 입력 후 아이템 추가 버튼 */}
            <button
                type="submit"
                className="todoapp__inputbox-add-btn"
                onClick={onClickAddButton}
            >
                추가
            </button>
        </div>
    );
};

export default InputBox;