




const encoded = str=>{
    //asume the letters will be consecutive
    let obj = {}
    let count = 0
    //if you have an empty string return a empty string
    if(str.length == 0){
        return ""
    }else{
    // go over the string
    for(let i = 0; i < str.length; i++){
        for(let n = 0;n < str.length; n++){
            if(str[i] == str[n]){
                count++
            }if( str != str[n]){
                obj[`${str[i]}`] = count
            }
        }
    count = 0
    }
}
return obj
//return a new string that has the letter follow by the amount of time that letter appears

}

console.log(encoded("abbbcccccrrrrrrrrrrrr"))




