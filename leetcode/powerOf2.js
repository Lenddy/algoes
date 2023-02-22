// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.




// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].



const powerOf2 = (arr, t)=>{
    //keep track of the curent number 
    // let dic = {}
    let current = []
    //go over the array 
    for(let i = 0 ; i < arr.length;i++){
        current = arr[i]
        for(let n = 0; n < arr.length;n++){
            // console.log(arr[i] + arr[n] )
            if(arr[i] + arr[n] == t){
                current[i] = i
            }
        }
        // dic.key = arr[i]
        // console.log(dic)

    }
    return current
    //fine 2 numbers that ad up to be == to the target

    //return the the index of the numbers


}





var twoSum = function(nums, target) {
    const res = {};
    for(let i=0; i<=nums.length; i++){
        console.log(`this is the log ${res[nums[i]] }`)
        if(res[nums[i]] >= 0){
            return [res[nums[i]], i]
        }
        
        res[target - nums[i]] = i;
    }
};


console.log(twoSum([2,3,4,5,6,7,8],6))