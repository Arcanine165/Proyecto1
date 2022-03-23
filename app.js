const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
const divIcon = document.querySelector('.menu-responsive')
menu.addEventListener('click',show);

function show(){
    if(navbar.className === "navbar"){
        navbar.className += " show";
        divIcon.classList.remove('menu-responsive');
        divIcon.classList.add('menu-responsive-active')
        
    }else{
        navbar.className = "navbar"
        divIcon.classList.remove('menu-responsive-active');
        divIcon.classList.add('menu-responsive')
    }
}