let categoriaAutos = `<div id="primer_div">
            <h4 class="titulos" id="autos">Autos</h4>
            <a href="../pages/detalleSerie.html"><img src="../assets/images/serie5.jpg" alt=""></a>
            <a href="../pages/detalleSerie.html"><img src="../assets/images/serie14.jpg" alt=""></a>
            <a href="../pages/detalleSerie.html"><img src="../assets/images/serie15.jpg" alt=""></a>
            <a href="../pages/detalleSerie.html"><img src="../assets/images/serie16.jpg" alt=""></a>
        </div>`;
let categoriaCienciaFiccion = `<div>
            <h4 class="titulos" id="ciencia_ficción">Ciencia ficción</h4>
            <a href="../pages/detalleSerie.html"><img src="../assets/images/serie17.jpg" alt=""></a>
            <a href="../pages/detalleSerie.html"><img src="../assets/images/serie18.jpg" alt=""></a>
            <a href="../pages/detalleSerie.html"><img src="../assets/images/serie19.jpg" alt=""></a>
            <a href="../pages/detalleSerie.html"><img src="../assets/images/serie1.jpg" alt=""></a>
        </div>`;
let categoriaComedia = `<div>
            <h4 class="titulos" id="comedia">Comedia</h4>
            <a href="../pages/detalleSerie.html"><img src="../assets/images/serie6.jpg" alt=""></a>
            <a href="../pages/detalleSerie.html"><img src="../assets/images/serie7.jpg" alt=""></a>
            <a href="../pages/detalleSerie.html"><img src="../assets/images/serie8.jpg" alt=""></a>
            <a href="../pages/detalleSerie.html"><img src="../assets/images/serie9.jpg" alt=""></a> 
        </div>`;
let categoriaTerror = `<div>
            <h4 class="titulos" id="terror">Terror</h4>
            <a href="../pages/detalleSerie.html"> <img src="../assets/images/serie10.jpg" alt=""></a>
            <a href="../pages/detalleSerie.html"><img src="../assets/images/serie11.jpg" alt=""></a>
            <a href="../pages/detalleSerie.html"><img src="../assets/images/serie12.jpg" alt=""></a>
            <a href="../pages/detalleSerie.html"><img src="../assets/images/serie13.jpg" alt=""></a>
        </div>`;
let categoriaSuspenso = `<div>
            <h4 class="titulos" id="suspenso">Suspenso</h4>
            <a href="../pages/detalleSerie.html"><img src="../assets/images/serie1.jpg" alt=""></a>
            <a href="../pages/detalleSerie.html"><img src="../assets/images/serie2.jpg" alt=""></a>
            <a href="../pages/detalleSerie.html"><img src="../assets/images/serie20.jpg" alt=""></a>
            <a href="../pages/detalleSerie.html"><img src="../assets/images/serie21.jpg" alt=""></a>
        </div>`;
/* ---------------------------------------------------------------------------------------------------------------------------------- */

let contendorGeneral = document.querySelector(".contendor_general");
contendorGeneral.innerHTML = categoriaAutos + categoriaCienciaFiccion + categoriaComedia + categoriaSuspenso + categoriaTerror; 


let todas = document.getElementById("ancla_todas");
todas.addEventListener("click", (e)=>{
    e.preventDefault();
    contendorGeneral.innerHTML = categoriaAutos + categoriaCienciaFiccion + categoriaComedia + categoriaSuspenso + categoriaTerror; 
});


let autos = document.getElementById("ancla_autos");
autos.addEventListener("click", (e)=>{
    e.preventDefault();
    contendorGeneral.innerHTML = categoriaAutos;
});


let suspenso = document.getElementById("ancla_suspenso");
suspenso.addEventListener("click", (e)=>{
    e.preventDefault();
    contendorGeneral.innerHTML = categoriaSuspenso;
});


let terror = document.getElementById("ancla_terror");
terror.addEventListener("click", (e)=>{
    e.preventDefault();
    contendorGeneral.innerHTML = categoriaTerror;
});


let cienciaFiccion = document.getElementById("ancla_ciencia_ficcion");
cienciaFiccion.addEventListener("click", (e)=>{
    e.preventDefault();
    contendorGeneral.innerHTML = categoriaCienciaFiccion;
});


let comedia = document.getElementById("ancla_comedia");
comedia.addEventListener("click", (e)=>{
    e.preventDefault();
    contendorGeneral.innerHTML = categoriaComedia;
});



