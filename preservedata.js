/* eslint-disable linebreak-style */
function storeData(data) {
  localStorage.setItem('storedData', JSON.stringify(data));
}

function retrieveData() {
  return JSON.parse(localStorage.getItem('storedData')) || {};
}

// eslint-disable-next-line no-undef
const inputs = form.querySelectorAll('input');

const storedData = retrieveData();
inputs.forEach((input) => {
  if (storedData[input.name]) {
    input.value = storedData[input.name];
  }
});

// eslint-disable-next-line no-undef
form.addEventListener('input', (event) => {
  const input = event.target;
  storedData[input.name] = input.value;
  storeData(storedData);
});
