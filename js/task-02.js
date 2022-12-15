const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ulEl = document.querySelector(`#ingredients`);
console.log(ulEl);

const liItems = ingredients.forEach((ingredient) => {
  const liItem = document.createElement(`li`);
  liItem.textContent = ingredient;
  liItem.classList.add(`item`);
  ulEl.append(liItem);
});
// console.log(liItems);
