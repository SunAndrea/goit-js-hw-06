// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль
//  по кліку на button.change - color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const color = getRandomHexColor();
const buttonEl = document.querySelector(`.change-color`);
const spanEl = document.querySelector(`.color`);
const bodyEl = document.querySelector(`body`);

const onButtonChangeColor = function () {
  bodyEl.style.backgroundColor = color;
  bodyEl.dataset.color = color;
  console.log(bodyEl.dataset);
  spanEl.textContent = bodyEl.dataset.color;
};

buttonEl.addEventListener(`click`, onButtonChangeColor);
