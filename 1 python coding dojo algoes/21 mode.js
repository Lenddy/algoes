/*
    mode 
    fine the value/s that appear the most in a array
*/

// time complexity is O(n)
const mode = arr =>{
    if(arr.length === 0|| arr.length === 1 ){
        return arr
    }
    const dict ={};
    const newArr = []
    for(let item of arr){
        dict[item] = (dict[item] || 0) +1 //check if false works's latter
    }
    let highest = Math.max(...Object.values(dict))
    for(let key in dict){
        if(dict[key] == highest){
            newArr.push(parseInt(key))
        }
    }
    return newArr
}
console.log(mode([1,2,3,1,3]))







//   time complexity is O(n log n)
const mode2 = arr => {
    if (arr.length === 0 || arr.length === 1) {
        return arr;
    }
    const dict = {};
    const newArr = [];
    for (item of arr) {
        dict[item] = (dict[item] || 0) + 1;
    }
    let highest = Math.max(...Object.values(dict));
    for (let key in dict) {
        if (dict[key] === highest) {
            newArr.push(parseInt(key));
        }
    }
    if (newArr.length === 1 || highest === 1) {
        return newArr;
    }
    return newArr.sort((a, b) => a - b);
};

console.log(mode2([-1,2,3,-1,3,1]))





//  if the array only contains positive numbers  time complexity is o(n)
const mode3 = arr => {
    if (arr.length === 0 || arr.length === 1) {
        return arr;
    }
    const freq = new Array(Math.max(...arr) + 1).fill(0);
    const newArr = [];
    let highest = 0;
    for (const item of arr) {
        freq[item]++;
        if (freq[item] > highest) {
            highest = freq[item];
        }
    }
    for (let i = 0; i < freq.length; i++) {
        if (freq[i] === highest) {
            newArr.push(i);
        }
    }
    if (newArr.length === 1 || highest === 1) {
        return newArr;
    }
    return newArr;
};


console.log(mode3([1,2,3,1,3,1]))