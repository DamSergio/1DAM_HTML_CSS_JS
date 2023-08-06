let elemento=prompt("Dime que elemento quieres seleccionar");

let byID=document.getElementById("id"+elemento).innerHTML;

alert(byID);

//----------------------------

let collectionClass=document.getElementsByClassName("posicion");

let posicion=parseInt(elemento);

alert(collectionClass[elemento-1].innerHTML);

//----------------------------

let collectionTag=document.getElementsByTagName("p");

alert(collectionTag[elemento-1].innerHTML);