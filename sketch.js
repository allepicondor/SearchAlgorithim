let obstacles = []
let startPos = []
let finishPos = []
let board;
let currentMode = 3
let SA;
let searching = false
let searched = false
function setup() {
  createCanvas(602, 602);
  board = new Board([600,600],20);
  //let p = {'0,0':[1,1]}
  //console.log(p[[0,0].toString()],[0,0].toString())
}
function draw() {
  background(220);
  board.draw();
  drawPieces();
  if (searching){
    if (SA.search()){
      searching = false
      searched = true
    }
    drawNodes()
  }
  if (searched){
    drawNodes()
    drawPath()
  }
}
function mouseDragged(){
  let cord = ConvertPosToCord([mouseX,mouseY])
  if (currentMode == 3){
    if (!Vectorcontains(obstacles,cord)){
      obstacles.push(cord)
    }
  }else if (currentMode == 2){
    startPos = cord
  }else if (currentMode == 1){
    finishPos = cord
  }else if (currentMode == 4){
    if (Vectorcontains(obstacles,cord)){
      obstacles.splice(obstacles.indexOf(cord),1)
    }if (startPos.x == cord.x && startPos.y == cord.y){
      startPos = []
    }if (finishPos.x == cord.x && finishPos.y == cord.y){
      finishPos = []
    }
  }
}
function ConvertPosToCord(pos){
  let cord = [int(pos[0] / board.segment),int(pos[1] / board.segment)]
  return createVector(cord[0], cord[1]);
}
function keyPressed(){
  if (keyCode === 83) {//S for startPos
    currentMode = 2;
  } else if (keyCode === 87) {//W for wall
    currentMode = 3;
  }else if (keyCode === 70) {//f for finsih
    currentMode = 1;
  }else if (keyCode === 68) {//d for finsih
    currentMode = 4;
  }
  else if (keyCode === 71){
    SA = new SearchAlgorthim(board,[startPos.x,startPos.y],[finishPos.x,finishPos.y],obstacles)
    searching = true
  }
}
function drawNodes(){
  for (let cord of SA.closeNodes){
    board.drawSquare(cord,[155,0,0])
  }
  for (let cord of SA.openNodes){
   board.drawSquare(cord,[0,155,0])
  }
}
function drawPath(){
  for (let cord of SA.currentPath){
    board.drawSquare(cord,[255,155,0])
   }
}
function drawPieces(){
  if (obstacles.length >= 0){
    for (let obstacle of obstacles){
        board.drawSquare([obstacle.x,obstacle.y],[255,0,0]);
    }
  }
  if (startPos.length != 0)
    board.drawSquare([startPos.x,startPos.y],[0,0,255])
  if (finishPos.length != 0)
    board.drawSquare([finishPos.x,finishPos.y],[0,255,0])

}
