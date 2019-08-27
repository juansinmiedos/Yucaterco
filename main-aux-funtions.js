//FUNCIONES AUXILIARES
function start() {
    interval = setInterval(update, 1000 / 120)
}

function stop() {
    clearInterval(interval)
    interval = null
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
    if (frames % 1800 === 0) {
        soyinita.push(new Soyinita(canvas.width, 360, +25))
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
}

start()

document.onkeydown = e => {
    switch(e.keyCode){
        case 38:
            player.jump()
            break
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

//para que pare cuando deje de presionar la tecla
document.onkeyup = e => {
    switch(e.keyCode){
        case 38:
            break
        default:
            break
    }
}