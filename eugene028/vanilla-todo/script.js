const todoInput = document.querySelector("input");
const todo = document.querySelector(".todo-box");
const submitBtn = document.getElementById("submitbtn");

let todoList = [];

function setting() {
    loadStorage(); 
    submitBtn.addEventListener("click", createList);
}
setting();


function loadStorage() 
{
    const storedTodo = localStorage.getItem("TODO");
    if(storedTodo != null)
    {
        const myTodoList = JSON.parse(storedTodo);
        for (let todo of myTodoList) 
        {
            const { text } = todo;
            const { checked } = todo;
            console.log(checked);
            printTodo(text, checked);
            storeTodo(text, checked);
        }
    }   
}

function createList(e)
{
    e.preventDefault();
    const todoValue = todoInput.value;
    if(todoValue =="")
        alert("할 일을 입력해주세요.")
    else
    {
        printTodo(todoValue, 0);
        storeTodo(todoValue, 0);
        todoInput.value = "";
    }
}


function storeTodo(todoValue, checkValue)
{
    const todoListObj = {
        text : todoValue,
        id : todoList.length + 1,
        checked : checkValue,
    };
    todoList.push(todoListObj);
    localStorage.setItem("TODO", JSON.stringify(todoList));
} 


function printTodo(todoValue, checkValue)  
{
    const li = document.createElement("li");
    const   span = document.createElement( "span");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    if (checkValue == 1)
    {
        span.InnerHTML = todoValue;
        li.appendChild(span);
        li.appendChild(delBtn);  
        li.id = todoList.length + 1;
        li.style.color = "#ccc";
        li.style.textDecoration="line-through";
        todo.appendChild(li);
    }
    else (checkValue == 0)
    {
        span.innerHTML = todoValue;
        li.appendChild(span);
        li.appendChild(delBtn); 
        li.id = todoList.length + 1;
        todo.appendChild(li);
    }
    span.addEventListener("click", checkTodo);
    delBtn.addEventListener("click", deleteTodo);
}

function deleteTodo(e)
{
    const {target : button} = e;
    const li = button.parentNode;
    todo.removeChild(li);
    todoList = todoList.filter((todo) => todo.id != Number(li.id));
    console.log(todoList);
    localStorage.setItem("TODO", JSON.stringify(todoList));
}

function checkTodo(e)
{
    const {target : span} = e;
    const li =  span.parentNode;
    li.style.color = "#ccc";
    li.style.textDecoration="line-through";
    console.log(li.id);
    todoList.forEach( currentElement => {
        if(currentElement.id ==  Number(li.id))
            currentElement.checked = 1;
    });
    console.log(todoList);
    localStorage.setItem("TODO", JSON.stringify(todoList));
}

