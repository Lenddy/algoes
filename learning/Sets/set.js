// Set

// Sets are like arrays but unlike arrays  they need to have unique values

// you can store the same data types that you can in an arrays

// the order that you insert something does not means that is the same order that it will appear

// are iterables

// searching and deleting is faster than doing it in an arrays


// 1 to create a Set
//     const set = new Set([1,2,3])//optionally accepts and array

// 2 to log the values 
//     for(let item of set){
//         console.log(item) //output 1,2,3
//     }

// 3 to add and element to the set
//     set.add(4) //adding element 4 to the set
//         if you try to add a duplicate it will be ignored

// 4 to check if the set has an item
//     set.has(4) //if you console.log it will return true or false 

// 5 to delete and item 
//     set.delete(3)//deletes the item that was given to delete

// 6 to check the size of the set 
//     set.size //if you console.log it will return the number of items in the set (length) 

// 7 to delete everything in the set
//     set.clear()//deletes every thing in the set 



const set = new Set([1,2,3]);//optionally accepts and array

set.add(4)//adding
set.add(["hello",1])//adding
console.log(set.has(3),"has")//checking if the item is on the set returns true or false
console.log(set.size,"size")
set.delete(2)//deleting specific item
set.clear()//to delete everything

for( let item of set){
    console.log(item)// login every item item set one by one
}


console.log(set)//login every item in set and the .size/length


















