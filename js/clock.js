const clock = document.querySelector("h2#clock");

function getTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const mins = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${mins}:${sec}`;
}

getTime();
setInterval(getTime, 1000);