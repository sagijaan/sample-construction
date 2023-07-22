let burger = document.querySelector(".burger");
let links = document.querySelector(".nav-links");
let textArea = document.querySelector(".text-center");
burger.addEventListener('click',()=>{
    links.classlist.toggle("nav-show");
    textArea.classList.toggle("textareahide");
})






