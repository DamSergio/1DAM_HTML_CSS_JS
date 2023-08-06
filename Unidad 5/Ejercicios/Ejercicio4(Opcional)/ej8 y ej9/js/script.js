/**
 * Crea un nuevo array que contiene todos los elementos del array de entrada sin duplicados.
 * @param {Array} array - El array de entrada.
 * @returns {Array} Un nuevo array que contiene todos los elementos del array de entrada sin duplicados.
 */
const quitarRep = array =>{
    let nuevo = new Array();

    for (i of array){
        if (!nuevo.includes(i)){
            nuevo.push(i);
        }
    }

    return nuevo;
};
/**
 * Crea un nuevo array que contiene los elementos del array de entrada que se repiten al menos una vez.
 * @param {Array} array - El array de entrada.
 * @returns {Array} Un nuevo array que contiene los elementos del array de entrada que se repiten al menos una vez.
 */
const quitarUni = array =>{
    let nuevo = new Array();
    let cont;

    for (let i=0; i<array.length; i++){
        cont=0;

        for (let j=0; j<array.length; j++){
            if (array[i]==array[j]){
                cont++;
            }
        }

        if (cont>1){
            nuevo.push(array[i]);
        }
    }

    return nuevo;
};

let arr = [1,2,5,2,7,4,9,5,2,0,2,7,2,6];
let unicos=quitarRep(arr);
let repe=quitarUni(arr);

alert(arr);
alert(unicos);
alert(repe);