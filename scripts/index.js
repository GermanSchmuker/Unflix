
let nombre = document.getElementById("campoDeTexto1");
let contraseña = document.getElementById("campoDeTexto2");

function valida_campo(event) {
    event.preventDefault();

    if (!nombre.value || !contraseña.value) {
        alert("El/los campos no pueden estar vacíos");
        return false;
    }
    localStorage.setItem('nombreUsuario', nombre.value);

    window.location.href = "pages/home.html";

    return true;

}





