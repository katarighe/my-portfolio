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
  const email = document.querySelector('.email-input').value;

  if (email === email.toLowerCase()) {
    form.submit();
  }  else {
    const errorMessage = document.querySelector('.errors');
    errorMessage.textcontent = 'Please enter your email in lowercase, e.g. ${correctEmail}';
    errorMessage.style.display = 'block';
  }
  });
