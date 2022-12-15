// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті
// data - length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//     якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже додали
//  у вихідні файли завдання.

const inputEl = document.querySelector(`#validation-input`);
const dataLengthAtr = Number(inputEl.getAttribute(`data-length`));
console.log(dataLengthAtr);
// console.log(inputEl);
const onInputElBlur = ({ target }) => {
  if (Number(target.value.length) === dataLengthAtr) {
    inputEl.classList.remove(`invalid`);
    inputEl.classList.add(`valid`);
  } else {
    inputEl.classList.add(`invalid`);
    inputEl.classList.remove(`valid`);
  }
};

inputEl.addEventListener(`blur`, onInputElBlur);
// `[data - length]`;
