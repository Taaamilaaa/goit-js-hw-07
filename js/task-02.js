const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const parentOfList = document.querySelector('#ingredients');

const createListOfIngredients = (list) => {
  let itemEl;
  const listOfIngredients = [];
  for (let item of list) {

    itemEl = document.createElement('li')
    
    itemEl.textContent = item;
    
    listOfIngredients.push(itemEl);  
 
   }
  
  return listOfIngredients;
}


console.log(createListOfIngredients(ingredients));
const listEl = createListOfIngredients(ingredients); 
parentOfList.append(...listEl);



