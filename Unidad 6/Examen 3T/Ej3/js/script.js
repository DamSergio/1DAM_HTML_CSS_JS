//LINKS MENU
//selecciono todas las a dentro de la clase navbar
const links = document.querySelectorAll(".navbar a");

links.forEach(link => link.addEventListener("mouseenter", () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    link.style.color = "#" + randomColor;
}));

links.forEach(link => link.addEventListener("mouseleave", () => {
    link.style.color = "black";
}));

//BOTONES ROSAS
//selecciono todas las clases btn
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => boton.addEventListener("mouseenter", () => {
    boton.style.background = "red";
}));

botones.forEach(boton => boton.addEventListener("mouseleave", () => {
    boton.style.background = "#F53B57";
}));

//PRECIOS
//selecciono todas las clases price
const precios = document.querySelectorAll(".price");

precios.forEach(precio => precio.addEventListener("mouseenter", () => {
    precio.style.transition = 'font-size 0.3s ease';
    precio.style.fontSize = "7rem";
}));

precios.forEach(precio => precio.addEventListener("mouseleave", () => {
    precio.style.transition = 'font-size 0.3s ease';
    precio.style.fontSize = "5.5rem";
}));

//FORMULARIO
//selecciono todas las clases box dentro de la clase contact-form
const inputs = document.querySelectorAll(".contact-form .box");

inputs.forEach(input => input.addEventListener("focusout", () => {
    if(input.value == ""){
        input.style.border = "2px solid red";
    } else {
        input.style.border = "1px solid gray";
    }
}));

inputs[3].addEventListener("input", () => {
    if(inputs[3].value.includes("examendam")){
        inputs[3].style.border = "2px solid green";
    } else {
        inputs[3].style.border = "1px solid gray";
    }
});