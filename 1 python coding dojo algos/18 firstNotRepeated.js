/*
make a function that takes an array that is not sorted 
the array should include numbers that are pairs and one number that has no pair 
you should return that number with out a pair 
*/



const firstNotRepeated = arr =>{
    let dic = {}
    for(let i = 0; i< arr.length;i++){ //adding values to a dictionary
        dic[arr[i]] = (dic[arr[i]] || 0)+1
    }
    for( let key in dic){ //grabbing the key value pairs that if the remainder  is == or bigger to 1 
        if(dic[key] % 2 >=1){
            return parseInt(key)
        }
    }
}


console.log(firstNotRepeated([1,2,3,2,1]))