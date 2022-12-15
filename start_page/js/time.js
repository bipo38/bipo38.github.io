let state = false;
const snow = document.querySelector('.not-snow');

const audio = document.querySelector('audio');
const btnPlay = document.querySelector('.play');
let stateAudio = false;

const hours = document.querySelector('.hour');
const min = document.querySelector('.minutes');
const sec = document.querySelector('.seconds');

const logo = document.querySelector('.logo');

const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');

function getTime() {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  hours.innerText = `${hour} `;
  min.innerText = `${minutes} `;
  sec.innerText = `${seconds} `;
}

function getDate() {
  const date = new Date();
  const dayNumber = date.getDate();
  const monthNumber = date.getMonth() + 1;
  const yearNumber = date.getFullYear();
  day.innerText = `${dayNumber} `;
  month.innerText = `${monthNumber} `;
  year.innerText = `${yearNumber} `;
}

function init() {
  getDate();

  getTime();
  setInterval(getTime, 1000);
}

init();

//Snow

function toggleSnow() {
  state = !state;
  if (state) {
    snow.classList.remove('not-snow');
    snow.classList.add('snowflakes');
    logo.src = './assets/img/bongo.gif';
    return;
  }
  logo.src = './assets/img/bongost.gif';
  snow.classList.remove('snowflakes');
  snow.classList.add('not-snow');
}

//Audio

function toggleAudio() {
  stateAudio = !stateAudio;
  if (stateAudio) {
    audio.play();
    btnPlay.classList.add('rotate');
    return;
  }
  btnPlay.classList.remove('rotate');
  audio.pause();
}
