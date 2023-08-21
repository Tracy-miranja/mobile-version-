function isLowerCase(inputText) {
  return inputText.toLowerCase() === inputText;
}

const form = document.querySelector('form');
const response = document.querySelector('#response');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const input = document.querySelector("input[type='email']");
  const inputValue = input.value;

  if (isLowerCase(inputValue)) {
    response.classList.remove('d-none');
    response.classList.add('d-flex');
    response.classList.remove('danger');
    response.classList.add('success');
    response.textContent = 'Submitted succesfully';
  } else {
    response.classList.remove('d-none');
    response.classList.add('d-flex');
    response.classList.remove('success');
    response.classList.add('danger');
    response.textContent = 'Error! Email has to be in smallcase.';
  }
});