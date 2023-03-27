/*
make a function that takes a sorted arrays 
you job is to fine all the duplicates and reduce them to have only one of those duplicates  [1,1,2,3,3]=> [1,2,3]
*/


// const dedupeSorted = arr =>{ //o(n**2)
//     let dic = {}
//     let newArr = []
//     if(arr.length == 0 || arr.length == 1){
//         return arr
//     }else{
//         for(let i = 0; i < arr.length; i++){ //adds the numbers to a dict 
//             dic[arr[i]] = (dic[arr[i]] || 0) +1
//         }for(let key in dic){ //adds the keys to an array and change them to an integer
//         newArr.push(parseInt(key))
//         }
//     }
//     return newArr
// }



//! alt
const dedupeSorted = arr =>{ //o(n)
    let dic = {}
    let newArr = []
    if(arr.length == 0 || arr.length == 1){
        return arr
    }else{
        for(let i = 0; i < arr.length; i++){ //adds the numbers to a dict
            if(arr[i] in dic){
                dic[arr[i]]++
            }else{
                dic[arr[i]] = 1
                newArr.push(parseInt(arr[i]))
            }
        }
    }
    return newArr
}






console.log( dedupeSorted([1,1]))