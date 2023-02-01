const modalData = [
  {
    title: "Title 1",
    image: "https://via.placeholder.com/150",
    paragraph: "This is paragraph 1.",
  },
  {
    title: "Title 2",
    image: "https://via.placeholder.com/150",
    paragraph: "This is paragraph 2.",
  },
  {
    title: "Title 3",
    image: "https://via.placeholder.com/150",
    paragraph: "This is paragraph 3.",
  },
];

const buttons = document.querySelectorAll(".myButton");
const modal = document.querySelector("#myModal");
const closeButton = document.querySelector(".close");
const modalContent = document.querySelector("#modalContent");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const index = button.getAttribute("data-index");
    const data = modalData[index];

    modal.style.display = "block";

    const title = document.createElement("h2");
    title.innerText = data.title;
    modalContent.appendChild(title);

    const image = document.createElement("img");
    image.src = data.image;
    modalContent.appendChild(image);

    const paragraph = document.createElement("p");
    paragraph.innerText = data.paragraph;
    modalContent.appendChild(paragraph);
  });
});

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
  modalContent.innerHTML = "";
});
