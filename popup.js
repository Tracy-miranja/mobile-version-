const modalData = [
  {
    title: 'Tonic',
    role: {
      title: 'Canopy',
      name: 'Back End Dev',
      year: '2015',
    },
    image: './images/doctor-app.jpg',
    description:
      ' The Appoint Doctor Project is a user-friendly web app for booking doctor appointments. It offers secure login using Devise-jwt and supports multiple user roles (patient, doctor, admin). Admins can add/delete doctors. Users can schedule/cancel appointments and view their appointment list. The app simplifies the process of finding and managing medical appointments online.',
    tech: ['HTML', 'CSS', 'Javascript', 'ruby', 'Bootstraps'],
    button: {
      link: 'https://doctor-appointment-x59j.onrender.com/',
      text: 'See Live',
    },
    button1: {
      link: 'https://github.com/Tracy-miranja/appoint-doctor-frontend',
      text: 'See Source',
    },
  },
  {
    title: 'Tonic',
    role: {
      title: 'Canopy',
      name: 'Back End Dev',
      year: '2015',
    },
    image: './images/cpastone2.jpg',
    description:
      'This is a tech-music concert website, which I created as my first capstone, where people come to share tech ideas at the same time enjoying themselves with different type of songs from different artist',
    tech: ['HTML', 'CSS', 'Javascript', 'ruby', 'Bootstraps'],
    button: {
      link: 'https://tracy-miranja.github.io/HTML-CSS-JavaScript-capstone-project//',
      text: 'See Live',
    },
    button1: {
      link: 'https://github.com/Tracy-miranja/HTML-CSS-JavaScript-capstone-project',
      text: 'See Source',
    },
  },
  {
    title: 'Tonic',
    role: {
      title: 'Canopy',
      name: 'Back End Dev',
      year: '2015',
    },
    image: './images/app mockup.jpg',
    description:
      'Is a Ruby on Rails capstone project about a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    tech: ['HTML', 'CSS', 'Javascript', 'ruby', 'Bootstraps'],
    button: {
      link: 'https://tracy-bsfz.onrender.com/',
      text: 'See Live',
    },
    button1: {
      link: 'https://github.com/Tracy-miranja/AWESOMEBOOK',
      text: 'See Source',
    },
  },
  {
    title: 'Tonic',
    role: {
      title: 'Canopy',
      name: 'Back End Dev',
      year: '2015',
    },
    image: './images/todo.jpg',
    description:
      "'To-do list' is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. I used ES6 and Webpack!",
    tech: ['HTML', 'CSS', 'Javascript', 'ruby', 'Bootstraps'],
    button: {
      link: 'https://tracy-miranja.github.io/TO-DO-LIST/dist/',
      text: 'See Live',
    },
    button1: {
      link: 'https://github.com/Tracy-miranja/TO-DO-LIST',
      text: 'See Source',
    },
  },
];

const buttons = [
  document.getElementById('button1'),
  document.getElementById('button2'),
  document.getElementById('button3'),
  document.getElementById('button4'),
];

const modal = document.querySelector('#myModal');
const closeButton = document.querySelector('.close');
const modalContent = document.querySelector('#modalContent');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    modalContent.innerHTML = '';

    const title = document.createElement('h1');
    title.textContent = modalData[index].title;
    modalContent.appendChild(title);

    const frst = document.createElement('div');
    frst.setAttribute('class', 'frst');
    modalContent.appendChild(frst);

    const roleTitle = document.createElement('h5');
    roleTitle.textContent = modalData[index].role.title;
    frst.appendChild(roleTitle);

    const roleList = document.createElement('ul');
    roleList.setAttribute('class', 'role');
    frst.appendChild(roleList);

    const roleItem = document.createElement('li');
    roleItem.textContent = modalData[index].role.name;
    roleList.appendChild(roleItem);

    const roleItem2 = document.createElement('li');
    roleItem2.textContent = modalData[index].role.year;
    roleList.appendChild(roleItem2);

    const image = document.createElement('div');
    image.setAttribute('class', 'image');
    modalContent.appendChild(image);

    const img = document.createElement('img');
    img.src = modalData[index].image;
    image.appendChild(img);

    const contentCont = document.createElement('div');
    contentCont.setAttribute('class', 'contentCont');
    modalContent.appendChild(contentCont);

    const content = document.createElement('div');
    content.setAttribute('class', 'content');
    contentCont.appendChild(content);

    const contentText = document.createElement('p');
    contentText.textContent = modalData[index].description;
    content.appendChild(contentText);

    const side = document.createElement('div');
    side.setAttribute('class', 'side');
    contentCont.appendChild(side);

    const lis = document.createElement('div');
    lis.setAttribute('class', 'lis');
    side.appendChild(lis);

    const techList = document.createElement('ul');
    techList.setAttribute('class', 'tech');
    lis.appendChild(techList);

    if (Array.isArray(modalData[index].tech)) {
      modalData[index].tech.forEach((tech) => {
        const techLi = document.createElement('li');
        techLi.textContent = tech;
        techList.appendChild(techLi);
      });
    }

    const buttons = document.createElement('div');
    buttons.setAttribute('class', 'buttons');
    side.appendChild(buttons);

    const button = document.createElement('button');
    button.setAttribute('class', 'see');
    buttons.appendChild(button);

    const link = document.createElement('a');
    link.href = modalData[index].button.link;
    link.innerHTML = `${modalData[index].button.text} <img src="./images/Icon.png" class="icon">`;
    button.appendChild(link);

    const button1 = document.createElement('button');
    button1.setAttribute('class', 'see');
    buttons.appendChild(button1);

    const link1 = document.createElement('a');
    link1.href = modalData[index].button1.link;
    link1.innerHTML = `${modalData[index].button1.text} <img src="./images/github.png" class="icon">`;
    button1.appendChild(link1);

    modal.style.display = 'block';
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
  modalContent.innerHTML = '';
});
