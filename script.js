const open = document.querySelector('.open-menu');
const close = document.querySelector('.close-menu');
const menu = document.querySelector('.mobile-menu');
const links = document.querySelectorAll('.mobile-links');

open.addEventListener('click', function() {
    menu.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function () {
    hideMenu();
});

links.forEach(function(link) {
    link.addEventListener('click', function() {
        hideMenu();
    });
});

function hideMenu() {
    menu.style.display = 'none';
    document.body.style.overflow = 'auto';
}
