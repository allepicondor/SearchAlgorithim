class Board{
    constructor(size,segment){
        this.size = size;
        this.segment = segment;
        this.ArrayX = size[0]/segment;
        this.ArrayY = size[1]/segment;
        this.board = Create2DArray([this.ArrayX+2, this.ArrayY+2])

        for (let x = 0; x < this.ArrayX;x++){
            for (let y = 0; y < this.ArrayY;y++){
                this.board[x+1][y+1] = [x*segment,y*segment]
            }
        }
    }
    grabPos(pos){
        return this.board[pos[0]+1][pos[1]+1]
    }
    draw(){
        push();
        rectMode(CORNER)
        stroke(20);
        fill(80);
        for (let x = 0; x < this.ArrayX;x++){
            for (let y = 0; y < this.ArrayY;y++){
                this.drawSquare([x,y],20)
            }
        }
        pop();
    }
    drawSquare(cord,color){
        push();
        rectMode(CORNER)
        strokeWeight(0)
        stroke(2);
        fill(color);
        let pos = this.grabPos([cord[0],cord[1]])
        rect(pos[0]+1,pos[1]+1,this.segment-1,this.segment-1)
        pop();
    }
}