const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // JSON.stringify 값을 스트링으로 변환
}                                                       // JSON.parse     스트링을 값으로 변환

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos()
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;  //newTodo값을 span에 text추가해라 (newTodo는 input에 적은 text 복사해둔것))
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo)
  li.appendChild(span); // li 안에 span 이라는 애를 넣어라. 마지막줄에
  li.appendChild(button);
  toDoList.appendChild(li);  //toDoList에 제일 아래에 추가해라  li 를
}

function ToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value; // 아래에서 지워도 위에있는건 복사 한것이기에 사라지지 않음
  toDoInput.value = "";
  const newTodoObj = {
    text : newTodo,
    id : Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", ToDoSubmit)

function sayHello(item){
  console.log("this is the turn of ", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !== null){
  const parsedToDos =JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);  //parsedToDos 가 가지고있는item 만큼 sayHello 를 해라 
  // parsedToDos.forEach((item) => console.log("this is the turn of ", item)); 위의 펑션 sayHello를 지우고 이렇게도 가능

  }
//forEach는 array의 각 item의 대한 function을 실행 array가 가지고있는 갯수 만큼만
