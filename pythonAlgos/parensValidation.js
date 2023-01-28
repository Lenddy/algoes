// make a function that takes a string 
// you should check that the string has an opening and a closing parenthesis
// if for every opening parenthesis  there is a closing parenthesis return true
// else return false














const parensValidation = str =>{
    let left = 0 ;
    let right = 0 ;
    for(let i = 0; i < str.length; i ++){
        if(str[0] == ")" || str[str.length-1] == "("){
            return false
        }
        if(str[i]== "("){
            left++
        }
        if(str[i] == ")"){
            right++
        }
    }
    if(left == right){
        return true
    }
    return false
}




console.log(parensValidation("L(en)(dd)y"))

// const parensValidation = (str) =>{
//     let dic = {};
//     let left = 0;
//     let right = 0;
//     for(let i = 0 ; i < str.length; i ++){
//         let current = str[i];
//         let count = 0;
//         if(str[0] == ")" || str.length -1 == "("){
//             return false
//         }
//         if(str.length != 0){
//             for(let item of str){
//                 if(item == current ){
//                 count++
//                 dic[current] = count;
//                 console.log(dic)
//             }
//                 if(item == "("){
//                     left++
//                 }
//                 if(item == ")"){
//                     right++
//                 }
//             }
//         }
//     }
//     console.log(left,right)
//     if(left == right){
//         return true
//     }
//     return false;
// }



