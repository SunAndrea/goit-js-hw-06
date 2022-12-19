function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxesEl = document.querySelector(`#boxes`);
const btnCreateEl = document.querySelector(`[data-create]`);
const btnDestroyEl = document.querySelector(`[data-destroy]`);

btnCreateEl.addEventListener("click", fromInputgetAmount);
btnDestroyEl.addEventListener(`click`, function () {
  boxesEl.innerHTML = ``;
});
function fromInputgetAmount() {
  let amount = document.querySelector("#controls input").value;
  createBoxes(amount);
}
function createBoxes(amount) {
  let secondSize = 30;
  for (let i = 0; i < amount; i++) {
    const size = secondSize + i * 10;
    const divEl = document.createElement(`div`);
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxesEl.append(divEl);
  }
}
