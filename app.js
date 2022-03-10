const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar')
menu.addEventListener('click',show);

function show(){
    if(navbar.className === "navbar"){
        navbar.className += " show";
    }else{
        navbar.className = "navbar"
    }
}