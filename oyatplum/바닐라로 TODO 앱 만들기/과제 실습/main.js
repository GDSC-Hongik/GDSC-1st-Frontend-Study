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