// canvas
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
// globals
let interval
let frames = 0
let images = {}
let gravity = .98
let friction = .8
let keys = {}

//clases

//intances
let floor = {
  x:0,
  y:180,
  width:canvas.width,
  height:20,
  draw: function(){
    ctx.fillStyle = "darkgrey"
    ctx.fillRect(this.x,this.y,this.width,this.height)
  }
}
let player = {
  x:20,
  y:0,
  width:20,
  height:20,
  // vertical physics
  velY:0,
  grounded:false,
  jumping:false,
  jumpStrength:7,
  //horizontal
   velX:0,
  
  draw:function(){
    ctx.fillStyle = "red"
    ctx.fillRect(this.x,this.y,this.width,this.height)
  }
}

//main functions
function start(){
  interval = setInterval(update, 1000/60)
}
function update(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  frames++
  floor.draw()
  player.draw()
  drawTime()
  //forces
  move()
  console.log(keys)
}
function gameOver(){}

//aux functions
function drawCover(){
  //ctx.textAlign = "center"
  ctx.fillText("Bienvenido, presiona espacio", 150,100)
}
function drawTime(){
  ctx.fillStyle = "green"
  ctx.fillText(Math.floor(frames/60), 380,20)
}

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

//listeners
addEventListener('keydown', e=>{
  if(e.keyCode === 32){
    player.y = 0
    player.grounded = false
    player.velY = 0
  }
  keys[e.keyCode] = true
})

addEventListener('keyup', e=>{
  keys[e.keyCode] = false
})

//before actions
drawCover()
start()