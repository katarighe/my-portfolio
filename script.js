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
const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('.email-input').value;
  const suggestedEmail = document.querySelector('.email-input').value.toLowerCase();

  if (email === suggestedEmail) {
    form.submit();
  } else {
    const errorMessage = document.querySelector('.errors');
    errorMessage.textContent = `Your form is not sent, please enter your email in lowercase, e.g. ${suggestedEmail}`;
    errorMessage.style.display = 'block';
  }
});

// Local Web Storage
const myStorage = {
  name: '',
  email: '',
  message: '',
};

myStorage.name = document.getElementById('fullname').value;
myStorage.email = document.getElementById('email').value;
myStorage.message = document.getElementById('comments').value;

localStorage.setItem('storageInfo', JSON.stringify(myStorage));

const storageObject = JSON.parse(localStorage.getItem('storage-info'));

document.getElementById('fullname').value = storageObject.name;
document.getElementById('email').value = storageObject.email;
document.getElementById('comments').value = storageObject.message;
