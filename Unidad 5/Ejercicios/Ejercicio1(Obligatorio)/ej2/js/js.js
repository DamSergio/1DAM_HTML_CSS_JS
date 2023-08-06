//Pido una nota
let nota=parseInt(prompt("Dime tu nota en lenguaje"));

//Compruebo su nota
switch(nota){
    case 0:
    case 1:
    case 2:
        alert("Muy deficiente");
        break;
    case 3:
    case 4:
        alert("Insuficiente");
        break;
    case 5:
        alert("Suficiente");
        break;
    case 6:
        alert("Bien");
        break;
    case 7:
    case 8:
        alert("Notable");
        break;
    case 9:
    case 10:
        alert("Sobresaliente");
        break;
}

//Comprueba la nota con ifs
if (nota<3){
    alert("Muy deficiente");
}

if (nota>2 && nota<5){
    alert("Insuficiente");
}

if (nota==5){
    alert("Suficiente");
}

if (nota==6){
    alert("Bien");
}

if (nota>6 && nota<9){
    alert("Notable");
}

if (nota>8){
    alert("Sobresaliente");
}