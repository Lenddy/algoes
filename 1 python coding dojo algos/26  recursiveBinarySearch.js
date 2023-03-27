/*
recursive binary search 

make a function that takes an array of numbers sorted  and fines a given number
and return a boolean 
*/





const recursiveBinarySearch =(arr,num)=>{
    let m = Math.floor((arr.length) /2)
    Math.floor(num)
    if(arr[m] == num){
        return true
    }else if (arr.length < 1){
        return false
    }
    if(arr[m] > num){
        return recursiveBinarySearch(arr.slice(0,m),num)
    }else if(arr[m] < num){
        return recursiveBinarySearch(arr.slice(m),num)
    }
}

console.log(recursiveBinarySearch([1,2,3,4,5,6,7,8,9,10],4))



// let arr = [1,2,3,4,5,6,7,8,9,10]

// let halve = arr.slice(0,5)

// console.log(halve)