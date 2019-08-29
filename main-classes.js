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
    constructor(){
        this.x = 10
        this.y = 360
        this.width = 64
        this.height = 77
        this.img = new Image()
        this.img.src = './assets/yucaterco.png'
        //física del monito
        this.velY = 0
        this.grounded = false
        this.jumping = false
        this.jumpStrength = 10
    }

    draw(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
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
    constructor(y){
        this.x = 110
        this.y = y
        this.width = 64
        this.height = 77
        this.img = new Image()
        this.img.src = './assets/campechanito.png'
        this.velY = 0
        this.grounded = false
        this.jumping = false
        this.jumpStrength = 10
    }

    draw(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        if(this.y <= 360){
        }
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
        this.addRemoveScore = addRemoveScore
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
const player = new Jugador()
const helper = new Helper(360)
const myAudio = new Audio('./assets/audio-original.mp3')
myAudio.addEventListener('ended', function() {
    this.currentTime = 0
    this.play()
}, false)
myAudio.play()