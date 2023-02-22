// Map

// similar to objects

// maps are order pair of key value pair they both can be of any data type

// to retrieve a value you can use the key of tha value

// iterable, and can be ues with a for of loop



// 1to create a new Map
//     const map = new Map([["a",1],["b",2]]) //optionals accepts an array as its argument/parameter //if more than one array is given you must have a parent array/nested arrays/[[],[]]
//     //* the arrays must be of length 2,array[0] = key  array[1] = value

// 2 to iterate and log the key value pairs
//     for(let [key,value] of map){
//         console.log(`${key}: ${value}`)
//     }

// 3 to add new key value pair
//     map.set("c",3)//method not set data structure


// 4 to check if a key exits in the map
//     map.has("a") //to log console.log()//return a boolean

// 5 to delete key:value pair 
//     map.delete("b")//deletes the key:value pair by the key name 

// 6 to see the size of the map;
//     map.size//to log console.log()//return a number representing the size

// 7 to delete all the key:value pair 
//     map.clear()


const map = new Map([["a",1],["b",2]])//optionals accepts an array as its argument/parameter //if more than one array is given you must have a parent array/nested arrays/[[],[]]
// //* the arrays must be of length 2,array[0] = key  array[1] = value

map.set("name","lenddy") // adding
console.log(map.size,"size") //cheeking the size/length
console.log(map.has("name"))//cheeking to see if the key:value is on the map
map.delete("b") //deletes specific key and it value
map.clear()//deletes every thing in the map

for(const [key,value]of map){//to iterate and log the key value pairs
    console.log(key,value)
}