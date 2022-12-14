const github = document.querySelector(".github");
const telegram = document.querySelector(".telegram");
const reddit = document.querySelector(".reddit");
const gmail = document.querySelector(".gmail");
const youtube = document.querySelector(".youtube");

const paints = [
  "firsst.jpg",
  // "second.jpg",
  // "third.jpg",
  // "four.jpg",
  // "five.jpg",
  // "seven.jpg",
  // "eight.jpg",
];

function getPaint() {
  return Math.floor(Math.random() * paints.length);
}

function setPaint() {
  github.src = `./assets/img/${paints[getPaint()]}`;
  telegram.src = `./assets/img/${paints[getPaint()]}`;
  reddit.src = `./assets/img/${paints[getPaint()]}`;
  gmail.src = `./assets/img/${paints[getPaint()]}`;
  youtube.src = `./assets/img/${paints[getPaint()]}`;
}

function init() {
  setPaint();
  setInterval(setPaint, 3000);
}

init();
