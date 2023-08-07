const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navItems = document.querySelectorAll('[id^="nav-"]');


function navAnimation (direction1, direction2) {
    navItems.forEach((nav, index) => {
        nav.classList.replace(`slide-${direction1}-${index+1}`, `slide-${direction2}-${index+1}`)
    })
};

function toggleNavigation () {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')) {
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        navAnimation('out', 'in')
    } else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        navAnimation('in', 'out');
    }
};

menuBars.addEventListener('click', toggleNavigation);
navItems.forEach((nav)=> {
    nav.addEventListener('click', toggleNavigation);
})