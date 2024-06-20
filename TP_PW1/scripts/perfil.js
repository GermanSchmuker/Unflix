let formulario = document.getElementById("formulario");
let botonVerde = document.getElementById("boton_verde");

let nuevaContrasenia = document.getElementById("new-password");
let repetirNuevaContrasenia = document.getElementById("repeat-new-password");

let formularioValidoParaEnviarContrasenias = false;
let formularioValidoParaEnviarMetodosDePago = false;

let radioTarjetaDeCredito = document.querySelector("#radio_tarjeta");
let radioCuponDePago = document.querySelector("#cupon_de_pago");
let radioTranserenciaBancaria = document.querySelector("#transferencia_bancaria");

let radioTarjetaDeCreditoTildado = false;
let radioCuponDePagoTildado = false;
let radioTranserenciaBancariaTildado = false;


let numeroTarjeta = document.getElementById("numero_tarjeta");
let codigoTarjeta = document.getElementById("codigo_tarjeta");

let numeroDeTarjetaValido = false;
let claveValida = false;

let checkBoxPagoFacil = document.querySelector("#pago_facil");
let checkBoxRappiPago = document.querySelector("#check_rapi_pago");



/*-------------Validar Contraseña---------------------------------------------------------------*/
repetirNuevaContrasenia.addEventListener("keyup", ()=>{
    if (verificarCamposContrasenia() == true) {
        botonVerde.disabled = false;
        botonVerde.classList.add("boton_verde_habilitado");
        formularioValidoParaEnviarContrasenias = true;
    }else{
        botonVerde.disabled = true;
        botonVerde.classList.remove("boton_verde_habilitado");
        formularioValidoParaEnviarContrasenias = false;
    }
})

nuevaContrasenia.addEventListener("keyup", ()=>{
    if (verificarCamposContrasenia() == true) {
        botonVerde.disabled = false;
        botonVerde.classList.add("boton_verde_habilitado");
        formularioValidoParaEnviarContrasenias = true;
    }else{
        botonVerde.disabled = true;
        botonVerde.classList.remove("boton_verde_habilitado");
        formularioValidoParaEnviarContrasenias = false;
    }


})


function verificarCamposContrasenia(){
    if (nuevaContrasenia.value != "" && repetirNuevaContrasenia.value != "" && nuevaContrasenia.value === repetirNuevaContrasenia.value) {
        let tiene8Caracteres = false;
        let tiene2LetrasMinimo = false;
        let tiene2NumerosMinimo = false;
        let tiene2CaracteresEspeciales = false;

        if (nuevaContrasenia.value.length == 8) {
            tiene8Caracteres = true;
        }
        if (verificarQueTenga2LetrasMinimo(nuevaContrasenia.value) == true) {
            // console.log("SII");
            tiene2LetrasMinimo = true;
        }
        if (verificarQueTenga2NumerosMinimo(nuevaContrasenia.value) == true) {
            tiene2NumerosMinimo = true;
            // console.log("SII");
        }
        if (verificarQueTenga2CaracteresEspeciales(nuevaContrasenia.value) == true) {
            tiene2CaracteresEspeciales = true;
            // console.log("SII");
        }
    } else {
        return false;
    }
}

function verificarQueTenga2LetrasMinimo(valor){
    const expresionRegularLetras = /[a-zA-Z].*[a-zA-Z]/;
    return expresionRegularLetras.test(valor);
}

function verificarQueTenga2NumerosMinimo(valor){
    const expresionRegularNumeros = /[0-9].*[0-9]/;
    return expresionRegularNumeros.test(valor);
}

function verificarQueTenga2CaracteresEspeciales(valor){
    const expresionRegularCaracteresEspeciales = /.*[^a-zA-Z0-9\s].*[^a-zA-Z0-9\s].*/;
    return expresionRegularCaracteresEspeciales.test(valor);
}


/*-------------------------Validar Metodos De PAgo------------------------------------------------*/ 

/* -------EVENTO DE TARJETA DE CREDITO ------------------------------------------------------------*/
radioTarjetaDeCredito.addEventListener("click", ()=>{
    botonVerde.disabled = true;
    botonVerde.classList.remove("boton_verde_habilitado");
    
    if (radioTarjetaDeCredito.checked) {
        //console.log("radioTarjetaDeCredito")
        radioTarjetaDeCreditoTildado = true;
        radioCuponDePagoTildado = false;
        radioTranserenciaBancariaTildado = false;

        numeroTarjeta.readOnly = false;
        codigoTarjeta.readOnly = false;

        checkBoxPagoFacil.checked = false;
        checkBoxRappiPago.checked = false;

        codigoTarjeta.addEventListener("keyup", ()=>{
            if (verificarQueSean3NumDistintosDe0(codigoTarjeta.value) == true) {
                claveValida = true;
            }else{
                claveValida = false;
            }

            if (numeroDeTarjetaValido == true && claveValida == true) {
                botonVerde.disabled = false;
                botonVerde.classList.add("boton_verde_habilitado");
            }else{
                botonVerde.disabled = true;
                botonVerde.classList.remove("boton_verde_habilitado");
            } 
        });

        numeroTarjeta.addEventListener("blur", ()=>{
            let cumplio = false;

            if (verificarQueTenganEntre16Y19Nums(numeroTarjeta.value) == true) {
                if (verificarQueElUltimoSeaParSiLaSumaDeLosAnterioresEsimparOAlReves(numeroTarjeta.value) == true) {
                    cumplio = true;
                }
            }
            if (cumplio == true) {
                numeroDeTarjetaValido = true;
            }else{
                numeroDeTarjetaValido = false;
            }
            if (numeroDeTarjetaValido == true && claveValida == true) {
                botonVerde.disabled = false;
                botonVerde.classList.add("boton_verde_habilitado");
            }else{
                botonVerde.disabled = true;
                botonVerde.classList.remove("boton_verde_habilitado");
                alert("NUMERO INVALIDO")
            }
        });
    }
});

function verificarQueSean3NumDistintosDe0(valor){
    if (valor.length === 3) {
        const expReg3NumDistintosDe0 = /[1-9].*[1-9].*[1-9]/;
        return expReg3NumDistintosDe0.test(valor);
    }
    return false;
}

function verificarQueTenganEntre16Y19Nums(valor){
    if (valor.length >= 16 && valor.length <= 19) {
        return true;

    }else{
        return false;
    }
}

function verificarQueElUltimoSeaParSiLaSumaDeLosAnterioresEsimparOAlReves(valor){
    /* El último número de la tarjeta debe ser par si la suma de todos los números
    anteriores (el último no cuenta) es un número impar.*/
    //PARA PROBAR, PONER ESTE NUMERO: 1234567891234567  o sino 12345678912345678 y son los dos validos para cada caso
    let arrayNumTarjeta = [...valor]; /*asi se convierte una cadena de texto en un array de sus char. console.log(arrayNumTarjeta);*/
    let indiceDelUltimoNumero = arrayNumTarjeta.length-1;
    let resultadoDeLaSuma = 0;

    arrayNumTarjeta.forEach((caracter,index)=>{
        if (index != indiceDelUltimoNumero) {
            resultadoDeLaSuma += parseInt(caracter);
        }
    })
    if (resultadoDeLaSuma % 2 != 0 && parseInt(arrayNumTarjeta[indiceDelUltimoNumero]) % 2 === 0) {
        return true;
    }else if (resultadoDeLaSuma % 2 === 0 && parseInt(arrayNumTarjeta[indiceDelUltimoNumero]) % 2 != 0) {
        return true;
    }
    return false;
}
/*----------------------------------------------------------------------------------------------*/
/* ------- EVENTO CUPON DE PAGO  ------------------------------------------------------------*/
radioCuponDePago.addEventListener("click", ()=>{
    botonVerde.disabled = true;
    botonVerde.classList.remove("boton_verde_habilitado");
    if (radioCuponDePago.checked) {
        // console.log("radioCuponDePago")
        radioTarjetaDeCreditoTildado = false;
        radioCuponDePagoTildado = true;
        radioTranserenciaBancariaTildado = false;

        numeroTarjeta.readOnly = true;
        codigoTarjeta.readOnly = true;
    }
});

let estanTildadosLosDosCheckBox = false;

checkBoxPagoFacil.addEventListener("click",verificarEstadoDeLosChecksBox);
checkBoxRappiPago.addEventListener("click", verificarEstadoDeLosChecksBox)

function verificarEstadoDeLosChecksBox(){
    if (checkBoxPagoFacil.checked && checkBoxRappiPago.checked || !checkBoxPagoFacil.checked && !checkBoxRappiPago.checked) {
        estanTildadosLosDosCheckBox = true;
        botonVerde.disabled = true;
        botonVerde.classList.remove("boton_verde_habilitado");

   }else{
       estanTildadosLosDosCheckBox = false;
       botonVerde.disabled = false;
       botonVerde.classList.add("boton_verde_habilitado");
   }
}
/*----------------------------------------------------------------------------------------------*/
/* ------- EVENTO TRNSFERENCIA BANCARIA   ------------------------------------------------------------*/
radioTranserenciaBancaria.addEventListener("click", ()=>{
    botonVerde.disabled = true;
    botonVerde.classList.remove("boton_verde_habilitado");
    if (radioTranserenciaBancaria.checked) {
        // console.log("radioTranserenciaBancaria")
        radioTarjetaDeCreditoTildado = false;
        radioCuponDePagoTildado = false;
        radioTranserenciaBancariaTildado = true;

        numeroTarjeta.readOnly = true;
        codigoTarjeta.readOnly = true;

        checkBoxPagoFacil.checked = false;
        checkBoxRappiPago.checked = false;

        botonVerde.disabled = false;
        botonVerde.classList.add("boton_verde_habilitado");
    }else{
        radioTranserenciaBancariaTildado = false;
        botonVerde.disabled = true;
        botonVerde.classList.remove("boton_verde_habilitado");
    }
});






/*----------------------------------------------------------------------------------------------*/
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    if (formularioValidoParaEnviarContrasenias == true || verificacionMetodosDePago() == true || radioTranserenciaBancariaTildado == true) {
        formulario.submit();
    }
});

function verificacionMetodosDePago(){
    if (radioTarjetaDeCreditoTildado == true) {
        if (numeroDeTarjetaValido == true && claveValida == true) {
            return true;
        }else{
            alert("Numero y/o codigo invalidos. El campo clave de la tarjeta solo acepta 3 números distintos de cero. El campo tarjeta de crédito solo debe aceptar números con una longitud de entre 16 y 19 dígitos.El último número de la tarjeta debe ser par si la suma de todos los números anteriores (el último no cuenta) es un número impar.El último número de la tarjeta debe ser impar si la suma de todos los números anteriores (el último no cuenta) es un número par.");
        }
    }else if(radioCuponDePagoTildado == true){
        if (estanTildadosLosDosCheckBox == false) {
            return true;
        }
    }else if (radioTranserenciaBancaria == true) {
        return true;
    }




}