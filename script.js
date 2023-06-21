// Mobile Menu
const open = document.querySelector('.open-menu');
const close = document.querySelector('.close-menu');
const menu = document.querySelector('.mobile-menu');
const links = document.querySelectorAll('.mobile-links');

function hideMenu() {
  menu.style.display = 'none';
  document.body.style.overflow = 'auto';
}

open.addEventListener('click', () => {
  menu.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

close.addEventListener('click', () => {
  hideMenu();
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    hideMenu();
  });
});

// Pop Up
const card = document.getElementById('works');

const projectInfos = [
  {
    id: 0,
    image: 'images/works/SnapshootPortfolio.svg',
    title: 'Tonic',
    info: ['CANOPY', 'Back End Dev', 2015],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 1,
    image: 'images/works/tonic.svg',
    title: 'Multi-Post Stories',
    info: ['FACEBOOK', 'Full Stack Dev', 2015],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    image: 'images/works/multiPostStories.svg',
    title: 'Facebook 360',
    info: ['FACEBOOK', 'Full Stack Dev', 2015],
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    image: 'images/works/multiPostStoriess.svg',
    title: 'Uber Navigation',
    info: ['Uber', 'Lead Developer', 2018],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
  },
];

for (let i = 0; i < projectInfos.length; i += 1) {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');
  let infoList = '';
  for (let j = 0; j < projectInfos[i].info.length; j += 1) {
    infoList += `<li>${projectInfos[i].info[j]}</li>`;
  }

  let technologiesList = '';
  for (let k = 0; k < projectInfos[i].technologies.length; k += 1) {
    technologiesList += `<li>${projectInfos[i].technologies[k]}</li>`;
  }
  projectCard.innerHTML = `
      <div class="works_card">
      <img src="${projectInfos[i].image}" class="works_img">
      <div class="works_card_detail">
        <div class="works_card_title">
          <h2>${projectInfos[i].title}</h2>
        <div class="works_card_history">
          <ul>
            ${infoList}
          </ul>
        </div>
        </div>
        <div class="works_card_description">
          <p>${projectInfos[i].description}</p>
        </div>
        <div class="works_card_tags">
          <ul>
            ${technologiesList}
          </ul>
        </div>
        <div class="works_card_action">
        <button type="button" class="project-btn">See Project</button>
        </div>
      </div>
    </div>
  `;

  card.appendChild(projectCard);
}

const popCard = document.querySelector('.popCard');
const projectButtons = document.querySelectorAll('.project-btn');

projectButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    popCard.style.display = 'block';

    const project = projectInfos[index];
    const popCardContent = popCard.querySelector('.modal-body');

    popCardContent.innerHTML = `
      <div class='top'>
        <div class='title'>
          <h2>${project.title}</h2>
          <ul>
            ${project.info.map((info) => `<li>${info}</li>`).join('')}
          </ul>
        </div>
        <div class='close-menu'>
          <i id="close-menu" class="close-menu fas fa-times"></i>
        </div>
      </div>
      <div class='middle'>
        <img src="${project.image}" class="works_img">
      </div>
      <div class='bottom'>
        <div class='card-description'>
          <p>${project.description}</p>
        </div>
        <div class='card-info'>
          <ul>
            ${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}
          </ul>
          <button class="modal-button">See Live</button>
          <button class="modal-button">See Source</button>
        </div>
      </div>
    `;
  });
});

const popCardContent = popCard.querySelector('.modal-body');
popCardContent.addEventListener('click', (e) => {
  if (e.target.id === 'close-menu') {
    popCard.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  e.preventDefault();
});

$closeModal.addEventListener('click', () => {
  popupScrollLock();
  $modal.close();
});

popCard.addEventListener('click', () => {
  popCard.style.display = 'none';
  popCard.remove();
});

popCard.appendChild(popCard);