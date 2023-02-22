// make a function that takes an object as parameter 

//invert the key and the value pair  in a way so that the keys are the values and the values are the keys



const invertedObject = obj =>{
    let newObj ={}
    if(obj.length ==0){ //if this hits time complexity is o(1)
        return {}
    }
    for(let key in obj){//time complexity is o(n) memory o(n)
        newObj[obj[key]] = key
    }
    return newObj
}


console.log(invertedObject({name:"lenddy",lName:"Morales",age:19}))