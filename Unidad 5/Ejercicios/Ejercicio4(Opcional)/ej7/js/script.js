/**
 * Genera un array de números enteros desde n hasta 1.
 * @param {Number} n - El número desde el cual comenzar a generar el array.
 * @returns {Array} El array de números enteros desde n hasta 1.
 */
const generarArray = n =>{
    let array = new Array();

    for (n; n>0; n--){
        array.push(n);
    }

    return array;
}

let num = pedirNum();

alert(generarArray(num))