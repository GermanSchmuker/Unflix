document.addEventListener("DOMContentLoaded", function () {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    // localStorage.setItem("email", email.value);
    let nombreUsuario = document.getElementById("nombre_usuario");
    let contraseña = document.getElementById("contraseña");
    //localStorage.setItem("contraseña", contraseña.value);
    let contraseña2 = document.getElementById("repetir_contraseña");
    let tarjeta = document.getElementById("tarjeta");
    let clave = document.getElementById("clave_tarjeta");

    let validaLetra = /^[a-zA-Z]+$/;
    let validaLetraYNumero = /^[0-9a-zA-Z]+$/;
    let validaEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    let validarContraseña = /^(?=.*[a-zA-Z].*[a-zA-Z])(?=.*\d.*\d)(?=.*[^a-zA-Z\d].*[^a-zA-Z\d]).{8,}$/;
    let validarClave = /^[1-9]{3}$/;
    let validarTarjeta = /^[0-9]{16,19}$/;

    let botonEnviar = document.getElementById("boton_confirmar")

    function validaCampos() {
        botonEnviar.disabled = !(nombre.value && apellido.value && email.value && nombreUsuario.value && contraseña.value && contraseña2.value && tarjeta.value && clave.value)
    }

    nombre.addEventListener('input', validaCampos);
    apellido.addEventListener('input', validaCampos);
    email.addEventListener('input', validaCampos);
    nombreUsuario.addEventListener('input', validaCampos);
    contraseña.addEventListener('input', validaCampos);
    contraseña2.addEventListener('input', validaCampos);
    tarjeta.addEventListener('input', validaCampos);
    clave.addEventListener('input', validaCampos);

    function valida_campo(event) {

        event.preventDefault();

        if (!nombre.value || !apellido.value) {
            alert("tienes que rellenar el campo nombre/apellido");
            return false;
        } else if (!validaLetra.test(nombre.value) || !validaLetra.test(apellido.value)) {
            alert("el nombre/apellido solo lleva letras");
            return false;
        }
        if (!email.value) {
            alert("tienes que rellenar el campo E-mail");
            return false;
        } else if (!validaEmail.test(email.value)) {
            alert("el formato E-mail no esta bien escrito")
            return false;
        }
        if (!nombreUsuario.value) {
            alert("tienes que rellenar el campo nombre de usuario")
            return false;
        } else if (!validaLetraYNumero.test(nombreUsuario.value)) {
            alert("el nombre de usuario solo lleva letras y/o numeros")
            return false;
        }
        if (!contraseña.value) {
            alert("tienes que rellenar el campo contraseña")
            return false;
        } else if (!validarContraseña.test(contraseña.value)) {
            alert("la contraseña debe tener minimo 8 caracteres que contenga dos letras, dos numeros, dos caracteres especiales")
            return false;
        }
        if (!contraseña2.value) {
            alert("tienes que rellenar el campo repetir contraseña")
            return false;
        } else if (contraseña.value != contraseña2.value) {
            alert("las contraseñas son distintas")
            return false;
        }
        if (!clave.value) {
            alert("tienes que rellenar el campo clave")
            return false;
        } else if (!validarClave.test(clave.value)) {
            alert("los numeros deben ser 3 dijitos distintos de cero")
            return false;
        }
        let numeroTarjeta = tarjeta.value.trim();
        if (!tarjeta.value) {
            alert("tienes que rellenar el campo tarjeta")
            return false;
        } else if (!validarTarjeta.test(numeroTarjeta)) {
            alert("Número de tarjeta no válido");
            return false;
        }
        let numeros = Array.from(numeroTarjeta).map(Number);
        let suma = 0;
        let ultimoNumero = numeros[numeros.length - 1];
        for (let i = 0; i < numeros.length - 1; i++) {
            suma += numeros[i];
        }
        if (suma % 2 == 0 && ultimoNumero % 2 == 0) {
            alert("el ultimo numero debe ser impar")
            return false;
        } else if (suma % 2 != 0 && ultimoNumero % 2 != 0) {
            alert("el ultimo numero debe ser par")
            return false;
        }
        window.location.href = "../index.html";
        return true;
    }
    document.querySelector("section").addEventListener("submit", valida_campo);
})
