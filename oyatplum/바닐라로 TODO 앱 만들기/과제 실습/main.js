let itemList = [];

// 새로운 할 일을 입력 받을 때 로컬 스토리지에 추가
const addTodoList = () => {
  //event.preventDefault;
  const inputObject = {
    id: Date.now(),
    text: document.getElementById("input-text").value,
    isDone: false,
  };
  if (inputObject.text) {
    // 빈 입력은 받지 않음
    itemList = [...itemList, inputObject];
    localStorage.setItem("itemList", JSON.stringify(itemList)); // 로컬 스토리지에 저장
    //renderTodoItem();
  }
};
// isDone의 상태를 반대로 바꿔 준다
const toggleItem = (e) => {
  const itemObject = itemList.find(
    (inputObject) => inputObject.text === e.target.innerText
  );
  itemObject.isDone = !itemObject.isDone;
  localStorage.setItem("itemList", JSON.stringify(itemList)); // 로컬 스토리지 갱신
  //renderTodoItem();
};

// 로컬 스토리지에서 값을 삭제한다
const removeItem = (e) => {
  const filteredList = itemList.filter(
    (inputObject) =>
      inputObject.text !== e.target.parentNode.innerText.slice(0, -2)
  );
  localStorage.setItem("itemList", JSON.stringify(filteredList)); // 로컬 스토리지 갱신
  //renderTodoItem();
};

// todo, done의 수 카운트
const countItem = () => {
  const todoCount = document.getElementById("todo-count");
  todoCount.innerText = ` (${itemList.filter((item) => !item.isDone).length})`;

  const doneCount = document.getElementById("done-count");
  doneCount.innerText = ` (${itemList.filter((item) => item.isDone).length})`;
};

//window.onload = renderTodoItem();