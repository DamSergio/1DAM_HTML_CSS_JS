//Pido una cadena de texto
let cadena=prompt("Dime una cadena");
//Creo variable para escribir cadena
let cad;
//Repito hasta que lo deja vacio
do{
    cad=prompt("Dime una cadena");
    if (cad!=null){
        cadena=cadena+"-"+cad;
    }
} while(cad!=null);
//Imprimo la cadena
alert(cadena);