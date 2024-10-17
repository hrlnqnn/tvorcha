const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

function toggleMenu() {
    if (!nav.classList.contains('active') && !nav.classList.contains('fade-out')) {
        nav.style.display = 'flex'; 
        nav.classList.remove('fade-out'); 
        nav.classList.add('active'); 
    } else if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        nav.classList.add('fade-out'); 
    }
    
    burger.classList.toggle('active');
}

burger.addEventListener('click', toggleMenu);

nav.addEventListener('animationend', function(e) {
    if (e.animationName === 'fadeOut') {
        nav.style.display = 'none'; 
        nav.classList.remove('fade-out'); 
    }
});

