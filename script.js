const form = document.querySelector("form");
const input = document.querySelector(".inputText");
const toDoList = document.querySelector(".toDoList");
const submitBtn = document.querySelector("inputButton");

const TODOS_LS = "toDos";

loadToDos();
form.addEventListener("submit", handleSubmit);

function paintToDo(text) {
  console.log(text);
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.value = "X";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  console.log(toDoList);
  toDoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintToDo(currentValue);
  input.value = "";
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}
