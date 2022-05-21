const imgs = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg"
];

const choosenImg = imgs[Math.floor(Math.random() * imgs.length)];

const img = document.createElement("img");

img.classList.add("backG");
img.style.backgroundImage = `url(${choosenImg})`;



document.body.appendChild(img);