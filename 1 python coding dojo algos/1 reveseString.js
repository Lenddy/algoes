//reverse string



//return the word backward
// if empty return an emty string 







const reverseString= str =>{
    // dont use build in method if you can 
    let newStr = ""
    //1 if the string is empty return an empty string
    if(str.length = 0 ){
        return ""
    }else{
        //go over the entirety of the string  and reverse it 
        for(let i = str.length; i > 0 ; i --){
            newStr += str[i-1]
        }
    }
return newStr
}



console.log(reverseString("hola como esta"))