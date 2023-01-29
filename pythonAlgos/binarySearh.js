//fine a given int with the lest tries as posible





//this only works if it is sorted(right order) min to max\
//so learn how to make sorted functions
const binary=(val,arr)=>{ //val == value to be found//arr= array in witch the values is on or not  
    let lower = 0 ; //lowest point(value) in the array
    let highest = arr.length-1; //highest point(value) in the array 
    while(lower <= highest){ //we are going to keep iterating as long as the lower point is lower than the highest point 
        console.log("try")
        const middle =  lower + Math.floor(highest-lower / 2) //getting the middle number in the array the value in the middle 
        if(val === arr[middle]){ //checking if the value in the middle of the array  is === to the value  that we are looking for
            // return true
            return `index is  ${middle} , value in index ${middle} is ${arr[middle]}`; // if so we return that value
        }

        if(val < arr[middle]){ //checking to se if the values tha we look for is less that  the value that we got when  getting the middle value
            highest = middle - 1; // setting te highest boundary(value) in the array to be the index of the middle - 1  
        }else{ //checking to se if the values tha we look for is greater that the value that we got when  getting the middle value
            lower = middle + 1 // setting te lowest boundary(value) in the array to be the index of the middle + 1  
        }
        
    }
    return "not found", -1 //this means that the value was not in the arr or could not be found
}

console.log(binary(4,[1,2,3,4,5,6,7,8,9,10,11]))














