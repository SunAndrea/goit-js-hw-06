const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories:`, numberOfCategories.length);
// //--------------------//

const liArray = Array.from(numberOfCategories);
console.log(liArray);
const liInfo = liArray
  .map((element) => {
    // console.log(element.children[1].children);

    return `Category: ${element.children[0].textContent} Elements: ${element.children[1].children.length}`;
  })
  .join(`               `);

console.log(liInfo);
