// Fibonacci Sequence

// the Fibonacci Sequence consists on summing the 2 previous number to to get the next number  

// Fibonacci Sequence of 1 is [0] of 2 is [0,1] of 3 is [0,1,1] of 4 is [0,1,1,2] 


// const fSequence = n =>{
//     //given a number (n) fine the first element (n) in the Fibonacci Sequence
//     let Sequence = [0] 
//     if(n === 1){ // if the input is 1 then the time complexitie would be constant because we are not adding  anithing and just returning the value that is in the array 
//         return Sequence
//     }else{// else if is more than 1 it would be  o(n) => linear because the array grows in length  as to mach the input 
//         for(let i = Sequence.length ; i < n ; i++){
//             if(Sequence.length == 1){
//                 Sequence.push(1)
//             }else{
//                 let sum = Sequence[Sequence.length - 1] +  Sequence[Sequence.length - 2]
//                 Sequence.push(sum)
//             }
//         }
//     }
//     return Sequence 
// }


// console.log(fSequence(10))



// alt


const Sequence = n =>{
    let Sequence = [0,1]
    for(let i = 2; i < n; i++){  //time compolexitie would be o(n) liner because the array grows in length to match the input (n)
        Sequence[i] = Sequence[i-1] +  Sequence[i-2]
        }
    return Sequence 
}

console.log(Sequence(6))










// const retry = (n)=>{
//     let list = [0,1]
//     for(let i = 2; i <= n;i++){
//         list[i] = list[i - 1] + list[i -2];// index 2 does not exits and this create it 
//     }
//     return list
// }

// console.log(retry(5))