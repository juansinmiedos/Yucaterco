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
const bomba = []
const keys = {}

const miBomba1 = new Audio('./assets/bombas/bomba1.mp3')
const miBomba2 = new Audio('./assets/bombas/bomba2.mp3')
const miBomba3 = new Audio('./assets/bombas/bomba3.mp3')
const miBomba4 = new Audio('./assets/bombas/bomba4.mp3')
const miBomba5 = new Audio('./assets/bombas/bomba5.mp3')
const audiosBombas = [miBomba1, miBomba2, miBomba3, miBomba4, miBomba5]



miBomba1.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play()
}, false);



// // //MOSTRAR OCULTAR DIVS
// function mostrarOcultar(id){
//     if(document.getElementById){
//         let el = document.getElementById(id)
//         el.style.display = (el.style.display == 'none') ? 'block' : 'none';
//     }
// }
// window.onload = function(){
//     mostrarOcultar('main-menu');
// }
// window.onload = function(){
//     mostrarOcultar('main-instructions');
// }
// window.onload = function(){
//     mostrarOcultar('main-choose');
// }