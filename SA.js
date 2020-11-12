class SearchAlgorthim{
    constructor(board,startPos, finishPos,obstacles){
        this.startPos = startPos
        this.finishPos = finishPos
        this.obstacles = convertVecArrToListArr(obstacles)
        this.board = board

        this.openNodes = [startPos]
        this.parents = {}
        this.parents[startPos.toString()] = startPos
        this.closeNodes = []
        //console.log(this.parents[startPos.toString()])
        this.FCosts = [this.FCost(startPos,this.parents[startPos.toString()])]
        this.currentPath = []
    }
    GCost(sNode,cNode){
        return dist(sNode[0],sNode[1],cNode[0],cNode[1])
    }
    HCost(cNode){
        return dist(this.finishPos[0],this.finishPos[1],cNode[0],cNode[1])
    }
    FCost(cNode,sNode){
        let total_distance = 0
        let gCost;
        let hCost;
        while (true){
            if (listEqual(sNode,this.startPos)){
                gCost = this.GCost(sNode,cNode)
                hCost = this.HCost(cNode)
                //console.log("G:",gCost,hCost)
                total_distance += gCost + hCost
                return total_distance
            }
            else{
                gCost = this.GCost(sNode,cNode)
                hCost = this.HCost(cNode)
                //console.log("H:",gCost,hCost)
                total_distance += gCost + hCost
                cNode = sNode
                sNode = this.parents[sNode.toString()]
            }
        }
    }
    neighbors(cNode){
        let neighbors = []
        let cRow = cNode[0]
        let cCol = cNode[1]
        neighbors.push([cRow+1, cCol])
        neighbors.push([cRow, cCol+1])
        neighbors.push([cRow-1, cCol])
        neighbors.push([cRow, cCol-1])
        return neighbors
    }
    search(){
        let lowestFcost = min(this.FCosts)
        let cNodeInt = this.FCosts.indexOf(lowestFcost)
        let cNode = this.openNodes[cNodeInt]
        let sNode = this.parents[cNode.toString()]
        this.closeNodes.push(cNode)
        this.FCosts.splice(cNodeInt,1)
        this.openNodes.splice(cNodeInt,1)
        //console.log("cNode: ",cNode,"FInish", this.finishPos)
        if (listEqual(cNode,this.finishPos)){
            console.log("DONE")
            while (true){
                if (listEqual(sNode,this.startPos)){
                    this.currentPath.push(cNode)
                    break
                }
                else{
                    this.currentPath.push(cNode)
                    cNode = sNode
                    sNode = this.parents[sNode.toString()]
                }
            }   
            return true
        }
        for (let neighbor of this.neighbors(cNode)){
            //console.log("Neigh",neighbor)
            if (listContains(this.obstacles,neighbor) || listContains(this.closeNodes,neighbor) || neighbor[0] > this.board.ArrayX-1 || neighbor[0] < 0 || neighbor[1] > this.board.ArrayY-1 || neighbor[1] < 0){
                //console.log("Continue")
                continue
            }
            //console.log("here1")
            if (this.FCost(neighbor,cNode) < this.FCost(cNode,sNode) || (!listContains(this.openNodes,neighbor))){
                this.FCosts.push(this.FCost(neighbor,cNode))
                //console.log("here1",neighbor.toString(),cNode)
                this.parents[neighbor.toString()] = cNode
                if (!listContains(this.openNodes,neighbor)){
                    this.openNodes.push(neighbor)
                }
            }
        }
        return false

        
    }   
}