/* eslint-disable linebreak-style */
function storeData(data) {
  localStorage.setItem('storedData', JSON.stringify(data));
}

function retrieveData() {
  return JSON.parse(localStorage.getItem('storedData')) || {};
}

// Select the inputs and textarea
// eslint-disable-next-line no-undef
const inputs = form.querySelectorAll('input');
// eslint-disable-next-line no-undef
const textarea = form.querySelector('textarea');

// Retrieve the stored data
const storedData = retrieveData();

// Set the values of the inputs and textarea to the stored data
inputs.forEach((input) => {
  if (storedData[input.name]) {
    input.value = storedData[input.name];
  }
});

if (storedData.body) {
  textarea.value = storedData.body;
}

// Listen for changes in the form
// eslint-disable-next-line no-undef
form.addEventListener('input', (event) => {
  const input = event.target;
  if (input.tagName === 'TEXTAREA') {
    // Update the stored data with the new value
    storedData.body = input.value;
  } else {
    // Update the stored data with the new value
    storedData[input.name] = input.value;
  }
  // Store the updated data
  storeData(storedData);
});
