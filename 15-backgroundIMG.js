const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const choesenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${choesenImage}` ; //bgImg에 src 추가 (랜덤으로)

document.body.appendChild(bgImg); // body 마지막에 bgImg 추가 (prepend 맨앞)