/**
 * Realiza una suma entre dos números.
 * @param {Number} ope1 - El primer número de la suma.
 * @param {Number} ope2 - El segundo número de la suma.
 * @returns {Number} La suma de ope1 y ope2.
 */
const suma = (ope1, ope2) =>{
    return ope1+ope2;
};
/**
 * Realiza una resta entre dos números.
 * @param {Number} ope1 - El primer número de la resta.
 * @param {Number} ope2 - El segundo número de la resta.
 * @returns {Number} La diferencia entre ope1 y ope2.
 */
const resta = (ope1, ope2) =>{
    return ope1-ope2;
};
/**
 * Realiza una multiplicación entre dos números.
 * @param {Number} ope1 - El primer número de la multiplicación.
 * @param {Number} ope2 - El segundo número de la multiplicación.
 * @returns {Number} El producto de ope1 y ope2.
 */
const mult = (ope1, ope2) =>{
    return ope1*ope2;
};
/**
 * Realiza una división entre dos números.
 * @param {Number} ope1 - El dividendo.
 * @param {Number} ope2 - El divisor.
 * @returns {Number|String} El resultado de ope1 dividido entre ope2, o un mensaje de error si ope2 es igual a 0.
 */
const div = (ope1, ope2) =>{
    if (ope2!=0){
        return ope1/ope2;
    } else {
        return "No se puede dividir entre 0";
    }
};

let op1;
do{
    op1 = prompt("Dime el primer operando");
    if (esNum(op1) && op1!=""){
        op1=parseInt(op1);
    } else {
        alert("Numero no valido")
    }
} while (typeof op1 != "number");

let op2;
do{
    op2 = prompt("Dime el segundo operando");
    if (esNum(op2) && op2!=""){
        op2=parseInt(op2);
    } else {
        alert("Numero no valido")
    }
} while (typeof op2 != "number");

alert(suma(op1, op2));
alert(resta(op1, op2));
alert(mult(op1, op2));
alert(div(op1, op2));