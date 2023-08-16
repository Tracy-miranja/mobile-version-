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

const downloadCvButton = document.getElementById("downloadCvButton");

// URL to the CV file
const cvFileUrl = "path/to/your/cv.pdf"; // Replace with the actual file URL

// Attach click event listener to the button
downloadCvButton.addEventListener("click", () => {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = cvFileUrl;

    // Set the download attribute and file name
    link.download = "your_cv.pdf"; // Replace with your desired file name

    // Trigger a click event on the anchor element to initiate the download
    link.click();

    // Clean up the anchor element
    link.remove();
});
