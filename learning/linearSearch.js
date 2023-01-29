//linear search 


// fine an element in a given array and return its it positional index 


const linearSearch =(arr,n)=>{
    let count = 0
    for(let i = 0; i < arr.length ;i++){
        if(n === arr[i]){
            return i, count
        }
    }
    return -1
}


console.log(linearSearch([1,2,3,4,6,5,4],4))