// take an array as a parameter 
//if a value is repeated  take out the repetitions and leave the only one  in a sorted order 




const sortedDedupe = (arr)=>{

    let newArr = []
    for(let i = 0 ; i < arr.length; i++){
        let current = arr[i];
        let count = 0
        let repeated
        for(let n = 0; n < arr.length;n++){
            if(arr[i] === arr[n]){
                count ++
            }
            if(count > 1){
                newArr.push(current)
                console.log(current)
            }
            else{
                count = 1 
                newArr.push(current)
            }
        }
        if()
    }
    return newArr
    
}


console.log(sortedDedupe([1,1,1,2,3,4,5,5,5,]))