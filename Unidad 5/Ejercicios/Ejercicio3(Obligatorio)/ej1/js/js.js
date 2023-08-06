/**
 * Funcion que te pide tu edad y la devuelve como numero entero
 * @returns numero entero. la edad
 */
const pedirEdad=()=> parseInt(prompt("Dime tu edad"));
/**
 * Funcion que devuelve verdadero o falso segun sea mayor de edad o no
 * @param {number} edad . edad que se va a comprobar
 * @returns boolean . depende de si es mayor de edad (true) o menor (false)
 */
const mayorEdad=edad=>{
    return edad>=18;
}

let edad=pedirEdad();

if (mayorEdad(edad)){
    alert("Puedes conducir");
} else {
    alert("No puedes onducir");
}