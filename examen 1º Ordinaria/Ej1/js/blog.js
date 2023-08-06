const input_name = document.getElementById("name");
const input_send = document.getElementById("send");

input_name.addEventListener("keydown", (event) => {
    if (!isNaN(event.key)){
        event.preventDefault();
    }
});

input_send.addEventListener("dblclick", () => {
    alert("formulario enviado");
});