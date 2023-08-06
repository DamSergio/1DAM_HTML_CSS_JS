//Creamos 3 arrays
let profesores = ["Cristina","Sésar","Miguel","Benjamin"];
let asignaturas=["Seguridad","Bases de Datos","Sistemas Informáticos","Redes"];
let alumnos=[24,17,28,26];

for (let indice in profesores){
document.write("<br/>"+profesores[indice]+" del módulo de "+asignaturas[indice]+", tiene "+alumnos[indice]+" alumnos en clase.");
}

