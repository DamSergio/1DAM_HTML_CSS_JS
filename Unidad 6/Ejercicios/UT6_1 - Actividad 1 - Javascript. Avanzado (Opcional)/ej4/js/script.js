const calcular_precio = event =>{
    const precio = getValue("precio");
    const cantidad = getValue("cantidad");

    document.getElementById("total").value = precio*cantidad;
}

const getValue = id =>{
    let element = document.getElementById(id).value;
    return element;
}

document.getElementById("enviar").addEventListener("click", calcular_precio);


