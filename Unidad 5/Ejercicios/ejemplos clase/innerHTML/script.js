/*
let elemento=prompt("Dime que elemento quieres seleccionar");

let byID=document.getElementById("id"+elemento).innerHTML;

alert(byID);

//----------------------------
*/
let collectionClass=document.getElementsByClassName("posicion");
/*
let posicion=parseInt(elemento);

alert(collectionClass[elemento-1].innerHTML);

//----------------------------

let collectionTag=document.getElementsByTagName("p");

alert(collectionTag[elemento-1].innerHTML);

//----------------------------

let query = document.querySelector("#id"+elemento).innerHTML;

alert(query);

//----------------------------

let queryAll = document.querySelectorAll("#id"+elemento);

alert(queryAll[0].innerHTML);
*/
//cambiar orden

let pos1 = prompt("Dime la primera posicion a cambiar");
let pos2 = prompt("Dime la segunda posicion a cambiar");

let aux=collectionClass[pos1-1].innerHTML;
collectionClass[pos1-1].innerHTML = collectionClass[pos2-1].innerHTML;
collectionClass[pos2-1].innerHTML = aux;