import { useState } from "react";
import TodoItem from "./todoitem";

const Todo = () =>{
    const [inputValue, setInputValue] = useState('')
    const [todoList, setTodoList] = useState([])
    const addItem = () =>{ //투두 입력 받아서 리스트에 넘겨줄 때 id, title, completed 속성 추가
        setTodoList([...todoList,{
            id: Date.now()+Math.random(),
            title: inputValue,
            completed: false
        }])
    setInputValue(""); //입력 창 초기화
    };
    return(
        <div className="todo-box">
            <h2>To Do</h2>
            <input type = "text" value = {inputValue} onChange = {(event)=>setInputValue(event.target.value)}  placeholder = "Enter your todo." />
            <button onClick={addItem}>+</button>
            {todoList.map((e)=><TodoItem key ={e.id} itemId = {e.id} item = {e.title} todoList = {todoList} setTodoList = {setTodoList}/>)}

        </div>
    );
};

export default Todo;