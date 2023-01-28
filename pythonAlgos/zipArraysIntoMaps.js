/* create a function that takes in 2 parameters that are arrays

they 2 arrays have to be the same length make a validation  that returns an empty object {}

if the arrays are empty also return and empty object

we are going to make a dictionary the values inside the first array are the keys and the values in the second array are the values of the dictionary
*/



const arrToDic = (arr1 = [], arr2 = [])=>{
    let dic = {}
    if(arr1.length !=  arr2.length || arr1.length && arr2.length == 0){
        return {}
    }
    else{
        for (let i = 0 ; i < arr1.length; i++){ //* you might need to change thi
                let key = arr1[i]; let value = arr2[i];
                dic[key] = value 
            }
        }
    return dic
}

console.log(arrToDic(["key1","key2","key3"],["value1","value2","value3"]));


export default arrToDic;