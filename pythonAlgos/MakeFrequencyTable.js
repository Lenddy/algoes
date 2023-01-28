/*
you will have a function that take 1 array as a parameter

you will have to see how many times each value in the array is repeated

once you know how many times each item is repeated you need to make a dictionary

the keys of the dictionary are the items that are in the array and the values of the keys are the amount of times the items were repeated in the array

upper case and lower case are different values

if you get an empty array you should return an empty dictionary
*/


const  frequency = (arr = [])=>{
    let dic = {};
    for(let i = 0; i < arr.length; i++){
        let current = arr[i];
        let repeated  = 0
        if(arr.length == 0){
            return {}
        }
        else{
            for(let item of arr){
                if(item == current){
                    repeated ++
                    dic[current] = repeated;
                }
            }
        }
    }
    return dic;
}


console.log(frequency(["a","b","B","b","c","d","a"]))