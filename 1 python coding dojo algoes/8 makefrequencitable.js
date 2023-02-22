//make a function that takes an array 

//you have to return an object with the key being the items in the array and the value is how many times do that item aperas

  



// const frequency = arr =>{
//     let i = 0
//     let dict = {}
//     //go over the array
//     while(i < arr.length){
//         let frequency = 0
//         //create and array with the current index value 
//         for( let n = 0; n < arr.length;n++){
//             if(arr[n] == arr[i]){
//                 frequency ++
//             }
//         }
//         dict[arr[i]] = frequency
//         i++
//     }
//     //check to see if that curent index value is repeated 
//     // if it is repeated then increatse the value of the key 
//     return dict
// }




const frequency = arr =>{
    let dict = {}
        //create and array with the current index value 
        for( let i = 0; i < arr.length;i++){
            dict[arr[i]] = (dict[arr[i]] || 0) +1
        }
    //check to see if that curent index value is repeated 
    // if it is repeated then increatse the value of the key 
    return dict
}



console.log(frequency(["a","a","a","b","B"]))