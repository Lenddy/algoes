// // you need to invert the position of the key value pairs where the key is the values should be the key and where the value is the key should be the values 


// // you need to take in a parameter that is a dictionary 


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




const reverse = (dic = {})=>{
    let list1 = Object.keys(dic) //getting the keys of the dictionary
    let list2 = []  //making a list to add the values of the dictionary to it 
    for(let i = 0; i < list1.length;i++){ //checking the length of the dictionary
        list2[i] = dic[list1[i]]; //assigning the values of the dictionary to be push to the list
    }
    return arrToDic(list2,list1)//using previous function to to make 2 arrays into a dictionary
}

console.log(reverse({hello:"hola", Lenddy:"Yddnel "}));






cons = ziparray = (ar1,ar2)=>{
    let dic = {}
    if(ar1.length != ar2.length || ar1.length && ar2.length == 0){
        return {}
    }
    else{
        for(let i = 0 ; i < ar1.length; i++){
            dic[ar1[i]] = ar2[i];
        }
    }
    return dic
}



console.log(ziparray([1,2,3,4],["one","two","three","four"]));


