let numeral = 0.573;

// pueden tener notación científica
let numCientifico = 2.9e3;
let otroNumCientifico = 2e-3;
alert(otroNumCientifico);

// podemos escribir números en otras bases
let numBase10 = 2200;
let numBase8 = 0234;
let numBase16 = 0x2A9F;
alert(numBase16);

// tipo de datos cadena de caracteres
let miCadena = "Hola!!! esto es una cadena";
let otraCadena = "2323232323"; //es una cadena

// caracteres de escape en cadenas
let cadenaConSaltoDeLinea = "linea1\nLínea2\nLínea3";
//Esto se llama "escapar las comillas dobles"
let cadenaConComillas = "cadena con \"comillas dobles\"";
let cadenaNum = "11";
let sumaCadenaConcatenacion = otraCadena + cadenaNum;
//alert(sumaCadenaConcatenacion);

// tipos de datos booleano
let miBooleano = true;
let falso = false;
if (miBooleano) {
    alert("era true");
} else {
    alert("era false");
}
let booleano = (23 === "23");
alerts(booleano)

//operador typeof para conocer un tipo
alert("El tipo de miEntero es: " + typeof (miEntero));
alert("El tipo de miCadena es: " + typeof (miCadena));
alert("El tipo de miEntero es: " + typeof (miBooleano));
