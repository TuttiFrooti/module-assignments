const loadHTML = () => {
  const submitButton = document.querySelector('button[type="submit"]')

  submitButton.addEventListener('click', CheckValidation)
}

window.addEventListener('load', loadHTML) // Just makes sure the page is loaded before running the JS

const CheckValidation = event => {
  event.preventDefault();
  const firstName = document.querySelector('#firstName');
  const firstNameError = document.querySelector('#firstNameError');
  if(firstName.value.length >= 2) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }
}