import React from "react";

const TodoItem = (props) => {
    const deleteItem = () => { //상속 이용하여 투두 제거
        var tmp = props.todoList.filter((element)=> element.id !== props.itemId);
        props.setTodoList(tmp);
    }
    return (
        <div className="item-box">
            <input className="Completed" type="checkbox" defaultChecked={false}/>
            {props.item}
            <button className="Xbtn" onClick={deleteItem}>🍑</button>
        </div>
    );
};

export default TodoItem;