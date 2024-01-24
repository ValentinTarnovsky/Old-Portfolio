AOS.init();


// Dropdown Menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
        toggle.classList.toggle('show-icon');
    });

    const menuLinks = nav.querySelectorAll('.nav__link--close, .dropdown__link');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show-menu');
            toggle.classList.remove('show-icon');
        });
    });
};

showMenu('nav-toggle', 'nav-menu');


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

// Light - Dark Theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
    updateThemeIcon(savedTheme === 'light-theme' ? 'ri-sun-fill' : 'ri-moon-fill');
}

document.getElementById('dark-theme-toggle').addEventListener('click', function () {
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark-theme');
    updateThemeIcon('ri-moon-fill');
});

document.getElementById('light-theme-toggle').addEventListener('click', function () {
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
    updateThemeIcon('ri-sun-fill');
});

function updateThemeIcon(iconClass) {
    const themeIcon = document.getElementById('theme-icon');
    themeIcon.className = '';
    themeIcon.classList.add(iconClass);
    localStorage.setItem('themeIcon', iconClass);
}

const savedThemeIcon = localStorage.getItem('themeIcon');
if (savedThemeIcon) {
    const themeIcon = document.getElementById('theme-icon');
    themeIcon.classList.add(savedThemeIcon);
}

// Auto typing

const targetElement = document.getElementById('auto-typing');
const texts = ['Web Developer...', 'Freelancer...'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        targetElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        targetElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length + 1) {
        isDeleting = true;
        setTimeout(typeText, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500);
    } else {
        setTimeout(typeText, 80);
    }
}

typeText();