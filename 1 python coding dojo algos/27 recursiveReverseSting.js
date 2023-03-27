/*
reverse string recursive 
make a function that returns a string reverse to the original 
*/



const recursiveReverseString =str =>{
    if(str.length == 0)return"";
    // .charAt() returns the letter a specific index
    else return str.charAt(str.length - 1) + recursiveReverseString(str.substring(0,str.length-1))//substring
}

console.log(recursiveReverseString("hello"))




