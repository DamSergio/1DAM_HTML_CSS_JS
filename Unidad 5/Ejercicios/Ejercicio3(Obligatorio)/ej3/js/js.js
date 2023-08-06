/**
 * Funcion que pide una cadena por teclado y la devuelve
 * @returns {string} Cadena introducida por el usuario
 */
const pedirCadena=()=>prompt("Dime una cadena");
/**
 * Funcion que comprubea que la cadena no sea null
 * @param {String} cad . cadena proporcionada por el usuario
 * @returns {boolean} devuelve verdadero si la cadeba no es null y falso si lo es
 */
const comprobar=(cad)=>{
    return cad!=null;
}

/**
 * pido la primera cadena
 */
let cadena=pedirCadena();
let cad;

/**
 * Hago un bucle que se repite hasta que la cadena sea null
 */
do{
    /**
     * pido el resto de cadenas
     */
    cad=pedirCadena();
    /**
     * compruebo que no sea null y se lo añado a la cadena
     */
    if(comprobar(cad)) {
        cadena=cadena+"-"+cad
    }
} while(comprobar(cad));

/**
 * muestro la cadena
 */
alert(cadena);
