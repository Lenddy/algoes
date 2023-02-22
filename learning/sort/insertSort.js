// insert sort work by  assuming that the values in the first index in a given array  is already sorted 

// then you check the following number to see if it is  lower or higher depending  on if it is sorted in ascending or deciding order

// ascending route if it is lower that the next index you do nothing but if it isn't you replace the next index  with the previous index

//you store the current and the next index values in variable

// then you replace  next  value with the current value or shift the current value to the right 

// you check to se i the next value is lower than the previous values that you replace 

// example  [1,6,2,5]  => [1,6,6,5]  =>[1,2,6,5]









const insertSort=(arr)=>{
    let swap = true;
    while(swap){
        swap = false;
        for(let i = 1; i < arr.length-1;i++){
            let toInsert
            //is the current value bigger than the next value if so 
            if(arr[i] > arr[i+1] ){
                //store the next index in a variable
                toInsert = arr[i+1]
                //then shift the current value to the right
                arr[i+1] = arr[i]
                //then check to se if the the store value that vas replace is lower that then first index arr[0]
                if(toInsert > arr[0]){
                    //!try this with   the current index or  the seconde index arr[1] to se what changes
                    arr[i] = toInsert
                    swap = true
                }
            }
        }
    }
    return arr
}

// console.log(insertSort([-6,20,8,-2,4]));







const insertSort2=(arr)=>{
        for(let i = 1; i < arr.length;i++){//1 == 1, 2==2,
            let toInsert = arr[i] //1 = 20,2 == 8
            let j = i -1// 1 = 0, 2 == 1
            while(j >= 0 && arr[j] > toInsert){ //1== 0 ||and -6 > 20  is not skip lines 60 and 61,  2 == 1 || and 20 > 8, 3: -6> 8
                arr[j + 1] =  arr[j]    //2 = 8 = 20
                j  -= 1 // j = 0
            }
        arr[j + 1] = toInsert // 1 == 20 ,2 = 8
    }
    return arr
}

// console.log(insertSort2([-6,20,8,-2,4]))






const insertSorting3= arr =>{
    for(let i = 1; i < arr.length;i++){
        let toInsert = arr[i]
        let t = i -1;
        while(t >= 0 && arr[t] > toInsert){
            arr[t +1] = arr[t]
            t -= 1
        }
        arr[t + 1] = toInsert
    }
    return arr
}


console.log(insertSorting3([1,45,60,5,19,3,8,54]))