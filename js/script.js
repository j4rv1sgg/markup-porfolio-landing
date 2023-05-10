const menu = document.querySelector('.burger__menu');
const menuBtn = document.querySelector('.burger__button');
const body = document.body;
if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
  });
}
const menuLinks = document.querySelectorAll(
  '.header__buttons-style[data-goto]'
);
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });
}

const menubLinks = document.querySelectorAll('.burger__body-item[data-goto]');
if (menubLinks.length > 0) {
  menubLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenubLinkClick);
  });
}
function onMenubLinkClick(e) {
  menu.classList.remove('active');
  menuBtn.classList.remove('active');
  body.classList.remove('lock');
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

    window.scrollTo({
      top: gotoBlockValue,
      behavior: 'smooth',
    });
    e.preventDefault();
  }
}
function onMenuLinkClick(e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

    window.scrollTo({
      top: gotoBlockValue,
      behavior: 'smooth',
    });
    e.preventDefault();
  }
}
