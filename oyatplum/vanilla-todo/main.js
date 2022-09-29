let itemList = [];


const makeTodoItem = () => { // 로컬 스토리지에서 값을 가져옴

  const todoList = document.getElementById("todo-list");
  const doneList = document.getElementById("done-list");

  const storedTodo = localStorage.getItem("itemList");

  
  todoList.innerHTML = ""; // 초기화
  doneList.innerHTML = "";
  
  
  if (storedTodo) { // 저장된 todo 존재하는지 확인

    itemList = JSON.parse(storedTodo);

    itemList.forEach((savedItem) => {

      const item = document.createElement("li");

      const itemText = document.createElement("span");
      itemText.className = "item-text";

      itemText.addEventListener("click", toggleItem);
      itemText.innerText = savedItem.text;

      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-button";

      deleteButton.addEventListener("click", removeItem);
      deleteButton.innerText = "🍒";

      item.appendChild(itemText);
      item.appendChild(deleteButton);

      if (!savedItem.isDone) {
        todoList.appendChild(item);
        // deleteButton.appendChild(todoList);
      } else {
        doneList.appendChild(item);
        //deleteButton.appendChild(item);
      }
    });
  }
  countItem();
};


const addTodoList = () => { // 새로운 todo 입력 받을 때 로컬 스토리지에 추가
  //event.preventDefault;
  const inputItem = {
    text: document.getElementById("input-text").value,
    id: Date.now(),
    isDone: false,
  };

  if (inputItem.text) {
    itemList = [...itemList, inputItem];
    localStorage.setItem("itemList", JSON.stringify(itemList)); // 로컬 스토리지에 저장
    makeTodoItem();
  }
};



const removeItem = (t) => { // 로컬 스토리지에서 값 삭제
  const filteredList = itemList.filter(
    (inputItem) =>
      inputItem.text !== t.target.parentNode.innerText.slice(0, -2)
  );
  localStorage.setItem("itemList", JSON.stringify(filteredList)); // 로컬 스토리지 갱신
  makeTodoItem();
};

const toggleItem = (t) => { // isDone의 상태 toggle
  const Object = itemList.find(
    (inputItem) =>
      inputItem.text === t.target.innerText
  );
  Object.isDone = !Object.isDone;
  localStorage.setItem("itemList", JSON.stringify(itemList)); // 로컬 스토리지 갱신
  makeTodoItem();
};

const countItem = () => { // todo, done의 수 카운트
  const todoCount = document.getElementById("todo-count");
  todoCount.innerText = ` (${itemList.filter((item) => !item.isDone).length})`;

  const doneCount = document.getElementById("done-count");
  doneCount.innerText = ` (${itemList.filter((item) => item.isDone).length})`;
};

window.onload = makeTodoItem();