let categoriaAutos = `<div>
                        <h4 class="titulos" id="autos">Autos</h4>
                        <a href="../pages/detallePeli.html"><img src="../assets/images/pelicula3.jpg" alt=""/></a>
                        <a href="../pages/detallePeli.html"><img src="../assets/images/pelicula2.jpg" alt=""/></a>
                        <a href="../pages/detallePeli.html"><img src="../assets/images/pelicula1.jpg" alt=""/></a>
                        <a href="../pages/detallePeli.html"><img src="../assets/images/pelicula8.jpg" alt=""/></a>
                    </div>`;
let categoriaCienciaFiccion = `<div>
                                    <h4 class="titulos" id="ciencia_ficción">Ciencia ficción</h4>
                                    <a href="../pages/detallePeli.html"><img src="../assets/images/pelicula5.jpg" alt=""/></a>
                                    <a href="../pages/detallePeli.html"><img src="../assets/images/pelicula15.jpg" alt=""/></a>
                                    <a href="../pages/detallePeli.html"><img src="../assets/images/pelicula17.jpg" alt=""/></a>
                                    <a href="../pages/detallePeli.html"><img src="../assets/images/pelicula16.jpg" alt=""/></a>
                            </div>`;
let categoriaComedia = `      <div id="primer_div">
        <h4 class="titulos" id="comedia">Comedia</h4>
        <a href="../pages/detallePeli.html"
          ><img src="../assets/images/pelicula12.jpg" alt=""
        /></a>
        <a href="../pages/detallePeli.html"
          ><img src="../assets/images/pelicula4.jpg" alt=""
        /></a>
        <a href="../pages/detallePeli.html"
          ><img src="../assets/images/pelicula13.jpg" alt=""
        /></a>
        <a href="../pages/detallePeli.html"
          ><img src="../assets/images/pelicula14.jpg" alt=""
        /></a>
      </div>`;
let categoriaTerror = `      <div>
        <h4 class="titulos" id="terror">Terror</h4>
        <a href="../pages/detallePeli.html">
          <img src="../assets/images/pelicula11.jpg" alt=""
        /></a>
        <a href="../pages/detallePeli.html"
          ><img src="../assets/images/pelicula7.jpg" alt=""
        /></a>
        <a href="../pages/detallePeli.html"
          ><img src="../assets/images/pelicula10.jpg" alt=""
        /></a>
        <a href="../pages/detallePeli.html"
          ><img src="../assets/images/pelicula9.jpg" alt=""
        /></a>
      </div>`;
let categoriaSuspenso = `<div>
        <h4 class="titulos" id="suspenso">Suspenso</h4>
        <a href="../pages/detallePeli.html"
          ><img src="../assets/images/pelicula18.jpg" alt=""
        /></a>
        <a href="../pages/detallePeli.html"
          ><img src="../assets/images/pelicula19.jpg" alt=""
        /></a>
        <a href="../pages/detallePeli.html"
          ><img src="../assets/images/pelicula20.jpg" alt=""
        /></a>
        <a href="../pages/detallePeli.html"
          ><img src="../assets/images/pelicula21.jpg" alt=""
        /></a>
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