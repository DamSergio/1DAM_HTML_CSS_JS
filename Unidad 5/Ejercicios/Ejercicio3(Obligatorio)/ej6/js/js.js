/**
 * Funcion que me dice si i es multiplo de 4
 * @param {Number} i . numero que voy a comprobar
 * @returns String . cadena diciendome que es multiplo
 */
const comp4=i=>{
    if (i%4==0){
        return " (multiplo de 4) ";
    }
    return "";
}

/**
 * Funcion que me dice si i es multiplo de 9
 * @param {Number} i . numero que voy a comprobar
 * @returns String . cadena diciendome que es multiplo
 */
const comp9=i=>{
    if (i%9==0){
        return " (multiplo de 9) ";
    }
    return "";
}

/**
 * Funcion que me añade ---------------- si es multiplo de 5
 * @param {Number} i . numero que voy a comprobar
 * @returns String . cadena --------------
 */
const comp5=i=>{
    if (i%5==0){
        return " ----------------------------------- <br> ";
    }
    return "";
}

/**
 * Funcion que imprime una cadena n el documento
 * @param {String} cad . cadena a imprimir
 * @returns String . cadena impresa
 */
const imprimir=cad=> document.write(cad);

//Recorro del 1 al 500
for (let i=1; i<=500; i++){
    imprimir(i+comp4(i)+comp9(i)+"<br>");
    imprimir(comp5(i));
}