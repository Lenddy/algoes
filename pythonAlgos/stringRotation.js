// make a function that takes to parameter one is a string a the other is a number 
//the last index of the string should be move to the front depending on what number is given 
// if possible fine a way to not rotate the string if the number given is bigger than the length of the string 

const rotate = (str,num)=>{
    let list = []
    let result = str.split("")
    console.log(num % str.length)
    //loop the length of the str parameter
    for(let i = 0;i < num % str.length ; i ++){
        //we want to make the last index of the string became the first when a number is given 
        result.unshift(result.pop())
        list.push(result)
    }
    console.log(list)
    return result.join()
}


console.log(rotate("LENDDY2",11))
