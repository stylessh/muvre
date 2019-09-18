const header = document.querySelector('.header');

document.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

// responsive navbar
const toggleBtn = document.querySelector('#toggle-btn');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
})