AOS.init();


// Dropdown Menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}
showMenu('nav-toggle', 'nav-menu')


// Animated Scroll line
const scrollline = document.querySelector('.scroll-line');

function fillscrollline() {
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolled = window.scrollY;
    const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

    scrollline.style.width = percentScrolled + '%';
};

window.addEventListener('scroll', fillscrollline);


// Switch Scroll Nav
let sections = [
    document.getElementById('about'),
    document.getElementById('skills'),
    document.getElementById('projects'),
    document.getElementById('logo'),
];

let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        } else {
            document.querySelector('header nav a[href*=' + id + ']').classList.remove('active');
        }
    });
};

