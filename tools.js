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
function listToString(list){
    return "["+list[0]+','+list[1]+"]"
}
function Vectorcontains(array,item){
    for (let cord of array){
      if (cord.x == item.x && cord.y == item.y){
        return true
      }
    }
    return false
}
function listContains(array,item){
    for (let cord of array){
        if (cord[0] == item[0] && cord[1] == item[1]){
            return true
        }
    }
    return false
}
function listIndexOf(array,item){
	let counter = 0
	for (let cord of array){
		if (cord[0] == item[0] && cord[1] == item[1]){
			return counter
		}
		counter++;
	}
	return -1
}
function VecIndexOf(array,item){
	let counter = 0
	for (let cord of array){
		if (cord.x == item.x && cord.y == item.y){
			return counter
		}
		counter++;
	}
	return -1
}
function listEqual(list1,list2){
    return (list1[0] == list2[0] && list1[1] == list2[1])
}
function convertVecArrToListArr(array){
    let newList = [];
    for (let item of array){
        newList.push([item.x,item.y])
    }
    return newList;
}
function copyArray(array) {
	let NewArray = [];
	for (let level = 0; level < array.length; level++) {
		let newList = [];
		for (let i = 0; i < array[1].length; i++) {
			newList.push(array[level][i]);
		}
		NewArray.push(newList);
	}
	return NewArray;
}

function argmin(array) {
	let min = Infinity;
	let minList = [];
	let minIndex = -1;
	for (let i = 0; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i];
			minIndex = i;
			minList.push(i);
		}
	}
	return minIndex;
}
function argmax(array) {
	let max = -Infinity;
	let maxIndex = -1;
	let maxList = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i];
			maxIndex = i;
			maxList.push(i);
		}
	}

	return maxIndex;
}