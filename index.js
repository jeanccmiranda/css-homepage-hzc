const menuButton = document.querySelector('.header__menu')
const menu = document.querySelector('.nav-bar')

menuButton.addEventListener('click', () => {
    menu.classList.toggle('nav-bar--active')
})