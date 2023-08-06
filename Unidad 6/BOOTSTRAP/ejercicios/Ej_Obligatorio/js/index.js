const user_name = document.getElementById("usuario");
const password = document.getElementById("pass");
const login_button = document.getElementById("login");

login_button.addEventListener("click", () => {
    let is_admin = user_name.value == "admin" && password.value == "admin";
    
    if (is_admin){
        window.open("pages/principal.html","_self");
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});