/**
 * Funcion que devuelve una cadena introducida por el usuario
 * @returns String . cadena introducida por el usuario
 */
const pedirTeclado = () => prompt("Introducir aqui");
/**
 * Funcion que devuelve verdadero o falso si es un numero
 * @param {String} num . cadena que se va a comprobar que es un numero
 * @returns boolean . true si es un numero false si no
 */
const esNum = num =>{
    return !isNaN(num);
};
/**
 * Calcula la suma de los elementos de un array.
 * @param {Array} array - El array del cual se quiere calcular la suma.
 * @returns {Number} La suma de los elementos del array.
 */
const sumaArray = array =>{
    let suma=0;

    for (n of array){
        if (typeof n == "number"){
            suma+=n;
        }
    }

    return suma;
};
/**
 * Calcula la media aritmética de los elementos de un array.
 * @param {Array} array - El array del cual se quiere calcular la media aritmética.
 * @returns {Number} La media aritmética de los elementos del array.
 */
const mediaArray = array =>{
    let media=0;

    for (n of array){
        if (typeof n == "number"){
            media+=n;
        }
    }

    return media/array.length;
};
/**
 * Encuentra el número mayor de un array.
 * @param {Array} array - El array del cual se quiere encontrar el número mayor.
 * @returns {Number} El número mayor del array.
 */
const maxArray = array =>{
    let max=array[0];

    for (n of array){
        if (typeof n == "number"){
            if (n>max){
                max=n;
            }
        }
    }

    return max;
};
/**
 * Encuentra el número menor de un array.
 * @param {Array} array - El array del cual se quiere encontrar el número menor.
 * @returns {Number} El número menor del array.
 */
const minArray = array =>{
    let min = array[0];

    for (n of array){
        if (typeof n == "number"){
            if (n<min){
                min=n;
            }
        }
    }

    return min;
};
