//gravity force
function move(){
    if(!player.grounded){
      player.y += player.velY
      player.velY += gravity
    }
    if(player.y>floor.y){
      player.grounded = true
      player.jumping = false
      player.y = floor.y - player.height
    }
    //
    player.x += player.velX
    player.velX *= friction
    //horizontal
    if(keys[39]){
      player.velX++
    }
    if(keys[37]){
      player.velX--
    }
    if(keys[38]){
      if(!player.jumping){
       player.velY = 0
       player.grounded = false
       player.jumping = true
       player.velY += -player.jumpStrength*2
        } 
    }
}