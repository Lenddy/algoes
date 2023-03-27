/*
Missing value 
you are given an array of length n that contains in no particular order, integers from 0 to n one integer value is missing quickly determine an return the missing value
*/




// const missingValue= arr =>{
//     if(arr.length === 0 ){ //checks that the array is not empty
//         return null
//     }
//     const dict = {}
//     let lowest = null;
//     for(let num of arr){ //going over the array once 
//         dict[num] = true //adding the values to a dictionary and setting the values to true
//         if(lowest == null || num < lowest){ //cheking to se if there is a lowest number in the array
//             lowest = num; //setting lowest to be the lowes number in the array
//         }
//     }for (let i= lowest;i < arr.length + lowest; i++){
//         if(dict[i] != true){
//             return i
//         }
//     }
//     return null
// }

// console.log(missingValue([-3,-1,0,1,2]))



const missingValue = arr => {
    if (arr.length === 0) {
        console.log("Array is empty, returning null");
        return null;
    }

    const dict = {};
    let lowest = null;

    for (let num of arr) {
        dict[num] = true;
        console.log(`Adding ${num} to dict`);
        console.log("the dictionary is now",dict);
        if (lowest == null || num < lowest) {
            lowest = num;
            console.log(`Updating lowest to ${lowest}`);
        }else{
            console.log(`lowest still ${lowest} `)
        }
    }
    console.log(`this is the len + lowest ${arr.length + lowest}`)

    for (let i = lowest; i < arr.length + lowest; i++) {
    console.log(`checking for the value ${i}`);
        if (dict[i] !== true) {
        console.log(`Returning missing value ${i}`);
        return i;
        }
    }
    console.log("No missing value found, returning null");
    return null;
    };

console.log(missingValue([3,2,10,9,6,4,5]));
