/*
make a function that take a string as a parameter 
you will have to check that the string  have no repeated letters no matter the casing
if it has letters that are repeated no matter on what order or number of repetitions return false
else  return true
empty string should return true
*/ 



// const isograms = str =>{
//     let current = ""
//     let count = 0
//     // if(str.length == 0 ){
//     //     return true
//     // }
//         for(let i = 0; i < str.length; i++){
//             current = str[i]
//             for( let n = 0; n < str.length ; n++){
//                 if(current == str[n]){
//                     count ++
//                 }
//                 if(count >= 2){
//                     return false
//                 }
//             }
//         }
//     return true
// }




// const isograms = str =>{
//     const splitted = str.split("")
    

//     splitted.filter(p => )
// }




const isograms = str =>{
    for(let i  = 0; i < str.length; ++i) {
    for(let n  =  i + 1; n < str.length; ++n) {
        console.log(n)
        if(str[i] === str[n]-1) {
        return false;
        }
    }
    }
    return true;
}

console.log(isograms("lendy"))