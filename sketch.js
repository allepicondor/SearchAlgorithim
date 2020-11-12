let obstacles = []
let startPos = []
let finishPos = []
let board;
let currentMode = 3
let SA;
function setup() {
  createCanvas(402, 402);
  board = new Board([400,400],40);
  console.log([0,0] == [0,0])
}
function draw() {
  background(220);
  board.draw();
  drawPieces();
}
function mouseDragged(){
  let cord = ConvertPosToCord([mouseX,mouseY])
  if (currentMode == 3){
    if (!contains(obstacles,cord)){
      obstacles.push(cord)
    }
  }else if (currentMode == 2){
    startPos = cord
  }else if (currentMode == 1){
    finishPos = cord
  }else if (currentMode == 4){
    if (contains(obstacles,cord)){
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
    SA = new SearchAlgorthim([startPos.x,startPos.y],[finishPos.x,finishPos.y],obstacles)
    SA.search()
    console.log(SA.currentPath)


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
