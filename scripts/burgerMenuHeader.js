const burger = document.querySelector('.burgerMenu')
const nav = document.querySelector('.header-menu-list')

    burger.addEventListener('click', (e) => {
    burger.classList.toggle('active')
    nav.classList.toggle('open')
})