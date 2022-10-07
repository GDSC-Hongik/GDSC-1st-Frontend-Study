import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const InputBox = ({ todoList, setTodoList }) => {
    
    // useEffect(() => {  // todoList가 변했을때만 실행
    //     console.log(todoList);
    // }, [todoList]);

    const [text, setText] = useState('');
    const inputRef = useRef(null);

    //input에 입력한 값 가져오기
    const onChangeInput = (e) => { //input이 변화하면 <input ../>의 value값 가져오기
        setText(e.target.value);
    };
    
    
    const onClickAddButton = () => {  //버튼 눌렀을 때,
        //todoItemList에 값 추가
        const nextTodoList = todoList.concat({ //인자로 받은 값을 배열에 추가하여 새로운 배열 반환
            id: todoList.length, //각 todo 아이템마다의 식별자(배열 길이)
            text, //각 todo 아이템의 내용
        });
        setTodoList(nextTodoList);
        

        //input 값 초기화 및 포커싱
        setText(''); //입력된 값 지우고
        inputRef.current.focus(); //input에 다시 focusing(useRef Hook사용)
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

// props의 타입 강제하기
InputBox.propTypes = {
  todoList: PropTypes.arrayOf( //todoList는 배열
    PropTypes.shape({ //todoList의 원소는 객체
      id: PropTypes.number.isRequired, //숫자
      text: PropTypes.string.isRequired, //문자열
    }).isRequired
  ),
  setTodoList: PropTypes.func.isRequired, //함수
};

export default InputBox;