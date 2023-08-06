const color = () => {
    if (valor == 0)
        contador.style.color = "black";
    
    if (valor < 0)
        contador.style.color = "red";

    if (valor > 0)
        contador.style.color = "green";
};

const btn_increment = document.getElementById("increment");
const btn_reset = document.getElementById("reset");
const btn_decrease = document.getElementById("decrease");

var contador = document.getElementById("contador");
var valor = parseInt(document.getElementById("contador").innerHTML);

btn_increment.addEventListener("click", () => {
    valor++;
    contador.innerHTML = valor;
    color();
});

btn_decrease.addEventListener("click", () => {
    valor--;
    contador.innerHTML = valor;
    color();
});

btn_reset.addEventListener("click", () => {
    valor = 0;
    contador.innerHTML = valor;
    color();
});