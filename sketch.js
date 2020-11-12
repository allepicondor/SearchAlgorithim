let obstacles = []
let startPos = []
let finishPos = []
let board;
let currentMode = 3
function setup() {
  createCanvas(402, 402);
  board = new Board([400,400],40);
}
function draw() {
  background(220);
  board.draw();
  drawPieces();
}
function mouseDragged(){
  let cord = ConvertPosToCord([mouseX,mouseY])
  if (currentMode == 3){
    if (!obstacles.includes(cord)){
      obstacles.push(cord)
    }
  }else if (currentMode == 2){
    startPos = cord
  }else if (currentMode == 1){
    finishPos = cord
  }else if (currentMode == 4){
    finishPos = cord
    console.log("Remove")
    if (obstacles.includes(cord))
      obstacles.splice(obstacles.indexOf(cord),1)
    if (startPos == cord)
      startPos = []
    if (finishPos == cord)
      finishPos = []
  }
}
function ConvertPosToCord(pos){
  let cord = [int(pos[0] / board.segment),int(pos[1] / board.segment)]
  return cord
}
function keyPressed(){
  if (keyCode === 83) {//S for startPos
    currentMode = 2;
  } else if (keyCode === 87) {//W for wall
    currentMode = 3;
  }else if (keyCode === 70) {//f for finsih
    currentMode = 1;
  }else if (keyCode === 68) {//f for finsih
    currentMode = 4;
  }
}
function drawPieces(){
  if (obstacles.length >= 0){
    for (let obstacle of obstacles){
        board.drawSquare(obstacle,[255,0,0]);
    }
  }
  if (startPos.length != 0)
    board.drawSquare(startPos,[0,0,255])
  if (finishPos.length != 0)
    board.drawSquare(finishPos,[0,255,0])

}
