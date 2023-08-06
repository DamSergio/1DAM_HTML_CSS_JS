// Definimos la función de flecha
const sumarArray = (array) => {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
      suma += array[i];
    }
    
    return suma;
  };
  
  // Creamos un array
  const miArray = [1, 2, 3, 4, 5];
  
  // Llamamos a la función de flecha y le pasamos el array como argumento
  const resultado = sumarArray(miArray);
  
  console.log(resultado); // Imprime 15
  

