const efectos = (event) =>{
    efecto.style.background = 'green';
    efecto.style.color = 'white';
}

const deshacer = (event) =>{
    efecto.style.background = 'white';
    efecto.style.color = 'black';
}

const trigger = document.getElementById("trigger");
const efecto = document.getElementById("efecto");

trigger.addEventListener("mouseover", efectos);
trigger.addEventListener("mouseout", deshacer);