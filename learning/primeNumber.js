// a prime number is a number  that can only go  into it self and 1  

// a prime number can be divided with out a remainder  is a prime number



const isPrime = (n)=>{    //time complexity is constant o(1) because is checking if the number given is devisable by 2  
    if(n > 1){
    if(n === 2){
        return true
    }
    if( n % 2 != 0){
        return true
    }
}
    return false
}

console.log(isPrime(7))




const isPrime2 = (n)=>{  //time complexity is  o(n) linear  because is checking all the thing that are divisible by the next number 
    if(n < 2){
        return false
    }  
    for(let i = 2; i < n ;i ++){
        if(n%i === 0){
            return false
        }
    }
    return true
}

console.log(isPrime2(18))







// const isPrime = (n)=>{
//     if(n === 1){
//         return false
//     }
//     if(n === 2){
//         return true
//     }
//     if( n % 2 == 0){
//         return false
//     }
//     return true
// }

// console.log(isPrime(1))




