//make a function that takes  an array of numbers 
//in the array theres must be pair of numbers and only one number that does not have a pair
//example [5,4,5] out put => [4]







const oodOccurrence = arr =>{
    /* 
    go over the array
    fine out that numbers that have pairs 
    delete the numbers that have pairs 
    return a array with that number that does not have a pair
    */ 
    let dict = {}
        for(let i = 0; i < arr.length;i++){
            dict[arr[i]] = (dict[arr[i]] || 0) +1
        }
        for( let key in dict){
            if(dict[key] % 2 == 1){
                return key
            }else{
                continue
            }
        }
}

console.log(oodOccurrence([5,4,5,4,6]))
