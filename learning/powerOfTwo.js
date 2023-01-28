// fine if the  gibing integer is  


// const pTwo =(n = 0,k = 2,l =2) =>{
//     if(n === k**l){
//         return true
//     }
//     return false
// }

// console.log(pTwo(1,2,0))



const ofTwoBitwise =(n) =>{  //the time complexly is constan o(1)   using the bitwise operator
    if(n<1 ){
        return false
    }
    return (n&(n-1)) === 0  // bitwise operator 
}



// Operators	     Name	                  Example
// &	            BitwiseAND	               x & y
// |	             BitwiseOR	               x | y
// ^	            BitwiseXOR	               x ^ y
// ~	            BitwiseNOT                   ~x
// <<	            Left shift	               x << y
// >>	      Sign-propagating right shift	   x >> y
// >>>	      Zero-fill right shift	           x >>> y

const ofTwo = n =>{  //time complexity of o(log n) because the input is being divided by 2 reducing in size  each time 
    if(n < 1){
        return false
    }
    while(n > 1){
        if(n % 2 != 0){
            return false
        }
        n /= 2
    }
    return true
}

console.log(ofTwo(8))


