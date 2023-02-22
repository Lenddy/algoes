// make a function that take 2 parameters 
//one is a string  and the other is a numbers
// you should rotate the string by th e given number example str="hello"
//and number is 1 the rotated string  is now  == "ohell"



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

console.log(rotate("hola",15)) //olah


// const isrotate =(str,num)=>{
//     let splitted = []
//     // let newStr = ""
//     for(let i = 0 ; i < str.length;i++){
//         splitted[i] =str[i];
//         // splitted.push(str[i])
//     }
//     for(let n = 0;n < num; n++){
//         let last = splitted[splitted.length-1]
//         splitted.unshift(last)
//         // console.log("this is the last index",last)
//         splitted.pop()
//         console.log("is rotating 2")
//     }
//     // console.log("this is the splitted array",splitted)
//     return  splitted.join("");
// }

// console.log(isrotate("hola",100)) //olah