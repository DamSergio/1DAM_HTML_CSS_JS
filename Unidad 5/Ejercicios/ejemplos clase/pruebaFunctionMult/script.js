function mult(a, b){
    return a*b;
}

function pedirTeclado(){
    return prompt("Dime un numero");
}

function pedirNumeros(){
    let n1=parseInt(pedirTeclado());
    let n2=parseInt(pedirTeclado());

    return mostrarOperacion(mult(n1, n2));
}

function mostrarOperacion(operacion){
    if (isNaN(operacion)){
        return "Uno de los operandos no es un numero";
    } else {
        return operacion;
    }
}

alert(pedirNumeros());
