const form = document.querySelector("form");
const input = document.querySelector(".inputText");
const toDoList = document.querySelector(".toDoList");
const submitBtn = document.querySelector("inputButton");

const TODOS_LS = "toDos";

loadToDos();
form.addEventListener("submit", handleSubmit);

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.addEventListener("click", handleDelete);
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  paintColor();
}

function paintColor() {
  //가독성을 위해 노드 추가/삭제시 홀/짝으로 구분해서 다른 색 칠함.
  const listItems = toDoList.getElementsByTagName("li");
  console.log(listItems.length);
  for (var i = 0; i < listItems.length; i++) {
    if (i % 2) listItems[i].style.backgroundColor = "#e6b05a";
    else listItems[i].style.backgroundColor = "bisque";
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  if (currentValue.length) paintToDo(currentValue); // 한글자도 안적으면 추가 안함.
  input.value = ""; //input 초기화. 이거 없으면 버튼클릭시 초기화가 안됨.
}
function handleDelete(event) {
  event.preventDefault();
  const li = event.target.parentElement;
  li.remove();
  paintColor();
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}
