const loginForm = document.getElementById("login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logout-form");
const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const clockStyle = document.querySelector("h2#clock").style;

const HIDDEN_CLASSNAME = "hidden";
const USERID_LOCALKEY = "userID";
const userId = localStorage.getItem(USERID_LOCALKEY);

function onClickLoginBtn(event) {
    event.preventDefault();
    const userId = loginInput.value;
    localStorage.setItem(USERID_LOCALKEY, userId);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    toDoList.classList.remove(HIDDEN_CLASSNAME);
    printLoginForm();
}

function onClickLogoutBtn(event) {
    event.preventDefault();
    localStorage.clear();
    greeting.classList.add(HIDDEN_CLASSNAME);
    logoutForm.classList.add(HIDDEN_CLASSNAME);
    toDoForm.classList.add(HIDDEN_CLASSNAME);
    toDoList.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = ``; 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    
    clockStyle.fontSize = `5em`;
    clockStyle.letterSpacing = `0.1em`;
    clockStyle.top = `20%`
}

function printLoginForm() {
    const userId = localStorage.getItem(USERID_LOCALKEY);
    greeting.innerText = `Hello, ${userId}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    toDoList.classList.remove(HIDDEN_CLASSNAME);
    console.dir(toDoList);

    clockStyle.fontSize = `6em`;
    clockStyle.letterSpacing = `2px`;
    clockStyle.top = `25%`
}

if(userId != null) {
    printLoginForm();
} else {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}
logoutForm.addEventListener("click", onClickLogoutBtn);
loginForm.addEventListener("submit", onClickLoginBtn);