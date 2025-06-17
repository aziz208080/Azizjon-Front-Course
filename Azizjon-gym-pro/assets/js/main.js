/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/

const calculateform = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-input-cm'),
      calculateKg = document.getElementById('calculate-input-kg'),
      calculateMessage = document.getElementById('calculate-message')
const calculateBmi = (e) =>{
    e.preventDefault()

    // Check if the fields have a value
    if(calculateCm.value === '' || calculateKg.value === '' ){
        // Add and remove color
        calculateMessage.classList.remote('color-green')
        calculateMessage.classList.add('color-red')

        // Show message
        calculateMassege
    }
}

calculateform.addEventListener('submit', calculateBmi)

/*=============== EMAIL JS ===============*/
