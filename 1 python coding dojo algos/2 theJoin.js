// the join

// given an array and  a crater( string) separate then elements in the array by the carácter




const theJoin=(arr, str) =>{
    let newStr = ""
    //given an array and a special carácter separate the items in the array  by  it
    // if the array is empty return and empty string 
    if(arr.length === 0){
        return ""
        // if it has one value return that value with no join
    }if(arr.length ==1){
        return `${arr[1]}`
    }else{
        // go over the entire array 
        for(let i = 0 ; i <= arr.length-1 ;i++){
            // separate the  items in the array  by the carácter
        newStr += arr[i] + str
        }
    }
    return newStr.slice(0,newStr.length-1)
}



console.log(theJoin([0,1,2,3,4,5,6],"-"))