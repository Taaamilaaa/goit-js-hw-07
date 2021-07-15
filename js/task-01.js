const categoriesEl = document.querySelectorAll(".item");
const numbersOfCategories = (categoriesArr) =>
  `В списке ${categoriesArr.length} категории.`;
console.log(numbersOfCategories(categoriesEl));

const showSeparateCategory = (element) => element.forEach((el) =>
console.log(
      `Категория: ${
        el.querySelector("h2").textContent
      }. Количество элементов ${el.querySelectorAll("li").length}`
    )
  );
console.log(showSeparateCategory(categoriesEl));

