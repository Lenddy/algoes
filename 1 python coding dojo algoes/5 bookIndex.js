// book index gives an array of numbers if the numbers are consecutive(123) we well return a string with the first number of the consecutive follow vy a dash("-") and the last number in the consecutive number  if no number is consecutive just return the numbers in the arrays with comas


const bookIndex =arr =>{
    //*check the items in the array
    // check if the current item is the sum of the last item + 1
    // stored the first item in a variable 
    //when the numbers stop being consecutive we store the last item 
    //then we add then current to stored items divided by a dash(-) in the middle
    //if the items are not consecutive we add the current item to the new string and place a coma at the end 
        for(let i = 0;i < arr.length;i++){
            for(let n = i+1;n < arr.length;n++){  
                console.log(i,n)
            }

        }

}


// console.log(i)
// console.log(n)
//     // if(arr[i] + 1 == arr[n] ){
//     //     console.log("is consecutive")
//     // }
//     // else{
//     //     console.log("is not")
//     // }
// }



console.log(bookIndex([123]))