const todoform = document.getElementById("todo-form");
const todoInput = todoform.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todos = [];
const TODOS_LOCAL = "todoList";

function saveTodos() {
    localStorage.setItem(TODOS_LOCAL, JSON.stringify(todos));
}

function handleTodoDelete(event) {
    li = event.target.parentElement;
    todos = todos.filter(item => item.id !== parseInt(li.id));
    saveTodos();
    li.remove();
}

function printTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const DeleteTodo = document.createElement("span");
    DeleteTodo.classList.add("deleteTodo");
    DeleteTodo.innerText = "❌";
    DeleteTodo.addEventListener("click", handleTodoDelete);
    li.appendChild(span);
    li.appendChild(DeleteTodo);
    todoList.appendChild(li);
}

function handleTodoAdd(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    printTodo(newTodoObj);
    saveTodos();

    todoList.style.transitionDuration = `0s`;
    todoList.style.transform = `translate(0, ${(todoList.scrollHeight - 30)}px)`;
}

function handlePointerOver() {
    todoList.style.transitionDuration = `1.2s`;
    todoList.style.transform = `translate(0, 0)`;
}    

function handlePointerLeave() {
    const height = todoList.scrollHeight;
    todoList.style.transform = `translate(0, ${(height - 30)}px)`;
}

const saveTodo = localStorage.getItem(TODOS_LOCAL);

if(saveTodo != null) {
    const parsedTodos = JSON.parse(saveTodo);
    todos = parsedTodos;
    parsedTodos.forEach(printTodo);
}

if(todoList.scrollHeight - 30 < 0) {
    todoList.style.transform = `translate(0, 7px)`;
} else {
    todoList.style.transform = `translate(0, ${(todoList.scrollHeight - 30)}px)`;
}
todoform.addEventListener("submit", handleTodoAdd);
todoList.addEventListener("pointerover", handlePointerOver);
todoList.addEventListener("pointerleave", handlePointerLeave);