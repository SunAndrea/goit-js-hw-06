// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
//  і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
//     перетягуючи повзунок, буде змінюватися розмір тексту.
const inputEl = document.querySelector(`#font-size-control`);
const spanEl = document.querySelector(`#text`);

const onSpanElChangeSize = ({ target }) => {
  spanEl.style.fontSize = target.value + `px`;
  console.log(target.value);
};

inputEl.addEventListener(`input`, onSpanElChangeSize);
