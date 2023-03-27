//make a function than takes 2 arrays as parameters 

//from the first array make the keys of an object and from the 2 make the values of those keys

//if the array is  is empty  or if the 2 arrays are not the same length return an empty object




const zipArr = (arr,arr2)=>{ //time complexity o(n) memory o(n)
    let obj ={}
    if(arr.length && arr2.length < 1 || arr.length != arr2.length ){ //if this hits is o(1)
        return {}
    }else{
        for(let i =0;i<arr.length ;i++){
            obj[arr[i]] = arr2[i]
        }
    }
    return obj
}


console.log(zipArr([1,true,"Lenddy"],["number",'boolean',"string"]))