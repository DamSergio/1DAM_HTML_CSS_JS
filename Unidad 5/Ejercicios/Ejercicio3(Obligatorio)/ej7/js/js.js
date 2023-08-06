/**
 * Esta función devuelve la longitud de una cadena de texto.
 * @param {string} cadena - La cadena de texto a medir.
 * @returns {number} - La longitud de la cadena.
 */
const longitud = cadena =>{
    return cadena.length;
};

/**
 * Esta función devuelve verdadero si el parámetro es un string, falso en caso contrario.
 * @param {*} cadena - El valor a comprobar.
 * @returns {boolean} - Verdadero si el valor es un string, falso en caso contrario.
 */
const esString = cadena =>{
    return typeof cadena == "string";
};

/**
 * Esta función devuelve verdadero si el parámetro es un booleano, falso en caso contrario.
 * @param {*} bol - El valor a comprobar.
 * @returns {boolean} - Verdadero si el valor es un booleano, falso en caso contrario.
 */
const esBoolean = bol =>{
    return typeof bol == "boolean";
};

/**
 * Esta función devuelve verdadero si el parámetro es un número, falso en caso contrario.
 * @param {*} num - El valor a comprobar.
 * @returns {boolean} - Verdadero si el valor es un número, falso en caso contrario.
 */
const esNum = num =>{
    return typeof num == "number";
};

//1)
let max=0;
let valorMax;

for (cad of valores){
    if (esString(cad)){
        if(longitud(cad)>max){
            max=longitud(cad);
            valorMax=cad;
        }
    }
}

alert(valorMax);

//2)
for (boleano of valores){
    if (esBoolean(boleano)){
        if (boleano){
            alert("verdadero");
        } else {
            alert("falso");
        }
    }
}

//3)
let op1=0;
let op2=0;

for (numero of valores){
    if (esNum(numero)){
        if (op1==0){
            op1=numero;
        } else {
            op2=numero;
        }
    }
}

alert(op1+op2);
alert(op1-op2);
alert(op1*op2);
alert(op1/op2);
