let n;
let suma=0;

//creo un bucle que funcionara mientras que n no sea null
do{
    //pido un numero
    n=prompt("Dime un numero");

    //compruebo que no sea null
    if (n!=null){
        //compruebo si es un numero o es una cadena vacia
        if (isNaN(n) || n==""){
            //si no es un numero o una cadena vacia entonces le digo que eso no es un numero
            alert("Eso no es un numero")
        } else {
            //si es un numero entoces se lo sumo a suma
            suma+=parseInt(n);
        }
    }
} while (n!=null);

//muestro la suma
alert(suma);