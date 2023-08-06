// Inicializamos  a  al valor  10 
let a = 10;
// Inicializamos  z  al valor 0  
let z = 0;

// a  es igual a 10,  por lo tanto  z  es igual a 10. 
z = a;

// El valor de a se incrementa justo antes de ser asignado a z, por lo  que a es 11 y z valdrá 11. 
z = ++a;

// Se asigna el valor de a (11) a z y luego se incrementa el valor de 
z = a++;

//a (pasa a ser 12). 
z = a++;

/*OTROS EJEMPLOS*/
let x = 2;
let y = 8;

//  v  es igual a -2,  pero x sigue siendo igual a 2. 
let v = -x;

//  v  es igual a -10,  x es igual a 2 e y es igual a 8.
v = - (x + y);

//  v  es igual a 6,  pero x sigue siendo igual a 2 e y igual a
v = -x + y;    