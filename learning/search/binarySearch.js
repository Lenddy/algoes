//binary search

// What is meant by binary search?
// Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one. We used binary search in the guessing game in the introductory tutorial.





const binarySearch =(sortArr,target)=>{ //the time complaxity is of o(log n)  be cause the size of the input  being reduce by 2 every iteration
    let  left = 0;
    let right = sortArr.length -1;

    while(left <= right){
        let middle = Math.floor((left + right) / 2)
        console.log(`try `)
        console.log(`middle is ${middle} because ${left} + ${right} / 2 = ${Math.floor((left + right) / 2)}`)
        if(target == sortArr[middle]){
            return `${middle} ${sortArr[middle]}`
        }
        if(target < sortArr[middle]){
            right = middle - 1
            // console.log(right = middle - 1)
        }else{
            left = middle +1
            // console.log(left = middle + 1)
        }
    }
    return -1
}


console.log(binarySearch([1,2,3,4,5,6,7,8,10],4))