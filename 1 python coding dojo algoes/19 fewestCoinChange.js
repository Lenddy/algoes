/*
given an int to represent how much change is needed 
calculate the fewest number of coins needed to create that change 
using U.S standard 
*/

// const money={ 
//     quatre:quatre, //25
//     dime:dime,// 10
//     nickle:nickle ,//5
//     penny: penny//5
// }

const fewestCoinChange = cent => {
    const change = {};
    if (cent >= 25) {
        change.quatre = Math.floor(cent / 25);
        cent %= 25;
        console.log("cent is now",cent %= 25);
    }
    if (cent >= 10) {
        change.dime = Math.floor(cent / 10);
        cent %= 10;
        console.log("cent is now",cent %= 10);
    }
    if (cent >= 5) {
        change.nickle = Math.floor(cent / 5);
        cent %= 5;
        console.log("cent is now",cent %= 5);
    }
    if (cent >= 1) {
        change.penny = cent;
    }
    return change;
};

console.log(fewestCoinChange(98));





const fewestCoinChange2 = cent =>{
        const quatre = 25;
        const dime = 10;
        const nickle = 5;
        const penny = 1;
        const change ={}
        let loop = true
        // let sum = cent
        let sum = 0
        while(loop){
                if(sum + quatre <= cent){
                        sum += quatre
                        change.quatre = (change.quatre || 0) + 1
                    }else if(sum + dime <= cent){
                            sum += dime
                            change.dime = (change.dime || 0) + 1
        }else if(sum + nickle <= cent){
                sum += nickle
                change.nickle = (change.nickle || 0) + 1
            }else if (sum + penny <= cent){
                    sum += penny
            change.penny = (change.penny || 0) + 1
        }else{
            loop = false
        }
    }
    return change
}


console.log(fewestCoinChange2(98))




// make a object that hass funtion for calculating the money    and have an and funtion that add new  ways to calculate change depending on the type of the curency 


// for example         this funtion that will need a contries name  or a string and to add a dinamicaly amount of  if satements depending on how many numbers is given  that will          if (cent >= 25) {
//     change.amountName = Math.floor(cent / amount );
//     cent %= amount ;
//     console.log("cent is now",cent %= amount );
// }        


// and at the it will make a new key  with the name of the contry or string inputed in the object that will have a funtiion that will be able to  give you the amount of money that you need to give 


// const countryChanges ={}

// // Function to add country change function to object
// const addCountryChange = (country, ...coins) => {
//     let total = coins.reduce((acc, coin) => acc + coin.value, 0);
//     const changeFunc = amount => {
//       const coinCounts = {};
//       if (amount >= total) {
//         coins.forEach(coin => {
//           if (amount >= coin.value) {
//             const coinName = coin.name + (coin.value > 1 ? 's' : '');
//             coinCounts[coinName] = Math.floor(amount / coin.value);
//             amount %= coin.value;
//           }
//         });
//       }
//       return coinCounts;
//     };
//     countryChanges[country] = changeFunc;
//   };
  
//   // Usage
//   addCountryChange('USA', { name: 'quarter', value: 25 }, { name: 'dime', value: 10 }, { name: 'penny', value: 1 });
//   addCountryChange('Canada', { name: 'quarter', value: 25 }, { name: 'dime', value: 10 }, { name: 'nickel', value: 5 }, { name: 'penny', value: 1 });
//   console.log(countryChanges.USA(26)); // {quarters: 2, dimes: 1, pennies: 18}
//   console.log(countryChanges.Canada(68)); // {quarters: 2, dimes: 1, nickels: 1, pennies: 3}


// Function to add country change function to object
// const addCountryChange = (country, ...coins) => {
//     const total = coins.reduce((acc, coin) => acc + coin.value, 0);
//     const changeFunc = amount => {
//       if (amount === null || amount === undefined) {
//         return {};
//       }
//       const coinCounts = {};
//       if (amount >= total) {
//         coins.forEach(coin => {
//           if (amount >= coin.value) {
//             const coinName = coin.name + (coin.value > 1 ? 's' : '');
//             coinCounts[coinName] = Math.floor(amount / coin.value);
//             amount %= coin.value;
//           }
//         });
//       }
//       return coinCounts;
//     };
//     countryChanges[country] = changeFunc;
//   };
  
//   // Usage
//   addCountryChange('USA', { name: 'quarter', value: 25 }, { name: 'dime', value: 10 }, { name: 'penny', value: 1 });
//   addCountryChange('Canada', { name: 'quarter', value: 25 }, { name: 'dime', value: 10 }, { name: 'nickel', value: 5 }, { name: 'penny', value: 1 });
//   console.log(countryChanges.USA()); // {}
//   console.log(countryChanges.Canada(0)); // {}
//   console.log(countryChanges.USA(null)); // {}
//   console.log(countryChanges.Canada(undefined)); // {}
//   console.log(countryChanges.USA(68)); // {quarters: 2, dimes: 1, pennies: 18}
//   console.log(countryChanges.Canada(68)); // {quarters: 2, dimes: 1, nickels: 1, pennies: 3}






