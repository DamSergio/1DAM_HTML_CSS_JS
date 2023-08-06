alert("ADIVINA EL NUMERO.- La aplicacion te pedira dos valores, se generara un numero aleatorio entre estos y un numero de intentos para adivinar dicho numero secreto. ¡SUERTE!");

//Compruebo que sea un numero
let minimo;
do {
    minimo = prompt("Introduce el valor minimo del rango de numeros");
    if (isNaN(minimo) || minimo == null || minimo == ""){
        alert("Ese no es un numero valido");
    }
} while (isNaN(minimo) || minimo == null || minimo == "");
minimo = parseInt(minimo);

//Compruebo que sea un numero
let maximo;
do {
    maximo = prompt("Introduce el valor maximo del rango de numeros");
    if (isNaN(maximo) || maximo == null || maximo == ""){
        alert("Ese no es un numero valido");
    }

    if (maximo <= minimo){
        alert("Este numero tiene que ser mayor al anterior");
    }
} while (isNaN(maximo) || maximo <= minimo || maximo == null || maximo == "");
maximo = parseInt(maximo);

//Compruebo que sea un numero
let intentos;
do {
    intentos = prompt("Introduce el numero de intentos");
    if (isNaN(intentos) || intentos == null || intentos == ""){
        alert("Ese no es un numero valido");
    }

    if (intentos < 1){
        alert("Tiene que haber un minimo de 1 intentos");
    }
} while (isNaN(intentos) || intentos < 1 || intentos == null || intentos == "");
intentos = parseInt(intentos);

alert("Adivina el numero entre "+minimo+" y "+maximo+" en "+intentos+" intentos");

let random = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
//console.log(random);

let numeroUsuario;
for (var intento = 1; intento <= intentos && random != numeroUsuario; intento++){
    numeroUsuario = prompt("Intento #"+intento+": ¿Cual es tu numero?");

    if (numeroUsuario > random){
        alert("El numero es menor. Te quedan "+(intentos-intento)+" intentos");
    }

    if (numeroUsuario < random){
        alert("El numero es mayor. Te quedan "+(intentos-intento)+" intentos");
    }

    if (random == numeroUsuario){
        intento--;
    }
}
intento--;

if (intentos > intento){
    alert("¡Felicidades! Adivinastes el numero en "+(intento+1)+" intentos");
} else {
    alert("Agotastes tus "+intento+" intentos. El numero era "+random);
}