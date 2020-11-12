function Create2DArray(shape,intializer=0){
    let array = [];
    for (let level = 0; level< shape[0]; level++){
        let temp = [];//holds temp list
        for (let level2 = 0; level2< shape[1]; level2++){
            temp.push(intializer)
        }
        array.push(temp)
    }
    return array;
    
}