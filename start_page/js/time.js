const hours = document.querySelector(".hour");
const min = document.querySelector(".minutes");
const sec = document.querySelector(".seconds");

function getTime() {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  hours.innerText = `${hour} `;
  min.innerText = `${minutes} `;
  sec.innerText = `${seconds} `;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

//Autofocus for firefox
$(".search").focus();

//Snow
function toggleSnow() {
  const snow = document.querySelector(".snowflakes");

  snow.classList.toggle("not-snow");
}
