/*
make a function that takes 2 parameters that are string 
cheek to so if the second string is a rotation of the first 
*/

const rotate =(str,num)=>{
    let splitted = []
    // let newStr = ""
    for(let i = 0 ; i < str.length;i++){
        splitted[i] =str[i];
        // splitted.push(str[i])
    }
    console.log(num % str.length)
    for(let n = 0;n < num % str.length; n++){
        // let last = splitted[splitted.length-1]
        console.log("rotating",splitted)

        let e =splitted.unshift(splitted.pop())
        // console.log("this is the last index",last)
        // console.log("here",e,)
        console.log("after rotating",splitted)
    }
    // console.log("this is the splitted array",splitted)
    return  splitted.join("");
}

// const isRotated =(str,str2)=>{
//     /*
//     the 2 string must be the same length
//     rotate the string the first string  till it matches the second string  
//     */
//     if (str.length !== str2.length){
//         return false
//     }
//     let splitted = []
//     for(let i = 0 ; i < str.length;i++){
//         splitted[i] =str[i];
//     }
//     for(let n = 0;n < str.length; n++){
//         let last = splitted[splitted.length-1]
//         splitted.unshift(last)
//         // console.log("this is the last index",last)
//         splitted.pop()
//         let join = splitted.join("")
//         if(join == str2){
//             return true
//         }
//     }
//     return false
// }

//cody s version
const isRotated2 =(str,str2)=>{
    /*
    the 2 string must be the same length
    rotate the string the first string  till it matches the second string  
    */
    if (str.length !== str2.length){
        return false
    }
    for(let n = 0;n < str.length; n++){
        if(rotate(str,n) == str2){
            return true
        }
    }
    return false
}


console.log(isRotated2("hola","ahol"))