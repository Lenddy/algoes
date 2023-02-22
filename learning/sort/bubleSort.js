






const bubbleSort = (arr)=>{
    //4 crating a variable to se if the items have been swap
    let swapped =true

    //5 creating a do{code}while(variable) loop to keep swapping until something happen this keeps loping until the given variable true turns to false and vice versa you can also use a a regular while loop
    while(swapped){
        swapped = false
        //1 start at the beginning of the arry and compare the following indexes to se witch is smaller;
        for(let i = 0 ; i < arr.length -1; i ++){
            // 2 if the following element is smaller than the previous that we swap them
            if(arr[i] > arr[i+1]){
                // using temporary variables
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i+1] = temp;
                //so that the loop can keep going
                swapped = true
            }
        }
    }
return arr
}

console.log(bubbleSort([-6,-2,4,8,20]))  //they must be place on ascending order  =>  [-6,-2,4,8,20]







const sorting = arr =>{

    let swap = true
    while(swap){
        swap = false
        for(let i = arr.length ; i > 0 ; i --){
            if(arr[i] > arr[i-1] ){
                let temp = arr[i]
                arr[i] = arr[i-1]
                arr[i-1] = temp
                swap = true
            }
        }
    }
    return arr
}

console.log(sorting([8,20,-2,4,-6]))