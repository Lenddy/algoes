/*
trim 

make a function that takes a sting with  a large amount of space at the beginning and at the end

your job is to trim those spaces 

edge case if there is a space in in between two words  that space should stay intact  

also don't use the trim method
*/



const trim = str =>{
    let newStr = ""
    //make use of the .split() method to make the string into an array
    let splitted = str.split(" ")
    //make a validation to check if the characters are ==  spaces the will get ignored
    for(let i = 0;i < str.length; i++){
        console.log(splitted[i],"here")
        if(splitted[i] !== " "){
            newStr += splitted[i]
            // console.log("it just got add",splitted[i])

        }else if(splitted[i] == " "){
            if(splitted[i-1] && splitted[i + 1] != " "){
                newStr += splitted[i]
                // console.log("clean space",splitted[i])
                }
        }
    }
    //make another validation to check if the spaces have characters that are not == spaces in the front and the back
    return newStr
}

console.log(trim("    hola Lenddy     "))