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

// Contact Form
const form = document.getElementById('myForm')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementsByClassName('errors').value;
  if (email === email.toLowerCase()) {
    this.submit();
  } else {
    const errorMessage = document.getElementsByClassName('errors');
    errorMessage.textcontent = 'Sorry, incorrect field';
    errorMessage.style.display = 'block';
  }
  });
