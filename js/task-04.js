const counter = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  counterValue: document.querySelector("#value"),
};

let value = 0;

const onIncrementBtnClick = () => {
    value += 1;
    counter.counterValue.textContent = value;
}
const onDecrementBtnClick = () => {
    value -= 1;
    counter.counterValue.textContent = value;
}

counter.incrementBtn.addEventListener('click', onIncrementBtnClick);
counter.decrementBtn.addEventListener('click', onDecrementBtnClick)



// const counterValue = document.querySelector("#value");
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const decrementBtn = document.querySelector('[data-action="decrement"]');

// let value = 0;

// const onIncrementBtnClick = () => {
//     value += 1;
//     counterValue.textContent = value;
// };

// incrementBtn.addEventListener("click", onIncrementBtnClick);

// const onDecrementBtnClick = () => {
//     value -= 1;
//     counterValue.textContent = value;
// };

// decrementBtn.addEventListener("click", onDecrementBtnClick);

