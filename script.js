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

// Mobile Pop Up
const projectInfos = [
  {
    id: 0,
    image: 'images/works/SnapshootPortfolio.svg',
    title: 'Tonic',
    info: ['CANOPY', 'Back End Dev', 2015],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
  },
  {
    id: 1,
    image: 'images/works/tonic.svg',
    title: 'Multi-Post Stories',
    info: ['FACEBOOK', 'Full Stack Dev', 2015],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    id: 2,
    image: 'images/works/multiPostStories.svg',
    title: 'Facebook 360',
    info: ['FACEBOOK', 'Full Stack Dev', 2015],
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    id: 3,
    image: 'images/works/multiPostStoriess.svg',
    title: 'Uber Navigation',
    info: ['Uber', 'Lead Developer', 2018],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
];