const time = document.querySelector(".time");

function getTime() {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  time.innerText = `${hour}:${minutes}:${seconds} `;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();