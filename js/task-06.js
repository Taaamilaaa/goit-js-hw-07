const input = document.querySelector('#validation-input');

function onInputBlur(event) {
   event.currentTarget.value.length
   === Number(event.currentTarget.getAttribute("data-length"))
      ? event.currentTarget.classList.add('valid')
      : event.currentTarget.classList.add('invalid')           
     }
input.addEventListener('blur', onInputBlur);
