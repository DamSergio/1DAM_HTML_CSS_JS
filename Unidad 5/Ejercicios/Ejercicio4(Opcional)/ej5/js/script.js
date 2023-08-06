/**
 * Eleva un numero a su cuadrado y lo devuelve
 * @param {Number} num - numero que se va a elevar
 * @returns {Number} - numero elevado al cuadrado
 */
const cuadrado = num =>{
    return num*num;
};
/**
 * Eleva un numero al cubo y lo devuelve
 * @param {Number} num - numero que se va a elevar
 * @returns {Number} - numero elevado al cubo
 */
const cubo = num =>{
    return num*num*num;
};

let numero = prompt("Dime un numero")

if (esNum(numero)){
    alert("Cuadrado: "+cuadrado(numero)+", cubo: "+cubo(numero));
} else {
    alert("No es un numero")
}