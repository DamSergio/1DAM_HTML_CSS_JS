/*let n=new Array(10);

alert(n.length)
n[19]="hola";

alert(n[11]);
alert(n.length)*/
let datos = new Array();
datos[0] = new Array("Cristina","Seguridad",24);
datos[1] = new Array("Catalina”, “Bases de Datos",17);
datos[2] = new Array("Miguel”, “Sistemas Informáticos",28);
datos[3] = new Array("Benjamin","Redes",26); 

for (let i=0; i<datos.length; i++){
    console.log(datos[i][0]+" del módulo de "+datos[i][1]+", tiene "+datos[i][2]+" alumnosen clase.");
}