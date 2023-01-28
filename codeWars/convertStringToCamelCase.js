// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"




const string_to_pascal = (str)=>{
    let arr = str.split("")
    let letter = ""
    let newArr = []
    // console.log(arr)
    //iterate over the string
    for(let i = 0; i < arr.length;i++){
        //fine if there is a dash or a underscore
        if(arr[i]==="-"|| arr[i]==="_"){
            newArr =arr.splice(arr[i],1) 
            // letter += arr[i+1]
            // let join =arr.join()
            // letter =  join.toUpperCase() 
        }
        //take out the dash or a slash and make the the next letter capital 
        //return the new string
    }
    console.log(newArr)
}


console.log(string_to_pascal("you-did-a-good_job"))