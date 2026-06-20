const roles = [
"Full Stack Developer",
"React Developer",
"Python Developer",
"Frontend Developer"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".typing");

function typeEffect(){

if(charIndex < roles[roleIndex].length){

typingElement.textContent += roles[roleIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,100);

}
else{

setTimeout(eraseEffect,1500);

}

}

function eraseEffect(){

if(charIndex > 0){

typingElement.textContent =
roles[roleIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseEffect,50);

}
else{

roleIndex++;

if(roleIndex >= roles.length){
roleIndex = 0;
}

setTimeout(typeEffect,300);

}

}

document.addEventListener("DOMContentLoaded",function(){
typeEffect();
});

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

const hiddenElements =
document.querySelectorAll("section");

hiddenElements.forEach((el)=>{
    el.classList.add("hidden");
    observer.observe(el);
});

function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add("show");
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove("show");
    }
}

window.addEventListener("click", function(event) {
    const modal = event.target.closest('.modal');
    if (modal && event.target === modal) {
        modal.classList.remove("show");
    }
});

function toggleSkill(id) {
    const content = document.getElementById(id);
    if (!content) return;

    const isOpen = content.classList.toggle("open");
    const header = content.previousElementSibling;

    if (header && header.querySelector("span")) {
        header.querySelector("span").textContent = isOpen ? "−" : "+";
    }

    if (isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else {
        content.style.maxHeight = null;
    }
}
