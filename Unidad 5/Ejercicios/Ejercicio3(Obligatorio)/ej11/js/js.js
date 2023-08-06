/**
 * Funcion que te devuelve el numero deel dni
 * @param {string} dni - dni del usuario
 * @returns number - numero del dni
 */
const numeroDNI = dni =>{
    return parseInt(dni.substring(0, dni.length-1))
};
/**
 * Funcion que te devuelve la letra del dni
 * @param {string} dni - dni del usuario
 * @returns string - letra del dni
 */
const letraDNI = dni =>{
    return dni.charAt(dni.length-1);
};
/**
 * Funcion que te dice si el numero del dni es valido
 * @param {number} num - numero del dni
 * @returns boolean
 */
const numValido = num =>{
    return num<0 || num>99999999;
};
/**
 * Funcion que te dice si la letra del dni es valida
 * @param {string} cad - letra del dni
 * @param {number} num - numero del dni
 * @returns boolean
 */
const letraValida = (cad, num) =>{
    return cad == letras[num%23]
}

var letras = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T');

let dni=prompt("Dime tu DNI");

let n=numeroDNI(dni); 
let letra=letraDNI(dni);

if(numValido(n)){
    alert("Dni no valido");
} else {
    if (letraValida(letra, n)){
        alert("Dni correcto");
    } else {
        alert("Letra del dni incorrecta");
    }
}

if(numValido(n)){
    console.log("Dni no valido");
} else {
    if (letraValida(letra, n)){
        console.log("Dni correcto");
    } else {
        console.log("Letra del dni incorrecta");
    }
}

if(numValido(n)){
    document.write("<p>Dni no valido</p>");
} else {
    if (letraValida(letra, n)){
        document.write("<p>Dni correcto</p>");
    } else {
        document.write("<p>Letra del dni incorrecta</p>");
    }
}

