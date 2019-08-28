//FUNCIONES AUXILIARES
function start() {
    interval = setInterval(update, 750 / 60)
}

function stop() {
    clearInterval(interval)
    interval = null
}

// function move(){
//     if(!player.grounded){
//         player.y += player.velY
//         player.velY += gravity
//     }
//     if(player.y>=360){
//         player.grounded = true
//         player.jumping = false
//         player.y = 360
//     }
//     if(document.onkeydown = 66){
//         console.log(typeof(onkeydown))
//         if(!player.jumping){
//             player.velY = 0
//             player.grounded = false
//             player.jumping = true
//             player.velY += -player.jumpStrength*2
//         }
//     }
// }

function drawHealth(){
    score = 100
    ctx.font = '24px Monospace'
    ctx.fillText('SALUD', 30, 50)
    ctx.fillText(score, 30, 80)
}

function crearEnemigosTabasqueños() {
    if (frames % 700 === 0) {
        enemigosTabasqueños.push(new EnemigoTabasqueno(canvas.width, 360))
    }
}
  
function dibujarEnemigosTabasqueños() {
    enemigosTabasqueños.forEach(enemigosTabasqueños => {
        enemigosTabasqueños.draw()
    })
}

function crearEnemigosChilangos() {
    if (frames % 1100 === 0) {
        enemigosChilangos.push(new EnemigoChilango(canvas.width, 360))
    }
}

function dibujarEnemigosChilangos() {
    enemigosChilangos.forEach(enemigosChilangos => {
        enemigosChilangos.draw()
    })
}

function crearCochinita() {
    if (frames % 1800 === 0) {
        cochinita.push(new Cochinita(canvas.width, 360, +25))
    }
}

function dibujarCochinita() {
    cochinita.forEach(cochinita => {
        cochinita.draw()
    })
}

function crearSoyinita() {
    if (frames % 2300 === 0) {
        soyinita.push(new Soyinita(canvas.width, 360, -30))
    }
}

function dibujarSoyinita() {
    soyinita.forEach(soyinita => {
        soyinita.draw()
    })
}

function crearCoquita() {
    if (frames % 1300 === 0) {
        coquita.push(new Coquita(canvas.width, 360, +15))
    }
}

function dibujarCoquita() {
    coquita.forEach(coquita => {
        coquita.draw()
    })
}

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    frames++
    ciudad.draw()
    player.draw()
    helper.draw()
    crearEnemigosTabasqueños()
    crearEnemigosChilangos()
    crearCochinita()
    crearCoquita()
    crearSoyinita()
    dibujarEnemigosTabasqueños()
    dibujarEnemigosChilangos()
    dibujarCochinita()
    dibujarCoquita()
    dibujarSoyinita()
    drawHealth()
    move()
}

function gameOver() {
    let looser = new Image()
    looser.src = './assets/pelana.png'
    let looserX = 200
    let looserY = 100
    ctx.drawImage(looser, looserX, looserY,)
    // ctx.font = '50px Courier'
    // ctx.fillText('Game Over', canvas.width / 2 - 100, 200)
    clearInterval(interval)
}
  
function checkCollition() {
    if (player.y > canvas.height - player.height) return gameOver()
    pipes.forEach(pipe => { 
        if (player.isTouching(pipe)) return gameOver()
    })
}
  

start()

document.onkeydown = e => {
    switch(e.keyCode){
        // case 38:
        //     player.jump()
        //     break
        case 87:
            helper.jump()
            
            break
        case 32:
            if(interval){
                stop()
            } else {
                start()
            }
            break
        default:
            break
    }
}



/*para que pare cuando deje de presionar la tecla
document.onkeyup = e => {
    switch(e.keyCode){
        case 38:
            break
        default:
            break
    }
}
*/



// document.onkeydown = e => {
//     switch(e.keyCode){
//         // case 38:
//         //     player.jump()
//         //     break
//         case 87:
//             helper.jump()
            
//             break
//         case 32:
//             if(interval){
//                 stop()
//             } else {
//                 start()
//             }
//             break
//         default:
//             break
//     }
// }
