// make a function that takes a string as a parameter 
// your job is to make the letters in the string not have duplicates
//  example helloo => helo


// make use of .map and . filter

const dedupe = (string = String)=>{
    let dic = {};
    for(let i = 0 ; i < string.length;i++){
        let current = string[i];
        if(string.length == 0){
            return ""
        }
        if(current == string[i]){
            dic[current] = "";
        }
    }
    let allKeys = Object.keys(dic);
    let word = allKeys.join("")
    return word
}

console.log(dedupe("holla"))