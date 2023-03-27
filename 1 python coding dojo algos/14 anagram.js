/*
make a function that takes two strings 
one in an order(does not have to be in order)
and one in ramdomise with the dame character 
if the strings are of different length return false 
if they have the same length but have different letters return false
*/



const anagram =(str,str2)=>{
    let match = 0
    if(str.length !== str2.length){
        return false
    }else{
        for(let i = 0 ; i < str.length;i++){
            for(let n = 0; n < str2.length;n++){
                if(str[i].toLowerCase() == str2[n].toLowerCase()){
                    match ++
                }
            }
        }
    }
    if(match == str.length && match == str2.length){
        return true
    }
    return false
}

console.log(anagram("Hola", "alho"))


