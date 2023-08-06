/**
 * Funcion que intercambia los datos de dos posiciones de un array
 * @param {Array} array - array que se van a cambiar las posiciones
 * @param {number} pos1 - posicion 1
 * @param {number} pos2 - posicion 2
 * @returns array con los datos intercambiados
 */
const swap = (array, pos1, pos2) =>{
    let aux=array[pos1];
    array[pos1]=array[pos2];
    array[pos2]=aux;

    return array;
}
/**
 * Funcion que te devuelve verdadero o falso si la posicion indicada es valida en el array o no
 * @param {Array} array - array que se va a mirar la posicion
 * @param {number} num - posicion que se va a mirar
 * @returns boolean - verdadero si esta en el array falso si no
 */
const valido = (array, num) =>{
    let resta=array.length-num;

    return resta>0;
}

alert("Dime la primera posicion a intercambiar");

let arr = [1,2,3];
let pos1;

do{
    pos1=pedirTeclado();

    if (esNum(pos1) && valido(arr, pos1)){
        pos1=parseInt(pos1);
    } else {
        alert("Posicion no valida");
    }
} while (isNaN(pos1) || !valido(arr, pos1));

alert("Dime la segunda posicion a intercambiar");
let pos2;

do{
    pos2=pedirTeclado();

    if (esNum(pos2) && valido(arr, pos2)){
        pos2=parseInt(pos2);
    } else {
        alert("Posicion no valida");
    }
} while (isNaN(pos2) || !valido(arr, pos2))

arr=swap(arr, pos1, pos2);

alert(arr);