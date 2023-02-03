// Store data in local storage
function storeData(data) {
  localStorage.setItem('storedData', JSON.stringify(data));
}

// Retrieve data from local storage
function retrieveData() {
  return JSON.parse(localStorage.getItem('storedData')) || {};
}

// eslint-disable-next-line no-undef
const inputs = form.querySelectorAll('input');

// Autofill form fields with stored data
const storedData = retrieveData();
inputs.forEach((input) => {
  if (storedData[input.name]) {
    input.value = storedData[input.name];
  }
});

// Update stored data when input fields change
// eslint-disable-next-line no-undef
form.addEventListener('input', (event) => {
  const input = event.target;
  storedData[input.name] = input.value;
  storeData(storedData);
});
