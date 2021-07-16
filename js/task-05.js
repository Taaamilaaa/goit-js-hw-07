const refs = {
  nameInInputEl: document.querySelector("#name-input"),
  nameInOutputEl: document.querySelector("#name-output"),
};

function onInputElInput(event) {
  event.currentTarget.value.trim()
    ? (refs.nameInOutputEl.textContent = event.currentTarget.value)
    : (refs.nameInOutputEl.textContent = "незнакомец");
}
refs.nameInInputEl.addEventListener("input", onInputElInput);

// const nameInInputEl = document.querySelector('#name-input');
// const nameInOutputEl = document.querySelector('#name-output');

// function onInputElInput(event) {
//     event.currentTarget.value.trim()
//         ? nameInOutputEl.textContent = event.currentTarget.value
//       : nameInOutputEl.textContent = 'незнакомец'
// }
// nameInInputEl.addEventListener('input', onInputElInput)
