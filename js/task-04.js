// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати
// і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй
// її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const minusBtn = document.querySelector("[data-action=decrement]");
const valueEl = document.querySelector(`#value`);
const plusBtn = document.querySelector(`[data-action=increment]`);
console.log(minusBtn);
let counterValue = 0;

minusBtn.addEventListener(`click`, () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

plusBtn.addEventListener(`click`, () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
