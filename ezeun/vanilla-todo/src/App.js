//import './App.css';

const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
//const todoInput = doucment.querySelector("#todo-form input");
const todoBtn = todoForm.querySelector("button")
const todoList = document.querySelector("#todo-list");
const doneList = document.querySelector("#done-list");

const TODOS_KEY = "toDos"; // 같은 변수명 반복 사용될 때
const DONES_KEY = "dones";

let toDos = []; //let : 업데이트 가능
let dones = [];

function saveToDos() { // toDos배열의 내용을 localStorage에 넣기
    //localStorage에는 string만 저장 가능(배열 불가능)
    //JSON.stringify()으로 toDos배열 내용을 string으로 만들어서 넣기
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function saveDones() {
    localStorage.setItem(DONES_KEY, JSON.stringify(dones));
}

function cancelDone(event) { //deleteDone, paintToDo
    deleteDone(event);

    const li = event.target.parentElement;
    const newTodoObj = {
        text: li.querySelector("span").innerText,
        id: Date.now(), //localStorage에서의 delete를 위해 id값 지정
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function deleteDone(event) {
    const li = event.target.parentElement; //target은 button이고 button의 parent는 li
    //console.log(typeof li.id); -> string
    li.remove();
    //done.id는 number이고 li.id는 string이므로 parseInt
    dones = dones.filter((done) => done.id !== parseInt(li.id)); //현재 지우려는 것과 id 다른 것들만 남기기
    saveDones();
    //alert("수고했어요");
}
function paintDone(newDoneObj) {
    const li = document.createElement("li");
    li.id = newDoneObj.id;
    const span = document.createElement("span");
    span.innerText = newDoneObj.text;
    span.style.textDecorationLine = "line-through"; //취소선으로 표시

    const button1 = document.createElement("button");
    button1.innerText = "취소";
    button1.addEventListener("click", cancelDone); // TODO로 다시 올리기
    button1.style.backgroundColor = "rgb(176, 178, 104)";

    const button2 = document.createElement("button");
    button2.innerText = "삭제";
    button2.style.backgroundColor = "rgb(221, 140, 134)";
    button2.addEventListener("click", deleteDone); // DONE에서도 완전히 삭제하기

    li.appendChild(span); //li 안에 span 넣기
    li.appendChild(button1); //li 안에 button 넣기
    li.appendChild(button2); //li 안에 button 넣기
    doneList.appendChild(li); //doneList 안에 li 넣기
}

function deleteToDo(event) {
    const li = event.target.parentElement; //target은 button이고 button의 parent는 li
    //console.log(typeof li.id); -> string
    li.remove();
    //toDo.id는 number이고 li.id는 string이므로 parseInt
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //현재 지우려는 것과 id 다른 것들만 남기기
    saveToDos();

    const newDoneObj = {
        text: li.querySelector("span").innerText,
        id: Date.now(), //localStorage에서의 delete를 위해 id값 지정
    };
    dones.push(newDoneObj);
    paintDone(newDoneObj);
    saveDones();
}
function paintToDo(newTodoObj) { //Adding ToDos
    //console.log(newTodo);
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;

    const button = document.createElement("button");
    button.innerText = "완료";
    button.style.backgroundColor = "rgb(134, 169, 221)";
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

todoForm.addEventListener("submit", handleToDoSubmit); //엔터로 할 일 추가
todoBtn.addEventListener("click", handleToDoSubmit); //버튼으로 할 일 추가

const savedToDos = localStorage.getItem(TODOS_KEY);
const savedDones = localStorage.getItem(DONES_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); //string을 배열 형태로 원상복구
    toDos = parsedToDos; //이전의 ToDos들 복원하기
    parsedToDos.forEach(paintToDo);
}
if (savedDones !== null) {
    const parsedDones = JSON.parse(savedDones);
    dones = parsedDones;
    parsedDones.forEach(paintDone);
}