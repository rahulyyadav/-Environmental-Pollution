/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')

// const scrollActive = () => {
//     const scrollDown = window.scrollY

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight,
//             sectionTop = current.offsetTop - 58,
//             sectionId = current.getAttribute('id'),
//             sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

//         if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
//             sectionsClass.classList.add('active-link')
//         } else {
//             sectionsClass.classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)


const navLinks = document.querySelectorAll('.nav__link');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    navLinks.forEach(link => {
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 58;

            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
};

window.addEventListener('scroll', scrollActive);


/*=============== about section for water pollution ===============*/
// let desert_moon = document.getElementById("desert-moon");
// let man = document.getElementById("man");
//     window.addEventListener("scroll", () => {
//         let val = window.scrollY;
//         let value = val - 2900;
//         let valuet = val - 1500;
//         desert_moon.style.top = valuet * .3 + "px";
//         man.style.left = value * .6 + "px";
//     })

// let desert_moon = document.getElementById("desert-moon");
let man = document.getElementById("man");

function updateAnimation() {
    let val = window.scrollY;
    let value = val - 3000;
    // let valuet = val - 1800;
    // desert_moon.style.top = valuet * .3 + "px";
    man.style.left = value * .6 + "px";
}

window.addEventListener("scroll", updateAnimation);

window.addEventListener("resize", updateAnimation);


/*=============== PARALLAX ===============*/
let parallex = new Rellax('.parallex');

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__village', 1.2, { opacity: 0, y: 100, dealy: .1 })
gsap.from('.home__pine', 1.2, { opacity: 0, y: 150, dealy: .3 })
gsap.from('.home__mountain-2', 1.2, { opacity: 0, x: 150, dealy: .5 })
gsap.from('.home__mountain-3', 1.2, { opacity: 0, x: -150, dealy: .6 })
gsap.from('.home__mountain-1', 1.2, { opacity: 0, y: 250, dealy: .7 })
gsap.from('.home__moon', 1.2, { opacity: 0, y: 200, dealy: .8 })
gsap.from('.home__trineo', 1.2, { opacity: 0, x: -200, dealy: .8 })
gsap.from('.home__title', 1.2, { opacity: 0, y: -60, dealy: .1 })


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal(
    {
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400
    }
)
sr.reveal(`.about__data,.celebrate__img`, { origin: 'right' })
sr.reveal(`.about__img,.celebrate__data`, { origin: 'left' })
sr.reveal(`.send__card`, { interval: 100 })
sr.reveal(`.footer`)