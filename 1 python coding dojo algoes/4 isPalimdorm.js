// you have to return true or false if depending if the given string is a palindrome or not 

// palindrome  are words that are spell the same  forwards and backwards "oho" true "hola" false




const isPal= str =>{// time complexity linera o(n)
    let newstr =""
    //we got to check if the string is spell the same forwards and backwards
    for(let i = str.length-1; i >= 0 ;i--){
        //if it is  we return true 
        newstr += str[i]
        console.log(str[i])
    }
    console.log(newstr)
    if(str === newstr){
        return true
    }
    // else return false
    return false
}


console.log(isPal("hoa"))
console.log(isPal("aha"))
console.log(isPal("Dud"))






