const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories:`, numberOfCategories.length);
// //--------------------//

const liArray = Array.from(numberOfCategories);
console.log(liArray);
const liInfo = liArray
  .map((element) => {
    return `Category: ${element.children[0].textContent} Elements: ${element.children[1].children.length}`;
  })
  .join(`\n`);

console.log(liInfo);
