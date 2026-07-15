// Toggle claass active
const navbarNav = document.querySelector('.navbar-nav');

// saat dklik tombol menu
document.querySelector('#menu').onclick = () => {
navbarNav.classList.toggle('active');
};

// klik tombol luar side bar
const menu =document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
navbarNav.classList.remove('active');
    }
})