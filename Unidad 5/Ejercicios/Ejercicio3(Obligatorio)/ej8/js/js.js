/**
 * Funcion que multiplica dos numeros
 * @param {number} op1 - primer numero
 * @param {number} op2 - segundo numero 
 * @returns number - multiplicacion de los 2 numeros
 */
const mult = (op1, op2) =>{
    return op1*op2;
}
/**
 * Funcion que te calcula el factorial de un numero
 * @param {number} num - numero que se calcula el factorial
 * @returns number - factorial del numero
 */
const factorioal = num =>{
    let fact=num;

    for (let i=num-1; i>0; i--){
        fact=mult(fact, i);
    }

    return fact;
}

let n=parseInt(prompt("Dime un numero"));

alert(factorioal(n));