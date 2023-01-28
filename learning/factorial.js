// factorial of a Number if the multiplication of the given positive number and all the numbers that are less than the giving number 
// the factorial of 0 is 1 




const factorial = n =>{
    let result = 1;
    for(let i = 2; i <= n; i++){ // the time complexities is o(n) linear be cause is adding a new item(number) every iteration
        result *= i 
        console.log(result)
    }
    return result
}

console.log(factorial(5))





const retry =(n) =>{
    let result = 1;
    for(let i = 2; i <= n ; i++){
        result *= i
    }
    return result
}


console.log(retry(4))