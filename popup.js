const modalData = [
  {
    title: "Tonic",
    frame2: ["Canopy", "Back End dev", "2015"],
    image: "./images/snapshoot.png",
    paragraph: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    ],
    shareliveLink: "#",
    seeSourceFile: "#",
  },
  {
    title: "FACEBOOK",
    image: "./images/snap2.png class='fr-fic fr-dib mobile-only",
    paragraph: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    ],
  },
  {
    title: "Facebook 360",
    image: "./images/snap3.png",
    paragraph: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    ],
  },
  {
    title: "Uber Navigation",
    image: "./images/snap4.png",
    paragraph: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    ],
    technologies: ["html", "css", "javascript"],
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

    const technologies = document.createElement("div");
    technologies.className = "lnkss";
    technologies.innerHTML = `
    <h4>canopy</h4>
    <ul class="role">
              <li>Back End Dev</li>
              <li>2015</li>
            </ul>`;
    modalContent.appendChild(technologies);

    const image = document.createElement("img");
    image.className = "hey hh";
    image.src = data.image;
    modalContent.appendChild(image);

    const paragraph = document.createElement("p");
    paragraph.innerText = data.paragraph;
    modalContent.appendChild(paragraph);
    const frame2 = document.createElement("div2");
    frame2.innerHTML = `
    <ul class="lnkks">
              <li class="lnksi">html</li>
              <li class="lnksi">css</li>
              <li class="lnksi">javaScript</li>
            </ul>`;
    modalContent.appendChild(frame2);
    const links = document.createElement("div3");
    links.className = "check";
    links.innerHTML = `
   <button>
<a href="#">See Live <img src="images/icon.png" alt="See live"></i></a>
</button>
<button>
<a href="#">See Source <img src="images/github.png" alt="See live"></i></a>
</button>
   `;
    modalContent.appendChild(links);
  });
});

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
  modalContent.innerHTML = "";
});
