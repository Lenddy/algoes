/*
make a function that takes a number (positional index )

the gold of this function is to add up  the pervious two numbers 

    so i 0 is given a a positional index  : out come should be 0 [0]
    if 1 is given  the outcome should be 1 [0,1]
    if 2 is given the out come should be 1[0,1,1]
    keep doing the same  meaning adding the 2 number before it to get the new number the golden ration 

*/






const FibonacciSequence =  (num) =>{
    num = Math.floor(num)
    if(num == 0){
        return 0
    }if(num == 1){
        return 1
    }
    return FibonacciSequence(num -1 ) + FibonacciSequence(num -2 )
}

console.log(FibonacciSequence(4))