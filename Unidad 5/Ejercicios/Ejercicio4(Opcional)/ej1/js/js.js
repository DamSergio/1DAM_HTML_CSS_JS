/**
 * Funcion que recoore un array con un while y lo muestra por pantalla
 * @param {array} array . array que va a recorrer
 */
const recorrerWhile = (array) => {
    let n=0;

    while (n<array.length){
        document.write(array[n]+"<br>");
        n++;
    }
};
/**
 * Funcion que recoore un array con un for y lo muestra por pantalla
 * @param {array} array . array que va a recorrer
 */
const recorrerFor = array =>{
    for (i in array){
        document.write(array[i]+"<br>");
    }
};
/**
 * Funcion que recoore un array con un foreach y lo muestra por pantalla
 * @param {array} array . array que va a recorrer
 */
const recorrerForEach = array => {
    for (n of array){
        document.write(n+"<br>");
    }
};
/**
 * Funcion que recoore un array de numeros y lo muestra por pantalla sumando 1 a cada numero
 * @param {array} array . array que va a recorrer
 */
const recorrerSumaUno = array =>{
    for (n of array){
        document.write((n+1)+"<br>");
    }
};
/**
 * Funcion que copia un array en otro y le suma 1 a cada numero del array
 * @param {array} array . array que va a copiar
 * @returns array . array nuevo al que se a sumado 1 a cada numero del array original
 */
const copiaMasUno = array =>{
    let copia = new Array();

    for (i in array){
        copia[i]=array[i]+1;
    }

    return copia;
};
/**
 * Funcion que recorre un array de numeros y hace la media
 * @param {array} array . array que va a recorrer y calcular la media
 * @returns number . media del array proporcionado
 */
const calcMedia = array =>{
    let media=0;

    for (n of array){
        media+=n;
    }

    media/=array.length;

    return media;
};
/**
 * Funcion que genera un numero aleatorio entre 1 y 100
 * @returns number . numero aleatorio generado
 */
const generarNumero = num =>{
    return Math.floor(1+Math.random()*100);
};
/**
 * Funcion que recorre un array y lo rellena con numero aleatorios
 * @param {array} array . array que va a rellenar
 * @returns array . array ya relleno
 */
const rellenar = array =>{
    for (let i=0; i<array.length; i++){
        array[i]=generarNumero();
    }

    return array;
};
/**
 * Funcion que rellena un array tantas veces como le digas
 * @param {array} array . array que vas a rellenar
 * @param {number} num . numero de veces que va a rellenar
 * @returns array . array relleno
 */
const rellenarXVeces = (array, num) => {
    for (let i=0; i<num; i++){
        array[i]=generarNumero();
    }

    return array;
};
/**
 * Funcion que pide una cadena y lo devuelve
 * @returns String . Cadena proporcionado por el usuario
 */
const pedirCad = () => prompt("Insertar");
/**
 * Funcion que te devuelve verdadero o falso dependiendo de si es un numero o no
 * @param {String} num . cadena que va a mirar si es un numero
 * @returns boolean . dependiendo de si es un numero o no
 */
const compNum = num =>{
    return !isNaN(num);
}
/**
 * Funcion que compara dos cadenas y te devuelve verdadero si son iguales
 * @param {String} cad1 . primera cadena a comparar
 * @param {String} cad2 . segunda cadena a comparar
 * @returns boolean . true si son iguales false si no
 */
const comp2Cad = (cad1, cad2) =>{
    return cad1==cad2;
}
/**
 * Funcion que recorre un array y devuelve verdadero si la cadena que le pasas es igual a alguno de los elementos de array
 * @param {array} array . array que va a recorrer
 * @param {String} cad . cadena que va a comparar
 * @returns boolean . true si la cadena esta en el array y false si no
 */
const compCadArray = (array, cad) =>{
    for (col of array){
        if (comp2Cad(col, cad)){
            return true;
        }
    }
    return false;
}

//1)

let miArray = [1,2,3,4,5,6];

recorrerWhile(miArray);
document.write("------------------------------<br>");
recorrerFor(miArray);
document.write("------------------------------<br>");
recorrerForEach(miArray);
document.write("------------------------------<br>");
recorrerSumaUno(miArray);
document.write("------------------------------<br>");
recorrerFor(copiaMasUno(miArray));
document.write("------------------------------<br>");
document.write(calcMedia(miArray)+"<br>");
document.write("------------------------------<br>");

//2)

let arrayRandom = new Array(20);

arrayRandom=rellenar(arrayRandom);
recorrerFor(arrayRandom);
document.write("------------------------------<br>");

//3)

alert("Dime un numero");
let arrayVacio = new Array();
let numeros = pedirCad();

if (compNum(numeros)){
    numeros=parseInt(numeros);
    arrayVacio=rellenarXVeces(arrayVacio, numeros);
    recorrerFor(arrayVacio);
    document.write("------------------------------<br>");
} else {
    document.write("Numero no valido");
    document.write("------------------------------<br>");
}

//4)

let colores=["azul", "amarillo", "rojo", "verde", "café", "rosa"];

alert("Dime un color");
let color=pedirCad();

if (compCadArray(colores, color)){
    document.write(color+" esta en el array");
} else {
    document.write(color+" no esta en el array");
}