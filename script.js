// Mobile Menu
const open = document.querySelector('.open-menu');
const close = document.querySelector('.close-menu');
const menu = document.querySelector('.mobile-menu');

open.addEventListener('click', function() {
    menu.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function () {
    menu.style.display = 'none';
    document.body.style.overflow = 'auto';
});  
