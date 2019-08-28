// //MOSTRAR OCULTAR DIVS
function mostrarOcultar(id){
    if(document.getElementById){
        let el = document.getElementById(id)
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
    }
}
window.onload = function(){
    mostrarOcultar('main-menu');
}
window.onload = function(){
    mostrarOcultar('main-instructions');
}
window.onload = function(){
    mostrarOcultar('main-choose');
}

//VARIABLES GLOBALES
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let frames = 0
let health = 100
let interval
const gravity = .6
const enemigosTabasqueños = []
const enemigosChilangos = []
const cochinita = []
const coquita = []
const soyinita = []