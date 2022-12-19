// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль
//  по кліку на button.change - color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonEl = document.querySelector(`.change-color`);
const spanEl = document.querySelector(`.color`);

const onButtonChangeColor = function () {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanEl.textContent = color;
};

buttonEl.addEventListener(`click`, onButtonChangeColor);
