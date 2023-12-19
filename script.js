let email = document.querySelector('#email')
let error = document.querySelector('.error')

let regexEmail = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/

email.addEventListener('input', (event) => {
  if (!regexEmail.test(event.target.value)) {
    error.style.display = 'block'
  } else {
    error.style.display = 'none'
  }
})
