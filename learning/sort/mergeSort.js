/*Merge sort 

divide the the main array into sub arrays  with each containing one element (an array with one element is considered sorted)

repeatedly merge the sub array to produce new sorted sub arrays until there is only on sub array remanding ,(tha will be the sorted array )

*/


/*
1 keep divide the array until  have on value that value is sorted 
    [-6,20,8,-2,4]
    divide the array in have to get to arrays 
        L[-6,20] and R[8,-2,4] none of them have a length == 1 keep dividing
        they are == 1l  ,L[-6] and ,==1 R[20],    ==1   R,l[8] and , !=1  r[-2,4] this one continues 
        r, l [-2]  and [4]


2 when all of the sub arrays.length are  == 1 we create a temp empty array and check the values in sub arrays.length ==1 

3 copare the  two sides to see with side contains the lowest value 

4 push the value tha is lowest to the empty array and pop the values from its current array 

5 if one of the sub arrays is empty  push the value of the sub array that is not empty

6 when both the sub arrays are empty you have the sorted sub array

l[-6,20]     right[-2,4,8]

7 repeat  the previous steps

the end array   with is the temp array with  hase all the items sorted

*/


const mergeSort = arr =>{ //time complexity is o(n log n )
    if(arr.length < 2){ // condition  to get out of the recursion 
        return arr
    }
    let mid = Math.floor((arr.length)/2)// middle point in the array 
    let l = arr.slice(0,mid)    // left array
    let r = arr.slice(mid)  // right array
    return merge(mergeSort(l),mergeSort(r));  //using  a helper function  merge
}

const merge = (lArr,rArr)=>{// helper function
    let sortedArr = [] // empty temporal array  than contains the sorted arrays
    while(lArr.length && rArr.length){ //keeps running until one  of the array is empty  
        if(lArr[0] <= rArr[0]){ //condition that checks if the item in the leftArr  index[0]  is lower than the item in the rightArr index[0]
            sortedArr.push(lArr.shift()) //adds the left arr item to sortedArr and pops it from the left index
        }else{//condition that checks if the item in the rightArr index[0] is lower than the item in the leftArr index[0]
            sortedArr.push(rArr.shift())//adds the right arr item to sortedArr and pops it from the right  index
        }
    }
    return [...sortedArr,...lArr,...rArr]
}


console.log(mergeSort([8,20,-2,4,-6]))







// you need to divide the given array in half until you nva only one item in the array
//create a helper function  that allows you to sort the sub array
//we create a 

const  mergeSort2 = arr =>{
    let mid = Math.floor((arr.length) / 2)
    let l = arr.slice(0,mid)
    let r = arr.slice(mid)
    if(arr.length< 2){
        return arr
    }
    return sorted(mergeSort2(l),mergeSort2(r))
}


const sorted=(left,right)=>{
    let sortedArr =[]
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}



// console.log(mergeSort2([4,1,-4,3,10,5]))