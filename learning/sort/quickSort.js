// quick sort 
// you must chose a pivot (any random element that you want )

//then compare then pivote to the other element in the array

// if the element in the array are less than the pivot you make another array call it left or less than and place the items in the array that you just make 

//if the element is greater than the pivot make another array and call it  greater Thant or left and place the items in the array that you just made 

//select another pivot and keep doing the previous steps until you only have one element in that array or dont have any 

// then concatenate(make into one ) all the array into one 


// const quickSort = arr =>{
//     // go over the array and chose a pivot
//     //compare the pivot against all the other element in the array 
//     //then make 2 arrays left and right , or lower and higher
//     // then keep repeating the previous steps until you have one element in those arrays that you are making 
//     // then add all the arrays and pivots together in to one in the order that they are in 
//     //return that sorted array
// }







const quickSort = arr =>{     //time complexity is  complex  o(n log n)  worst case  

    //out put =[left recur( -6,pivot 2 = -2, pivot 1 = 4),main  pivot(8),recur right(20)]
    //condition to break out of the recursion
    if(arr.length < 2){
        return arr
    }
    //pivot == the last index in this case
    let pivot = arr[arr.length -1] // first,8,rec 1 left 4,-2
    //to sides of arrays that we have to make 
    let left = []//- 6,-2,4,,,,,,,-6,-2 ,-6
    let right = [] // 20,,,,,empty,
    //going over the length of the array
    for(let i = 0; i < arr.length -1 ; i++){
        //comparing pivot against the element of the array  to see if they have to go the left or to the right
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    //using recursion to keep doing the previous steps until we have 1 item in the array
    return [...quickSort(left), pivot,...quickSort(right)]
}


// console.log(quickSort([-6,20,-2,4,8]))// [-6,-2,4,8,20]
















const quicksort2 = (arr)=>{

    //select a pivot 
    //make  2 arras  left and right
    //sort the values of the main array into the 2 new arrays depending if the values in the array are less then or greater then 
    //repeat the previous steps until you get to a point were your array only has one element
    
    
    let pivot = arr[arr.length-1]
    let left = [],right= []

    if(arr.length < 2){
        return arr
    }
    for(let i = 0; i < arr.length - 1 ; i++){
        if(arr[i] > pivot){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    return [...quicksort2(left),pivot,...quicksort2(right)]
}




console.log(quicksort2([2,-1,4 ,39,28,3]))




///insert sort 
// ascending order way
// the fist value is asume that is sorted 

// then we check to the right or to the left depending on how is going to be sorted

//if the values that we have is greater that the value that is on the previous index  we place it to the right of the lowest index [1,30,4,5]

// if the value is not lower tha the current index we replace the value of the next index with the current index   and the  value that was replace qe store it in a variable if(30> 4)  [1,30,30,5]  value stored in the variable == variable = 4

//then we check if the the value that was  store in the variable is lower that the current if it is we place it to the right of the sorted values in the array 
//if(4< 30)  [1,4,30,5]

//this keeps going until all the the items  in the array are sorted 
//best case canario timpe complexity is  linear  o(n)  average is    o(n**2)   




///bubble sort 
// ascending order way

//we want to iterate over the array 

//we want to swap  the values of  that are inside the array  one by one if the current index is is bigger than the next 

// we repeat this until  al items are sorted

// best time complexities linear  o(n)  average is cuadrática  o(n**2)