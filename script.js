document.addEventListener('DOMContentLoaded', (event) => {
   document.addEventListener('contextmenu', function(e) {
       e.preventDefault();
    });
});

let menuicon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');


window.onscroll =()=>{
  sections.forEach(sec=>{
    let top=window.scrollY;
    let offset=sec.offsetTop-150;
    let height=sec.offsetHeight;
    let id =sec.getAttribute('id');
    if(top >=offset && top <offset + height){
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelectorAll('header nav a[href*=' + id + ']').classList.add('active')

      })
    }
  })
}

menuicon.onclick =()=>{
  menuicon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
