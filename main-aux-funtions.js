//FUNCIONES AUXILIARES
function start() {
    interval = setInterval(update, 500 / 60)
    myAudio.volume = 0.2
    myAudio.play()
}

function stop() {
    clearInterval(interval)
    interval = null
    myAudio.pause()
}

function move(){
    if(!player.grounded){
        player.y += player.velY
        player.velY += gravity
    }
    if(player.y>=360){
        player.grounded = true
        player.jumping = false
        player.y = 360
    }
    if(keys[87]){
        if(!player.jumping){
            player.velY = 0
            player.grounded = false
            player.jumping = true
            player.velY += -player.jumpStrength*2
        }
    }
    if(!helper.grounded){
        helper.y += helper.velY
        helper.velY += gravity
    }
    if(helper.y>=360){
        helper.grounded = true
        helper.jumping = false
        helper.y = 360
    }
    if(keys[73]){
        if(!helper.jumping){
            helper.velY = 0
            helper.grounded = false
            helper.jumping = true
            helper.velY += -helper.jumpStrength*2
        }
    }
}

function gameOver() {
    let looser = new Image()
    looser.src = './assets/pelana.png'
    let looserX = canvas.width / 2 -200
    let looserY = canvas.height / 2 -100
    clearInterval(interval)
    looser.onload = () => {
        ctx.drawImage(looser, looserX, looserY, 400, 200)
    }
    myAudio.pause()
    setTimeout(() => {
        location.reload()
    }, 3000);
}

function checkHealth() {
    //TABASQUEÑO
    enemigosTabasqueños.forEach((tab,i) => {
        if(player.toca(tab)) {
        enemigosTabasqueños.splice(i,1) 
        return health -= tab.damage
        }
    })

    enemigosChilangos.forEach((chi,i) => {
        if(player.toca(chi)) {
        enemigosChilangos.splice(i,1) 
        return health -= chi.damage
        }
    })

    soyinita.forEach((soy,i) => {
        if(player.toca(soy)) {
        soyinita.splice(i,1) 
        return health -= soy.damage
        }
    })

    cochinita.forEach((coc,i) => {
        if(player.toca(coc)) {
        cochinita.splice(i,1) 
        return health += coc.heal
        }
    })

    coquita.forEach((coq,i) => {
        if(player.toca(coq)) {
        coquita.splice(i,1) 
        return health += coq.heal
        }
    })

    bomba.forEach((bom,i) => {
        if(player.toca(bom)) {
        bomba.splice(i,1) 
        
        stop()
        //myAudio.pause()

        let botonBomba = new Image()
        botonBomba.src = './assets/bomba-button.png'
        let botonBombaX = canvas.width / 2 -200
        let botonBombaY = canvas.height / 2 -100
        //clearInterval(interval)
        botonBomba.onload = () => {
            ctx.drawImage(botonBomba, botonBombaX, botonBombaY, 400, 200)
        }

        //Aquí debe ir el còdigo que selecciona una bomba random, la reproduce y al terminar sigue la vida
        let bombaRandom = audiosBombas[Math.floor(Math.random()*(audiosBombas.length - 1))];
        bombaRandom.addEventListener('ended', function() {
            //myAudio.play()
            start()
            return health += bom.heal
        }, false)
        bombaRandom.play()
        }
    })

    //CAMPECHANO
    soyinita.forEach((soy,i) => {
        if(helper.toca(soy)) {
        soyinita.splice(i,1) 
        return health += soy.damage
        }
    })

    cochinita.forEach((coc,i) => {
        if(helper.toca(coc)) {
        cochinita.splice(i,1) 
        return health -= coc.heal
        }
    })

    coquita.forEach((coq,i) => {
        if(helper.toca(coq)) {
        coquita.splice(i,1) 
        return health -= coq.heal
        }
    })

    bomba.forEach((bom,i) => {
        if(helper.toca(bom)) {
        bomba.splice(i,1) 
        return health += bom.heal
        }
    })

    if(health <= 0) return gameOver()
}

function drawHealth(){
    ctx.font = '24px Monospace'
    ctx.fillText('SALUD', 30, 50)
    ctx.fillText(health, 30, 80)
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
    const min = 80
    const max = 360
    const defPosition = 365
    if (frames % 1800 === 0) {
        const randomPosition = Math.floor(Math.random() * (max - min))
        cochinita.push(new Cochinita(canvas.width, defPosition))
    }
}

function dibujarCochinita() {
    cochinita.forEach(cochinita => {
        cochinita.draw()
    })
}

function crearSoyinita() {
    const min = 80
    const max = 360
    const defPosition = 360
    if (frames % 2300 === 0) {
        console.log('hola')
        const randomPosition = Math.floor(Math.random() * (max - min))
        soyinita.push(new Soyinita(canvas.width, defPosition))
    }
}

function dibujarSoyinita() {
    soyinita.forEach(soyinita => {
        soyinita.draw()
    })
}

function crearCoquita() {
    const min = 80
    const max = 360
    const defPosition = 345
    if (frames % 1300 === 0) {
        const randomPosition = Math.floor(Math.random() * (max - min))
        coquita.push(new Coquita(canvas.width, defPosition))
    }
}

function dibujarCoquita() {
    coquita.forEach(coquita => {
        coquita.draw()
    })
}

function crearBomba() {
    const defPosition = 200
    if (frames % 2500 === 0) {
        bomba.push(new Bomba(canvas.width, defPosition))
    }
}

function dibujarBomba() {
    bomba.forEach(bomba => {
        bomba.draw()
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
    crearBomba()
    dibujarEnemigosTabasqueños()
    dibujarEnemigosChilangos()
    dibujarCochinita()
    dibujarCoquita()
    dibujarSoyinita()
    dibujarBomba()
    drawHealth()
    checkHealth() 
    move()
}

//start()

//listeners
addEventListener('keydown', e=>{
    if(e.keyCode === 32){
        if(interval){
            stop()
        } else {
            start()
        }
    }
    keys[e.keyCode] = true
  })
  
  addEventListener('keyup', e=>{
    keys[e.keyCode] = false
  })