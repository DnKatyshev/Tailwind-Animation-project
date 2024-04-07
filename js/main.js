// GSAP-анимация LAYOUT-a !
let tl_1 = gsap.timeline()
tl_1
    .from('#layout-title span', {
        autoAlpha: 0, 
        xPercent: -50,
        yPercent: -30,
        skewX: 30,
        rotation: -8,
        duration: 1, 
        stagger: .3
    })
    .from('#phone', {
        autoAlpha: 0, 
        xPercent: -30,
        yPercent: 40,
        rotation: 20,
        duration: 1.2, 
    }, '<')
    .from('#logo path', {
        autoAlpha: .3, 
        strokeDashoffset: 300,
        stagger: .4,
        duration: 1.5, 
    })

// Анимаиця стрелок при hover
const layoutArrow = document.querySelector('#layout-arrow')
const layoutArrowAnimation = gsap.to('#layout-arrow svg', {
    paused: true,
    y: 14,
    ease: "elastic.in(1,0.3)",
    duration: 1.6,
})
layoutArrow.addEventListener('mouseenter', () => {
    layoutArrowAnimation.play()
})
layoutArrow.addEventListener('mouseleave', () => {
    layoutArrowAnimation.reverse()
})

const footerArrow = document.querySelector('#footer-arrow')
const footerArrowAnimation = gsap.to('#footer-arrow svg', {
    paused: true,
    x: 18,
    ease: "elastic.in(1,0.3)",
    duration: 1.6,
})
footerArrow.addEventListener('mouseenter', () => {
    footerArrowAnimation.play()
})
footerArrow.addEventListener('mouseleave', () => {
    footerArrowAnimation.reverse()
})


// Parallax-эффект
gsap.to('#about img', {
    y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed * 0.2,
    scrollTrigger:{
        trigger: '#about',
        start: 'top top',
        scrub: 0,
    },
})


// Projects-Cards
gsap.from('#projects-main a', {
    scrollTrigger:{
        trigger: '#projects',
        start: 'top top',
        scrub: false,
    },
    autoAlpha: 0, 
    scale: 0,
    stagger: .4,
    duration: 1.2,
})

// ----------------------------------- GSAP------------------------------------

 


// DARK-MODE
const themeSwitch = document.querySelector('.dark-btn')
themeSwitch.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('html').classList.toggle('dark')
})





//-------------------
// Burger-Nenu
let burgerOpen = document.querySelector('.burger-menu--open')
let burgerClose = document.querySelector('.burger-menu--close')
let menuOverlay = document.querySelector('.header__menu--mob')

burgerOpen.addEventListener('click', function() {
    menuOverlay.classList.add('active-menu')
    document.querySelector('html').classList.add('fixed-page')
})
burgerClose.addEventListener('click', function(event) {
    event.preventDefault()
    menuOverlay.classList.remove('active-menu')
    document.querySelector('html').classList.remove('fixed-page')
})
let mobLinks = document.querySelectorAll('[data-mob-link]')
mobLinks.forEach((mobLink) => {
mobLink.addEventListener('click', (e) => {
    menuOverlay.classList.remove('active-menu')
    popupOverlay.classList.remove('active')
    document.querySelector('html').classList.remove('fixed-page')
})
})
// Burger-Nenu



// BigSlider
const swiper = new Swiper('#slider-main', {
    navigation: {
        prevEl: '#left-arrow',
        nextEl: '#right-arrow',
        enabled: true,       
    },
    pagination: {
        el: '#pagination', 
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 25,
    speed: 1300,

    breakpoints: {
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
    },

    autoplay: {
        delay: 2000,
    },
})
