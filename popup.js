const modalData = [
  {
    title: "Tonic",
    role: {
      name: "Back End Developer",
      year: "2015",
    },
    image: "./images/Snapshoot Portfolio (2).png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tech: ["HTML", "CSS", "Javascript", "github", "ruby", "Bootstraps"],
    button: {
      link: "https://example.com/",
      text: "See Live",
    },
    button1: {
      link: "https://example.com/",
      text: "See Source",
    },
  },
  {
    title: "Tonic",
    role: {
      name: "Back End Developer",
      year: "2015",
    },
    image: "./images/snap3.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tech: ["HTML", "CSS", "Javascript", "github", "ruby", "Bootstraps"],
    button: {
      link: "https://example.com/",
      text: "See Live",
    },
    button1: {
      link: "https://example.com/",
      text: "See Source",
    },
  },
  {
    title: "Tonic",
    role: {
      name: "Back End Developer",
      year: "2015",
    },
    image: "./images/Snapshoot Portfolio (2).png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tech: ["HTML", "CSS", "Javascript", "github", "ruby", "Bootstraps"],
    button: {
      link: "https://example.com/",
      text: "See Live",
    },
    button1: {
      link: "https://example.com/",
      text: "See Source",
    },
  },
  {
    title: "Tonic",
    role: {
      name: "CANOPY",
      year: "2015",
    },
    image: "./images/snap3.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tech: ["HTML", "CSS", "Javascript", "github", "ruby", "Bootstraps"],
    button: {
      link: "https://example.com/",
      text: "See Live",
    },
    button1: {
      link: "https://example.com/",
      text: "See Source",
    },
  },
];

const buttons = [
  document.getElementById("button1"),
  document.getElementById("button2"),
  document.getElementById("button3"),
  document.getElementById("button4"),
];

const modal = document.querySelector("#myModal");
const closeButton = document.querySelector(".close");
const modalContent = document.querySelector("#modalContent");

buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    modalContent.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = modalData[index].title;
    modalContent.appendChild(title);

    const frst = document.createElement("div");
    frst.setAttribute("class", "frst");
    modalContent.appendChild(frst);

    const roleTitle = document.createElement("h5");
    roleTitle.textContent = modalData[index].role.name;
    frst.appendChild(roleTitle);

    const roleList = document.createElement("ul");
    roleList.setAttribute("class", "role");
    frst.appendChild(roleList);

    const roleItem = document.createElement("li");
    roleItem.textContent = modalData[index].role.name;
    roleList.appendChild(roleItem);

    const roleItem2 = document.createElement("li");
    roleItem2.textContent = modalData[index].role.year;
    roleList.appendChild(roleItem2);

    const image = document.createElement("div");
    image.setAttribute("class", "modal-image");
    modalContent.appendChild(image);

    const img = document.createElement("img");
    img.src = modalData[index].image;
    image.appendChild(img);

    const contentCont = document.createElement("div");
    contentCont.setAttribute("class", "contentCont");
    modalContent.appendChild(contentCont);

    const content = document.createElement("div");
    content.setAttribute("class", "content");
    contentCont.appendChild(content);

    const contentText = document.createElement("p");
    contentText.textContent = modalData[index].description;
    content.appendChild(contentText);

    const side = document.createElement("div");
    side.setAttribute("class", "side");
    contentCont.appendChild(side);

    const lis = document.createElement("div");
    lis.setAttribute("class", "lis");
    side.appendChild(lis);

    const techList = document.createElement("ul");
    techList.setAttribute("class", "tech");
    lis.appendChild(techList);

    if (Array.isArray(modalData[index].tech)) {
      modalData[index].tech.forEach((tech) => {
        const techLi = document.createElement("li");
        techLi.textContent = tech;
        techList.appendChild(techLi);
      });
    }

    const buttons = document.createElement("div");
    buttons.setAttribute("class", "buttons");
    side.appendChild(buttons);

    const button = document.createElement("button");
    button.setAttribute("class", "see");
    buttons.appendChild(button);

    const link = document.createElement("a");
    link.href = modalData[index].button.link;
    link.innerHTML =
      modalData[index].button.text +
      ' <img src="./images/icon.png" class="icon">';
    button.appendChild(link);

    const button1 = document.createElement("button");
    button1.setAttribute("class", "see");
    buttons.appendChild(button1);

    const link1 = document.createElement("a");
    link1.href = modalData[index].button1.link;
    link1.innerHTML =
      modalData[index].button1.text +
      ' <img src="./images/github.png" class="icon">';
    button1.appendChild(link1);

    modal.style.display = "block";
  });
});

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
  modalContent.innerHTML = "";
});
