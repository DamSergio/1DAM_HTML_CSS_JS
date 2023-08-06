/**
 * Pide al usuario un numero por teclado
 * @returns String . cadena de texto que se espera que sea un numero
 */
const pedirNumero=()=> prompt("Dime un numero");

/**
 * Funcion que comprueba si una cadena no es null
 * @param {String} cad . cadena que voy a comprobar que no sea null
 * @returns Boolean .  verdadero o falso segun la cadena no sea null o si lo sea
 */
const compNull=cad=>{
    return cad!=null;
}

/**
 * Funcion que suma 2 numeros
 * @param {Int} op1 . primer operando
 * @param {Int} op2 . segundo operando
 * @returns Int . suma de los operandos 1 y 2
 */
const suma2Digitos=(op1, op2)=>{
    return op1+op2;
}

/**
 * Funcion que muestra una cadena
 * @param {String} cad . Cadena que se va a mostrar
 * @returns 
 */
const mostrar=cad=> alert(cad);

/**
 * Declaro variables
 */
let n;
let suma=0;

do{
    //guardo el numero
    n=pedirNumero();
    //compruebo que no sea null
    if (compNull(n)){
        if (isNaN(n) || n==""){
            alert("Eso no es un numero")
        } else {
            suma=suma2Digitos(suma, parseInt(n));
        }
    }
} while (compNull(n));

mostrar(suma);
