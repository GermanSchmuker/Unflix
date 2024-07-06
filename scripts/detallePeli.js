const fila=document.querySelector('.contenedor-carrusel');

const flechaDerecha=document.getElementById('flecha-derecha');
const flechaizquierda=document.getElementById('flecha-izquierda');
let scroll=688;

flechaDerecha.addEventListener('click', moverseDerecha);
flechaizquierda.addEventListener('click',moverseIzquierda);

function moverseDerecha(){
    fila.scrollLeft += scroll
    fila.style.transition= 'all ease 0.6s'
}
function moverseIzquierda(){
    fila.scrollLeft -= scroll
    fila.style.transition= 'all ease 0.6s'
}






