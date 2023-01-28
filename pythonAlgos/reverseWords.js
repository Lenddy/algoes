// make a function that takes a string 
// you have to reverse the string  if  there are multiple words in the string you have to return the words in the string revers but in the orders that they were written in 


const reverseWords = (string)=>{
    let toReverse = "";
    let split = string.split(" ")
    for(let i =0;i < split.length;i++){
        for(let n = split[i].length -1 ; n >= 0 ; n--){
            toReverse += split[i][n]
        }
        toReverse += " "
    }
    return toReverse.substring(0,toReverse.length - 1)

}

console.log(reverseWords("hello how are you"))








// let backwards = "";
// let list = ""
// let reversLIst = ""
// let splitted = string.split(" ")
// for(let i = 0 ; i < splitted.length;i ++){
//     let singleWord = splitted[i];
//     list = singleWord
//     let revers = list.reverse(" ")
//     reversLIst += revers
//     list = ""
//     // joined = reverse.join(" ");
// }
// return reversLIst