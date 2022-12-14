const github = document.querySelector('.github');
const telegram = document.querySelector('.telegram');
const youtube = document.querySelector('.reddit');
const stack = document.querySelector('.stack');

const paints = ['night.jpg', 'logo.avif'];

function getPaint() {
  return Math.floor(Math.random() * paints.length);
}

function setPaint() {
  github.src = `./assets/img/${paints[getPaint()]}`;
  telegram.src = `./assets/img/${paints[getPaint()]}`;
  youtube.src = `./assets/img/${paints[getPaint()]}`;
  stack.src = `./assets/img/${paints[getPaint()]}`;
}

function init() {
  setPaint();
  setInterval(setPaint, 3000);
}

init();

