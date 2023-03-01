/*
make a function that takes a  positive number 
the function should multuply the number that come before the the given number 

if a cero is given it counts as 1 
*/






const factorial = num =>{
    let sum = Math.floor(num)
    if(sum == 0  || sum == 1 ){
        return 1
    }
    return sum * factorial(sum -1)
}

console.log(factorial(3.4))