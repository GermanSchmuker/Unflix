document.addEventListener("DOMContentLoaded", function () {
    let nombre = document.getElementById("campoDeTexto1");
    let email = document.getElementById("campoDeTexto2");
    let botonEnviar = document.getElementById("botonEnviar");

    function validaCampos() {
        botonEnviar.disabled = !(nombre.value && email.value);
    }

    nombre.addEventListener("input", validaCampos);
    email.addEventListener("input", validaCampos);

    function valida_campo(event) {

        event.preventDefault();
        if (!nombre.value || !email.value) {
            return false;
        }
        window.location.href = "../index.html";
        return true;
    }
    document.querySelector("form").addEventListener("submit", valida_campo);
})