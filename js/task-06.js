const inputEl = document.querySelector('#validation-input');
   
function onInputBlur(event) {
   if (event.currentTarget.value.length === +inputEl.dataset.length) {
      event.currentTarget.classList.add('valid');
      event.currentTarget.classList.remove('invalid')
   } else {
      event.currentTarget.classList.add('invalid');
      event.currentTarget.classList.remove('valid')
   }
}
   
inputEl.addEventListener('blur', onInputBlur);


