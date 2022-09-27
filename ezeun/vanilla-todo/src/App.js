//import './App.css';

const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
//const todoInput = doucment.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos"; // 같은 변수명 반복 사용될 때

let toDos = []; //let : 업데이트 가능

function saveToDos() { // toDos배열의 내용을 localStorage에 넣기
    //localStorage에는 string만 저장 가능(배열 불가능)
    //JSON.stringify()으로 toDos배열 내용을 string으로 만들어서 넣기
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement; //target은 button이고 button의 parent는 li
    //console.log(typeof li.id); -> string
    li.remove();
    //toDo.id는 number이고 li.id는 string이므로 parseInt
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //현재 지우려는 것과 id 다른 것들만 남기기
    saveToDos();
}

function paintToDo(newTodoObj) { //Adding ToDos
    //console.log(newTodo);
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;

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
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), //localStorage에서의 delete를 위해 id값 지정
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); //string을 배열 형태로 원상복구
    toDos = parsedToDos; //이전의 ToDos들 복원하기
    parsedToDos.forEach(paintToDo);
}