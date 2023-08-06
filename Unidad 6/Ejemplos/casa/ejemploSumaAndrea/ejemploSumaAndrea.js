let pantalla = "10/2";

let op1 = "";
let op2 = "";
let operador = "";

for (let posicion = 0; posicion < pantalla.length; posicion++){
    if (!isNaN(pantalla.charAt(posicion))){
        op2 += pantalla.charAt(posicion);
    } else {
        operador = pantalla.charAt(posicion);
        op1 = op2;
        op2 = "";
    }
}

op1 = parseFloat(op1);
op2 = parseFloat(op2);

switch (operador){
    case "+":
        alert(op1 + op2);
        break;
    case "-":
        alert(op1 - op2);
        break;
    case "*":
        alert(op1 * op2);
        break;
    case "/":
        alert(op1 / op2);
        break;
}