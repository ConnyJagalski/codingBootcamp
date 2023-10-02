const hourField = document.querySelector(".hourField");
const minuteField = document.querySelector(".minuteField");
const secondField = document.querySelector(".secondField");
const colon = document.querySelectorAll(".colon");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

function updateDigitalTime(hours, minutes, seconds) {
  hourField.innerText = `${hours.toString().padStart(2, "0")}`
  minuteField.innerText = `${minutes.toString().padStart(2, "0")}`
  secondField.innerText = `${seconds.toString().padStart(2, "0")}`;
  colon.forEach(colonElement => colonElement.classList.toggle('hidden'));
}

function updateAnalogTime(hours, minutes, seconds) {
  const hourMove = hours * 30;
  const minuteMove = minutes * 6;
  const secondMove = seconds * 6;

  hourHand.style.transform = `rotate(${hourMove}deg)`;
  minuteHand.style.transform = `rotate(${minuteMove}deg)`;
  secondHand.style.transform = `rotate(${secondMove}deg)`;
}

function updateTime() {
  const getTime = new Date();
  const hours = getTime.getHours();
  const minutes = getTime.getMinutes();
  const seconds = getTime.getSeconds();

  updateDigitalTime(hours, minutes, seconds);
  updateAnalogTime(hours, minutes, seconds);
}

setInterval(updateTime, 1000);
updateTime();