const ofTwo = n =>{
    if(n < 1){
        return false
    }
    while(n > 1){
        if(n % 2 != 0){
            return false
        }
        n/2
    }
    return true
}

console.log(ofTwo(8))