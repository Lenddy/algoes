/*
make a function that sums all the positive ints that are less than or == to  
*/






const sigma = num =>{
    //first idea  normal for loop
    let total = 0
    if (num <= 0 ) {
        return 0
    }
    
    for(let i = 1;i<= Math.floor(num) ; i++){ //works no mater if the number i Math.floor or not 
        total += i
    }
    return total
}

console.log(sigma(-15))






const recursiveSigma =(num)=>{
    let nums = Math.floor(num)
    if(nums <= 0){
        return 0
    }
    return num+ recursiveSigma(nums-1)
}


console.log(recursiveSigma(10))