const button = document.getElementById('button'); 
const input = document.getElementById('input'); 
const list = document.getElementById('list'); 
const t = 1;

button.addEventListener('click', clickButton); 

function clickButton() { 
  const add = document.createElement('li');
  add.setAttribute("id", "li"+t);
  add.innerHTML = input.value;
  add.innerHTML += "<button type='button' onclick='remove("+t+")'>✔</button>";
  list.appendChild(add);
  t++;
}

function remove(t) {
 
  const li = document.getElementById('li'+t);
  list.removeChild(li);
}
/*로컬 저장소 기능 구현은 아직*/