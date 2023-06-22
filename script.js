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

const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailInput = document.querySelector('.email-input');
  const email = emailInput.value;
  const suggestedEmail = email.toLowerCase();

  const myStorage = {
    name: document.getElementById('fname').value,
    email: document.querySelector('.email-input').value,
    message: document.getElementById('message').value,
  };

  if (email === suggestedEmail) {
    localStorage.setItem('myStorage', JSON.stringify(myStorage));
    form.submit();
  } else {
    const errorMessage = document.querySelector('.errors');
    errorMessage.textContent = `Your form is not sent, please enter your email in lowercase, e.g. ${suggestedEmail}`;
    errorMessage.style.display = 'block';
  }
});

window.addEventListener('load', (e) => {
  e.preventDefault();
  const storageObject = JSON.parse(localStorage.getItem('myStorage'));
  if (storageObject) {
    document.getElementById('fname').value = storageObject.name;
    document.querySelector('.email-input').value = storageObject.email;
    document.getElementById('message').value = storageObject.message;
  } else {
    document.getElementById('fname').value = '';
    document.querySelector('.email-input').value = '';
    document.getElementById('message').value = '';
  }
});
