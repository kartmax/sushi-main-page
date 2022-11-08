document.addEventListener('DOMContentLoaded', function() {
   /*====== DOM ELEMENTS IN VARIABLES/CONSTANTS ======*/
   const navMenu   = document.getElementById('nav-menu'),
         navToggle = document.getElementById('nav-toggle'),
         navClose  = document.getElementById('nav-close'),
         navLinks  = document.querySelectorAll('.nav__link'),
         header    = document.getElementById('header'),
         inputs    = document.getElementsByTagName('input'),
         scrollUp  = document.getElementById('scroll-up'),
         sections  = document.querySelectorAll('section[id]');

   /*=============== FUNCTIONS ===============*/
   function openNavMenu () {
      navMenu.classList.add('show-menu')
   }
   function closeNavMenu () {
      navMenu.classList.remove('show-menu')
   }

	/*=============== SHOW MENU ===============*/
   if(navToggle) {
      navToggle.addEventListener('click', openNavMenu)
   }
   if(navClose) {
      navClose.addEventListener('click', closeNavMenu)

      document.addEventListener('click', (e) => {
         if(document.querySelector('.show-menu')) {
            if(!e.target.closest('.show-menu') && !e.target.closest('.nav__toggle')) {
               closeNavMenu()
            }
         }
      })
   }

   /*=============== REMOVE MENU MOBILE ===============*/   
   if(navLinks) {
      navLinks.forEach(link => {
         link.addEventListener('click', closeNavMenu)
      });
   }

   /*=============== CHANGE BACKGROUND HEADER ===============*/
   const scrollHeader = () => {
      window.scrollY >= 50 ? header.classList.add('bg-header') 
                           : header.classList.remove('bg-header')
   }
   window.addEventListener('scroll', scrollHeader)

   /*=============== SHOW SCROLL UP ===============*/ 
   if(scrollUp) {
      window.addEventListener('scroll', () => {
         window.scrollY >= 350 ? scrollUp.classList.add('show-scrollup')
                               : scrollUp.classList.remove('show-scrollup')
      })
   }


   /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
   const scrollActiveLink = () => {
      const scrollY = window.scrollY;

      sections.forEach(section => {
         const sectionHeight = section.offsetHeight,
               sectionTop    = section.offsetTop - 58,
               sectionId     = section.getAttribute('id'),
               menuLinkToSection  = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
         
         if(scrollY > sectionTop && scrollY < sectionTop+sectionHeight) {
            menuLinkToSection.classList.add('active-link')
         } else {
            menuLinkToSection.classList.remove('active-link')
         }
      })
   }
   window.addEventListener('scroll', scrollActiveLink)


   /*=============== DARK LIGHT THEME ===============*/ 
   const themeButton = document.getElementById('theme-button'),
         darkTheme   = 'dark-theme',
         iconTheme   = 'ri-sun-line';

   themeButton.addEventListener('click', () => {
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
   })


   /*=============== SCROLL REVEAL ANIMATION ===============*/
   const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
      // reset: true, // repeat animation
   })

   sr.reveal(`.footer__logo, .footer__description, .footer__content`)
   sr.reveal(`.home__img`, {scale: '.85'})
   sr.reveal(`.home__title, .footer__info`, {origin: 'bottom'})
   sr.reveal(`.home__description`, {origin: 'bottom', delay: 500})
   sr.reveal(`.home__button`, {origin: 'bottom', delay: 700})
   sr.reveal(`.about__img, .recently__img`, {origin: 'left', scale: '1.1'})
   sr.reveal(`.about__data, .recently__data`, {origin: 'right', scale: '1.1'})
   sr.reveal(`.popular__card`, {interval: '100', scale: '.85'})
   sr.reveal(`.newsletter__container`, {scale: '1.1'})


   /*=============== INPUT ===============*/
   let valPlacholder = null;
   Array.from(inputs).forEach(input => {
      input.addEventListener('focus', () => {
         valPlacholder = input.getAttribute('placeholder');
         input.setAttribute('placeholder', '');
      })
      input.addEventListener('blur', () => {
         input.setAttribute('placeholder', valPlacholder);
      })
   })

})
