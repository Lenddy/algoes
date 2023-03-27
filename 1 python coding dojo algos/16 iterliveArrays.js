/*
make a function that takes 2 arrays as parameters 
the out come should be the 2 arrays combine into one 

if the arrays are of different length do the same but the items in the array that the length is longer y shuld be the atems at the end of the conbine array 
*/



const combine =(arr1,arr2)=>{
    let i =0
    let match =[]
    // if one array has no length then  it will return the full array that has a length
    if(arr1.length == 0){
        console.log("arr1 is empty")
        return arr2
    }else if(arr2.length == 0){
        console.log("arr2 is empty")
        return arr1
    }else{
    const max = Math.max(arr1.length-1,arr2.length-1) //getting the largest number  you can put more than 2 numbers
    while(i <= max){
        //adding he value if to match if they are not undefine 
        if(arr1[i] != undefined){
            match.push(arr1[i])
        }if(arr2[i] != undefined){
            match.push(arr2[i])
        }
        i++
        }
    }
    return match
}

console.log(combine([1,3,5],[2,4,6,8,10]))