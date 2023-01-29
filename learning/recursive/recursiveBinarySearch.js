const recursiveBinarySearch =(arr,t)=>{
    return search(arr,t,0,arr.length -1)
}

const search=(arr,t,l,r)=>{
    let m = Math.floor((l + r) / 2)
    if(l > r){
        return -1
    }
    if(t == arr[m]){
        return `$index ${m} value ${arr[m]}`
    }
    if(t < arr[m]){
        return search(arr,t,l,m - 1)
        // console.log(right = middle - 1)
    }else{
        return search(arr,t,m + 1,r)
        
    }
}


console.log(recursiveBinarySearch([1,2,3,4,5,6,7,8,9,10],8))



// console.log(`try `)
// console.log(`middle is ${middle} because ${left} + ${right} / 2 = ${Math.floor((left + right) / 2)}`)