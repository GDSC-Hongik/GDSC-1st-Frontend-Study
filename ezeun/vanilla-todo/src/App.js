//import './App.css';

const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
//const todoInput = doucment.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

function deleteToDo(event) {
    const li = event.target.parentElement; //target은 button이고 button의 parent는 li
    li.remove();
}

function paintToDo(newTodo) { //Adding ToDos
    //console.log(newTodo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");
    button.innerText = "완료";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //li 안에 span 넣기
    li.appendChild(button); //li 안에 button 넣기
    todoList.appendChild(li); //todoList 안에 li 넣기
}

function handleToDoSubmit(event) { //엔터 눌렀을 때
    event.preventDefault(); //페이지 새로고침 방지
    //console.log(todoInput.value);
    const newTodo = todoInput.value; //값 저장
    todoInput.value = ""; //입력 칸 비우기
    paintToDo(newTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit); 
