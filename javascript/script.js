const menuButton = document.getElementById('menu__button');
const menuList = document.getElementById('menu__list');
const links = Array.from(document.getElementsByClassName('link'));

function toggleMenu() {
  menuList.classList.toggle('menu-show');
}

menuButton.addEventListener('click', toggleMenu);

links.map(function (link) {
  link.addEventListener('click', toggleMenu);
});

document.addEventListener('click', function (event) {
  const target = event.target;
  const menu = document.querySelector('.menu-show');

  if (menu && !menu.contains(target) && target !== menuButton) {
    toggleMenu();
  }
});
