const form = document.querySelector("form");
const toDoInput = form.querySelector(".inputText");
const toDoList = document.querySelector("toDoList");
const submitBtn = document.querySelector("inputButton");

console.log(toDoInput);
const TODOS_LS = "toDos";

function paintToDo(text) {
  console.log(text);
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.value = "X";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}

function init() {
  loadToDos();
  form.addEventListener("submit", handleSubmit);
}
