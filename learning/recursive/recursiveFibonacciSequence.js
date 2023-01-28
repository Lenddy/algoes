//return the last number in the Fibonacci sequence  using recursion


// Fibonacci Sequence

// the Fibonacci Sequence consists on summing the 2 previous number to to get the next number  

// Fibonacci Sequence of 1 is [0] of 2 is [0,1] of 3 is [0,1,1] of 4 is [0,1,1,2] 




const FibonacciRecursive = (n,sequence =[0,1,]) =>{
    if(n < sequence.length){
        return sequence[sequence.length -1]
    }
        sequence[sequence.length] = sequence[sequence.length - 1] + sequence[sequence.length - 2]
    return FibonacciRecursive(n , sequence)

}

console.log(FibonacciRecursive(7)) //output => 8


const FibonacciRecursiveAlt = (n) =>{
    if(n < 2){
        return n
    }
    return FibonacciRecursiveAlt(n-1) + FibonacciRecursiveAlt(n-2) 

}

console.log(FibonacciRecursiveAlt(7)) //output => 8


