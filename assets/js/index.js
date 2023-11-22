const header = document.getElementById('header')
const toggleBtn = document.querySelector('#nav__toggle');
const toggleOpen = document.querySelector('#toggle__open');
const toggleClose = document.querySelector('#toggle__close');
const navRight = document.querySelector('.nav__menu')
const navLogo = document.querySelector('.nav__logo')
const navLink = document.querySelectorAll('.nav__link');
const navMenu = document.querySelector('.nav__menu')
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const html = document.querySelector('html')
const themeToggle = document.getElementById('theme__toggle');
const headerTitle = document.querySelectorAll('.header__title')
const isTheme = localStorage.getItem('theme');
const hero = document.getElementById('hero');
const servicesCard = document.querySelectorAll('.services__card');
const servicesCardIcons = document.querySelectorAll('.services__card i');
const testimonialCard = document.querySelectorAll('.testimonial__card');
const testimonialCardSVG = document.querySelectorAll('.testimonial__card svg');
const priceCard = document.querySelectorAll('.price__card');
const blogCard = document.querySelectorAll('.blog__card');
const contactLeft = document.querySelector('.contact__left');
const contactRight = document.querySelector('.contact__right');
const svg = document.querySelectorAll('svg:not(.card__rating svg)');
const messageInput = document.querySelectorAll('.contact__form input, textarea')
const portfolioWrappper = document.querySelector('.portfolio__wrappper')

const socialLink = document.querySelectorAll('.social__link');
const socialIcons = document.querySelectorAll('.social__link i');
const portfolioCard = document.querySelectorAll('.portfolio__card')


// nav background change function
const maxWidth = window.matchMedia("(max-width: 992px)");
const resizeScreen = () => {
    const width = document.body.clientWidth;
    const isTheme = localStorage.getItem('theme');

    if (width <= 992 && isTheme == "dark") {
        navMenu.style.background = "#242B33";
    } else if (width > 992 && isTheme == "dark") {
        navMenu.style.background = "transparent";
    } else {
        navMenu.style.background = "#FFFFFF";
    }
}
window.addEventListener('resize', resizeScreen)

toggleBtn.addEventListener('click', (event) => {
    if (event.target.id === "toggle__open") {
        toggleOpen.style.display = "none";
        toggleClose.style.display = "block"
        navRight.classList.add('nav__show')
    } else {
        toggleOpen.style.display = "block";
        toggleClose.style.display = "none"
        navRight.classList.remove('nav__show')
    }
})
navRight.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
        navRight.classList.remove('nav__show');
        toggleOpen.style.display = "block";
        toggleClose.style.display = "none";

        // removing active class from the previous nav menu & adding to current clicked nav menu
        document.querySelector('.nav__menu .active__link').classList.remove('active__link');
        event.target.classList.add('active__link')
    }
})

/* dark & light mood functionality start */
if (isTheme == 'dark') {
    html.classList.add('dark');
    moon.style.display = "none";
    sun.style.display = "block"
    html.classList.remove('light');
    hero.style.background = "#1D232A";

    header.style.background = '#1D232A';
    header.style.borderBottom = "1px solid rgba(166, 173, 186, 0.08)";
    navLogo.style.color = "#A6ADBA";
    navLink.forEach((item) => item.style.color = "#A6ADBA");
    svg.forEach((item) => item.style.fill = "#A6ADBA");
    socialIcons.forEach((icon) => icon.style.color = "#A6ADBA");
    servicesCardIcons.forEach((icon) => icon.style.color = "#F0F0F6")

    messageInput.forEach((input) => {
        input.style.background = "#1D232A";
        input.style.color = "#FFFFFF";
    });

    [...servicesCard, ...testimonialCard, ...priceCard, ...blogCard, ...socialLink, contactLeft, contactRight, portfolioWrappper].forEach((card) => {
        card.style.border = "1px solid rgba(166, 173, 186, 0.05)"
        card.style.background = "#242B33";
    });
    portfolioCard.forEach((item) => item.style.borderColor = "#8080803b");
    resizeScreen()
}




themeToggle.addEventListener('click', () => {
    const active = html.classList.toggle('dark');
    if (active) {
        localStorage.setItem('theme', 'dark');
        moon.style.display = "none";
        sun.style.display = "block";
        html.classList.remove('light');
        hero.style.background = "#1D232A";

        header.style.background = '#1D232A';
        header.style.borderBottom = "1px solid rgba(166, 173, 186, 0.08)";
        navLogo.style.color = "#A6ADBA";
        navLink.forEach((item) => item.style.color = "#A6ADBA");
        svg.forEach((item) => item.style.fill = "#A6ADBA");
        socialIcons.forEach((icon) => icon.style.color = "#A6ADBA");
        servicesCardIcons.forEach((icon) => icon.style.color = "#F0F0F6")
        messageInput.forEach((input) => {
            input.style.background = "#1D232A";
            input.style.color = "#FFFFFF";
        });

        [...servicesCard, ...testimonialCard, ...priceCard, ...blogCard, contactLeft, ...socialLink, contactRight, portfolioWrappper].forEach((card) => {
            card.style.border = "1px solid rgba(166, 173, 186, 0.05)"
            card.style.background = "#242B33";
        })
        portfolioCard.forEach((item) => item.style.borderColor = "#8080803b");
        slideShow()
        resizeScreen()

    } else {
        localStorage.setItem('theme', null);
        moon.style.display = "block";
        sun.style.display = "none";
        html.classList.add('light');
        hero.style.background = "linear-gradient(180deg,#f8fafc,rgba(242,202,252,.11) 34.69%,rgba(250,198,252,.11) 44.06%,rgba(175,183,255,.11) 54.48%,rgba(142,220,200,.07) 64.9%,#f8fafc 97.95%)";

        header.style.background = '#FFFFFF';
        header.style.borderBottom = "none";
        navLogo.style.color = "#18191A";
        navLink.forEach((item) => item.style.color = "#18191A");
        svg.forEach((item) => item.style.fill = "#18191A");
        socialIcons.forEach((icon) => icon.style.color = "#18191A");
        servicesCardIcons.forEach((icon) => icon.style.color = "#FFB400")
        messageInput.forEach((input) => {
            input.style.background = "#FFFFFF";
            input.style.color = "black";
        });

        [...servicesCard, ...testimonialCard, ...priceCard, ...blogCard, ...socialLink, contactLeft, contactRight, portfolioWrappper].forEach((card) => {
            card.style.background = "rgb(248 250 252)";
            card.style.border = "1px solid rgba(71, 85, 105, .1)";
            card.style.borderRadius = "4px"
        });
        contactLeft.style.background = "#FFFFFF";
        contactRight.style.background = "#FFFFFF";
        portfolioCard.forEach((item) => item.style.borderColor = "rgba(71, 85, 105, .1)");
        resizeScreen()
        slideShow()
    }
})


/* dark & light mood functionality end */


/* portfolio start */
const portfolioMenu = document.querySelector('.portfolio__menu');
/* const portfolioItem = document.querySelectorAll('.portfolio__card'); */
const arrowIcons = document.querySelectorAll('.portfolio__wrappper img');
// this code for dragging
portfolioMenu.addEventListener('mousedown', () => isdragging = true)
portfolioMenu.addEventListener('mouseup', () => isdragging = false)
portfolioMenu.addEventListener('mousemove', (e) => {
    if (!isdragging) return;
    portfolioMenu.scrollLeft = portfolioMenu.scrollLeft - e.movementX;
})
// this code for slide shadow
const slideShow = () => {
    const isTheme = localStorage.getItem('theme');
    const scrollLeft = portfolioMenu.scrollLeft;
    const maxScrollableWidth = portfolioMenu.scrollWidth - portfolioMenu.clientWidth;

    portfolioWrappper.style.setProperty("--colorBefore", scrollLeft > 0 ? `${isTheme == "dark" ? "#242B33" : "#fefefe"}` : "");
    portfolioWrappper.style.setProperty("--colorAfter", maxScrollableWidth == scrollLeft ? "" : `${isTheme == "dark" ? "#242B33" : "#fefefe"}`)
}
slideShow()
portfolioMenu.addEventListener('scroll', slideShow)
// this code for active item color change
const allMenuitem = document.querySelectorAll('.menu__item');
allMenuitem.forEach((item) => {
    item.addEventListener('click', () => {
        // removing active class from the previous item & adding to current clicked item
        document.querySelector('.portfolio__menu .active').classList.remove('active');
        item.classList.add('active')
    })
})
// this code for clicking

portfolioMenu.addEventListener('click', (e) => {
    if (e.target.matches('li')) {
        const menuId = e.target.id;
        portfolioCard.forEach((item) => {
            if (menuId != item.id && menuId != "all-categories") {
                item.style.display = "none"
            } else {
                item.style.display = "block";
            }
        })
    }
})

/* portfolio menu end */


/* Testimonial start */
const testimonialBody = document.querySelector('.testimonial__body');
let isdragging = false;

/* testimonialBody.addEventListener('mousemove', (e) => {
    if (!isdragging) return
    testimonialBody.scrollLeft = testimonialBody.scrollLeft - e.movementX;
})
testimonialBody.addEventListener('mousedown', () => isdragging = true)
testimonialBody.addEventListener('mouseup', () => isdragging = false) */
/* Testimonial end */


const email = document.querySelector('.email');
const span = document.querySelector('.email span');
email.addEventListener('click', () => {
    var text = "abubakarsiddique7912@gmail.com";
    navigator.clipboard.writeText(text).then(function () {
        span.style.display = "block"
        setTimeout(() => {
            span.style.display = "none"
        }, 3000)
    }, function (err) {
    });
})
