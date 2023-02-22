/*
make a function that takes a string with duplicated characters

you have to return a string  with the same order that was given but with only one character of each
*/



const debut = str =>{
    /*
    go over the string 
    fine duplicated characters and delete them ore return a new string with out the duplicated characters
    */
   let newStr = ""
    for(let i = 0 ; i < str.length;i++){
        for(let n = i ; n < str.length;n++){
            if(str[i] == str[n]){
                console.log("is ==")
            }else{
                newStr += str[i]
            }
        }
    }
    return newStr
}

console.log(debut("lenddy"))