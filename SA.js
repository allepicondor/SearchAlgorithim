class SearchAlgorthim{
    constructor(startPos, finishPos,obstacles){
        this.startPos = startPos
        this.finishPos = finishPos
        this.obstacles = obstacles

        this.openNodes = [startPos]
        this.parents = {startPos:startPos}
        this.closeNodes = []
        this.FCOSTS = [this.FCost(startPos,this.parents[startPos])]
        this.currentPath = []
    }
    GCost(sNode,cNode){
        return distance(sNode,cNode)
    }
    HCost(cNode){
        return distance(finishPos,cNode)
    }
    FCost(cNode,sNode){
        let total_distance = 0
        while (true){
            if (listEqual(sNode,this.startPos)){
                let gCost = this.GCost(sNode,cNode)
                let hCost = this.HCost(cNode)
                total_distance += gCost + hCost
                return total_distance
            }
            else{
                gCost = this.GCost(sNode,cNode)
                hCost = this.HCost(cNode)
                total_distance += gCost + hCost
                cNode = sNode
                sNode = this.parents[sNode]
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
        while (true){
            let lowestFcost = min(self.FCosts)
            let cNodeInt = this.FCosts.getIndex(lowestFcost)
            let cNode = this.openNodes[cNodeInt]
            let sNode = this.parents[cNode]
            this.closeNodes.push(cNode)
            this.FCosts.splice(cNodeInt,1)
            this.openNodes.splice(cNodeInt,1)
            if (listEqual(cNode,self.endNode)){
                while (true){
                    if (listEqual(sNode,self.startingSnode)){
                        this.CurrentPath.push(cNode)
                        break
                    }
                    else{
                        this.CurrentPath.append(cNode)
                        cNode = sNode
                        sNode = self.Parents[sNode]
                    }
                }   
                break
            }
            for (let neighbor of this.neighbors(cNode)){
                if (constains(this.obstacles,neighbor) || constains(this.closeNodes,neighbor) || neighbor[0] > this.board.rows || neighbor[0] == 0 || neighbor[1] > self.board.coloums || neighbor[1] == 0)
                    continue
                if (this.FCost(neighbor,cNode) < this.FCost(cNode,sNode) || (!contains(this.openNodes,neighbor))){
                    this.FCosts.push(this.FCost(neighbor,cNode))
                    this.Parents[neighbor] = cNode
                    if (!contains(this.openNodes,neighbor)){
                        this.openNodes.push(neighbor)
                    }
                }
            }

        }
    }
}