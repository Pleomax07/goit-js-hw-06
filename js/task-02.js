const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector("#ingredients");

const ingredientEl = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.classList.add("item");
  element.textContent = ingredient;
  return element;
});

ingredientsEl.append(...ingredientEl);

console.log(ingredientsEl);
console.log(ingredientEl);
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.
