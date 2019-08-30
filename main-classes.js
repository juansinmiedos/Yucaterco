//CLASES Y FUNCIONES CONSTRUCTORAS
class Ciudad {
    constructor(){
        this.x = 0
        this.y = 0
        this.width = canvas.width
        this.height = canvas.height
        this.img1 = new Image()
        this.img1.src = './assets/background1.png'
        this.img2 = new Image()
        this.img2.src= './assets/background2.png'
        this.img1.onload = () => {
            this.draw()
        }
        this.img2.onload = () => {
            this.draw()
        }
    }

    draw() {
        this.x -=2
        if(this.x < -(canvas.width*2)){
            this.x = -canvas.width
        }
        ctx.drawImage(this.img1, this.x, this.y, this.width, this.height)
        ctx.drawImage(this.img2, this.x + canvas.width, this.y, this.width, this.height)
        ctx.drawImage(this.img2, this.x + canvas.width + canvas.width, this.y, this.width, this.height)
    }
}

class Jugador {
    constructor(type){
        this.x = 10
        this.y = 360
        this.width = 64
        this.height = 77
        this.type = type
        this.img = new Image()
        this.img.src = './assets/yucaterco.png'
        this.img2 = new Image()
        this.img2.src = './assets/yucaterca.png'
        //física del monito
        this.velY = 0
        this.grounded = false
        this.jumping = false
        this.jumpStrength = 10
    }

    draw(){
        if (this.type) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        } else {
            ctx.drawImage(this.img2, this.x, this.y, this.width, this.height)
        }

        //ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    toca(obstacle){
        return (
            this.x < obstacle.x + obstacle.width && //atrás
            this.x + this.width > obstacle.x && //en frente
            this.y < obstacle.y + obstacle.height && //arriba (se suma con height porque el obstàculo no está pegado al margen superior)
            this.y + this.height > obstacle.y //abajo
        )
    }
}

class Helper {
    constructor(type){
        this.x = 110
        this.y = 360
        this.width = 64
        this.height = 77
        this.type = type
        this.img = new Image()
        this.img.src = './assets/campechanito.png'
        this.img2 = new Image()
        this.img2.src = './assets/campechanita.png'
        this.velY = 0
        this.grounded = false
        this.jumping = false
        this.jumpStrength = 10
    }

    draw(){
        if (this.type) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        } else {
            ctx.drawImage(this.img2, this.x, this.y, this.width, this.height)
        }
        
        //ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    toca(obstacle){
        return (
            this.x < obstacle.x + obstacle.width && //atrás
            this.x + this.width > obstacle.x && //en frente
            this.y < obstacle.y + obstacle.height && //arriba (se suma con height porque el obstàculo no está pegado al margen superior)
            this.y + this.height > obstacle.y //abajo
        )
    }
}

class EnemigoTabasqueno {
    constructor(x, y){
        this.x = x
        this.y = y
        this.width = 77
        this.height = 73
        this.damage = 20
        this.img = new Image()
        this.img.src = './assets/tabasqueñito.png'
    }

    draw(){
        this.x -=5
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

class EnemigoChilango {
    constructor(x, y){
        this.x = x
        this.y = y
        this.width = 68
        this.height = 73
        this.damage = 35
        this.img = new Image()
        this.img.src = './assets/chilanguito.png'
    }

    draw(){
        this.x -= 4
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

class Cochinita {
    constructor(x, y){
        this.x = x
        this.y = y
        this.width = 70
        this.height = 41
        this.heal = 25
        this.img = new Image()
        this.img.src = './assets/cochinita.png'
    }

    draw(){
        this.x -=3
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

class Coquita{
    constructor(x, y){
        this.x = x
        this.y = y
        this.width = 50
        this.height = 99
        this.heal = 15
        this.img = new Image()
        this.img.src = './assets/coquita.png'
    }

    draw(){
        this.x -=3
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

class Soyinita {
    constructor(x, y){
        this.x = x
        this.y = y
        this.width = 70
        this.height = 49
        this.damage = 30
        this.img = new Image()
        this.img.src = './assets/soyinita.png'
    }

    draw(){
        this.x -=3
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

class Bomba {
    constructor(x, y){
        this.x = x
        this.y = y
        this.width = 46
        this.height = 70
        this.heal = 50
        this.img = new Image()
        this.img.src = './assets/bomba.png'
    }

    draw(){
        this.x -= 1
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

//DECLARACIONES
const ciudad = new Ciudad()
let player //= new Jugador()
let helper//= new Helper()
const myAudio = new Audio('./assets/audio-original.mp3')
myAudio.addEventListener('ended', function() {
    this.currentTime = 0
    this.play()
}, false)
//myAudio.play()



// MOSTRAR OCULTAR DIVS -GENERAL
function mostrarOcultar(id, id2){
    if(document.getElementById){
        let el = document.getElementById(id)
        el.style.display = (el.style.display == 'none') ? 'flex' : 'none';

        let el2 = document.getElementById(id2)
        el2.style.display = (el2.style.display == 'flex') ? 'none' : 'flex';
    }
}

// SI PRESIONA 1 JUGADOR, INSTACIA 1 JUGADOR
document.querySelector('#btn-1-player').addEventListener('click', e=> {
    player = new Jugador()

    let nowMainMenu = document.getElementById('main-menu')
    nowMainMenu.style.display = (nowMainMenu.style.display == 'none') ? 'flex' : 'none';

    let nextMainInstructions = document.getElementById('main-instructions')
    nextMainInstructions.style.display = (nextMainInstructions.style.display == 'flex') ? 'none' : 'flex';
})

// SI PRESIONA 2 JUGADORES, INSTACIA 2 JUGADORES
document.querySelector('#btn-2-player').addEventListener('click', e=> {
    player = new Jugador()
    helper = new Helper()

    let nowMainMenu = document.getElementById('main-menu')
    nowMainMenu.style.display = (nowMainMenu.style.display == 'none') ? 'flex' : 'none';

    let nextMainInstructions = document.getElementById('main-instructions')
    nextMainInstructions.style.display = (nextMainInstructions.style.display == 'flex') ? 'none' : 'flex';
})

// SI HAY INSTANCIADO SÒLO UN JUGADOR, LLEVA A CANVAS, SI HAY INSTANCIADO UN PLAYER, LLEVA A ESCOGER PLAYER DOS
document.querySelector('#img-player-1-yucaterco').addEventListener('click', e=> {
    if(player && helper){
        player.type = true
        let nowPlayer = document.getElementById('main-choose-p1')
        nowPlayer.style.display = (nowPlayer.style.display == 'none') ? 'flex' : 'none';
    
        let nextHelper = document.getElementById('main-choose-p2')
        nextHelper.style.display = (nextHelper.style.display == 'flex') ? 'none' : 'flex';
    } else if(player) {
        player.type = true
        let nowPlayer = document.getElementById('main-choose-p1')
        nowPlayer.style.display = (nowPlayer.style.display == 'none') ? 'flex' : 'none';
    
        let nextCanvas = document.getElementById('main-playground')
        nextCanvas.style.display = (nextCanvas.style.display == 'flex') ? 'none' : 'flex';
    }
})

// SI HAY INSTANCIADO SÒLO UN JUGADOR, LLEVA A CANVAS, SI HAY INSTANCIADO UN PLAYER, LLEVA A ESCOGER PLAYER DOS
document.querySelector('#img-player-1-yucaterca').addEventListener('click', e=> {
    if(player && helper){
        player.type = false
        let nowPlayer = document.getElementById('main-choose-p1')
        nowPlayer.style.display = (nowPlayer.style.display == 'none') ? 'flex' : 'none';
    
        let nextHelper = document.getElementById('main-choose-p2')
        nextHelper.style.display = (nextHelper.style.display == 'flex') ? 'none' : 'flex';
    } else if(player) {
        player.type = false
        let nowPlayer = document.getElementById('main-choose-p1')
        nowPlayer.style.display = (nowPlayer.style.display == 'none') ? 'flex' : 'none';
    
        let nextCanvas = document.getElementById('main-playground')
        nextCanvas.style.display = (nextCanvas.style.display == 'flex') ? 'none' : 'flex';
    }
})

//ESCOGER CAMPECHANO 0 CAMPECHANA
document.querySelector('#img-player-2-campechano').addEventListener('click', e=> {
    helper.type = true
    let nowHelper = document.getElementById('main-choose-p2')
    nowHelper.style.display = (nowHelper.style.display == 'none') ? 'flex' : 'none';
    
    let nextCanvas = document.getElementById('main-playground')
    nextCanvas.style.display = (nextCanvas.style.display == 'flex') ? 'none' : 'flex';
})

// SI HAY INSTANCIADO SÒLO UN JUGADOR, LLEVA A CANVAS, SI HAY INSTANCIADO UN PLAYER, LLEVA A ESCOGER PLAYER DOS
document.querySelector('#img-player-2-campechana').addEventListener('click', e=> {
    helper.type = false
    let nowHelper = document.getElementById('main-choose-p2')
    nowHelper.style.display = (nowHelper.style.display == 'none') ? 'flex' : 'none';
    
    let nextCanvas = document.getElementById('main-playground')
    nextCanvas.style.display = (nextCanvas.style.display == 'flex') ? 'none' : 'flex';
})