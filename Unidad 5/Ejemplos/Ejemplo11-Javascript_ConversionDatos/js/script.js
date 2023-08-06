// resultado = 9 
let resultado1= 4 + 5;
alert(resultado1);

// resultado = "45" 
let resultado2= 4 + "5";
alert(resultado2);

// resultado3 = "96"
let resultado3= 4 + 5 + "6" 
alert(resultado3);   

/******************** 
Algunas conversiones
*********************/

console.log(parseInt("34"));          // resultado = 34 
console.log(parseInt("89.76"));          // resultado = 89 

console.log(parseFloat("34"));          // resultado = 34 
console.log(parseFloat("89.76"));     // resultado = 89.76 

console.log(4 + 5 + parseInt("6"));        // resultado = 15 

//conversión de números a cadenas

let conversion1 = ("" + 3400);        // resultado = "3400"
console.log(conversion1); 
let conversion2 = ("" + 3400).length;     // resultado = 4 
console.log(conversion2);
