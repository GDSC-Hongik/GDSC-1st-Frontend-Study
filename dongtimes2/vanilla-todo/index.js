const handleTodo = () => {
  const inputElement = document.getElementById('inputElement');
  const progressList = document.getElementById('progressList');
  const completeList = document.getElementById('completeList');

  const todoObject = document.createElement('li');
  const todoElements = document.createElement('div');
  const completeButton = document.createElement('input');
  const todoName = document.createElement('div');
  const deleteButton = document.createElement('button');

  completeButton.setAttribute('type', 'checkbox');
  deleteButton.setAttribute('type', 'button');
  todoElements.setAttribute('class', 'todo-element');

  todoName.innerHTML = inputElement.value;
  deleteButton.innerHTML = '삭제';

  if (inputElement.value.length > 0) {
    todoElements.appendChild(completeButton);
    todoElements.appendChild(todoName);
    todoElements.appendChild(deleteButton);
    todoObject.appendChild(todoElements);
    progressList.appendChild(todoObject);

    inputElement.value = '';
  } else {
    window.alert('내용을 입력하세요');
  }

  completeButton.addEventListener('click', () => {
    if (completeButton.checked) {
      completeList.appendChild(todoObject);
    } else {
      progressList.appendChild(todoObject);
    }
  });

  deleteButton.addEventListener('click', () => {
    todoObject.remove();
  });
};
