/*
you need to make a function  that takes an array and a number as a parameter 

the array must be sorted

you need to start at the middle of the array 

then depending  if the value in the array is lower or higher 

you go the left or to the right 

and keep doing that until you find the number given 
*/







const binarySearch = (arr,num) =>{
    console.log("starting")
    let l = 0
    let r = arr.length-1
    while(l <= r){
        let m = Math.floor((l+r)/ 2)
        console.log("try")
        if(arr[m] == num){
            console.log(`${num} at index ${m} equals  ${arr[m]}`)
            return true
        }else if ( num < arr[m] ){
            console.log("down")
            r = m-1
        }else{
            console.log("up")
            l = m + 1
        }
        
    }
    return false
}

console.log(binarySearch([1,2,3,5,6,7,8,9,10],4))









// const binarySearch = (arr,n) =>{
//     let left = 0
//     let right = arr.length-1
    

// }

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],3))