/*
 make a recrsive function that sum all the items in the array

*/




const recursiveSumArr =(arr)=>{
    if(arr.length == 0){
        return 0
    }
        let sum = arr[arr.length-1]
        arr.pop()
        return sum + recursiveSumArr(arr)
}


console.log(recursiveSumArr([1,2,3]))

const recursiveSumArr2 =(arr,idx = 0)=>{
    if(arr.length ==  idx){
        return 0
    }
        return arr[idx] += recursiveSumArr2(arr,idx+1)
}


console.log(recursiveSumArr2([1,2]))