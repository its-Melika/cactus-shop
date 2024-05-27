/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navClose = document.getElementById('close-nav')
const navToggle = document.getElementById('nav-toggle')

/*show menu*/
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

/*hide menu*/
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav-link')

function closemenu(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLinks.forEach(navlink => navlink.addEventListener('click' , closemenu))

/*=============== ADD BLUR HEADER ===============*/
const BLURlHeader = ()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('buler-header') : header.classList.remove('buler-header')
   
}
window.addEventListener('scroll', BLURlHeader)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = () => {
  const scrollup = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollup.classList.add('show-scroll') : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('.section[id]');

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop;
    const sectionId = current.getAttribute('id');

    // Improved selector to target link with matching href (assuming '#' + sectionId)
    const sectionLink = document.querySelector(`a[href="#${sectionId}"]`);

    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionLink.classList.add('active-link');
    } else {
      sectionLink.classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin : 'top',
  distance : '80px',
  duration : '2500',
  delay : '300',
  rest : 'true'
})
sr.reveal('.home-img, .new-data, .care-img, .contact-content, .footer')
sr.reveal('.home-data, .care-list, .contact-img',{delay:500})
sr.reveal('.new-card',{delay:500, interval:100})
sr.reveal('.shop-card',{interval:100})