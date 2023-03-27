// get a number 
// if the number is not a single digit keep adding  the number the 2 digist togherer untill you get one digit 


// you can resive decimals round them to  a whole number

//the fucntion is recursive 


const sumToOne = (num) => { //the time complexity is o(log n )
    num = Math.floor(num);
    if (num > 9) {
        let sum = 0;
        Array.from(num.toString()).forEach(digit => {
            sum += Number(digit);
        });
        if (sum > 9) {
            return sumToOne(sum);
        } else {
            return sum;
        }
    } else {
        return num;
    }
};

console.log(sumToOne(1569064583));

const sumToOne2 = (num) => { // mega duper big brain way (chat gpt)
    num = Math.floor(num);
    if (num <= 9) {
        return num;
    }
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sumToOne2(sum);
};
console.log(sumToOne2(1569064583));
let sum = 0

//this is what is going one here
console.log(sum +=1569064583 % 10);//3
console.log(sum += 156906458 % 10);//11
console.log(sum += 15690645 % 10);//16
console.log(sum += 1569064 % 10);//20
console.log(sum += 156906 % 10);//26
console.log(sum += 15690 % 10);//26
console.log(sum += 1569 % 10);//35
console.log(sum += 156 % 10);//41
console.log(sum += 15 % 10);//46
console.log(sum += 1 % 10);//47
console.log(sum) /// total sum is 

//we go again because the number is 47(the length i bigger than 1 )
sum =0
console.log(sum +=47 % 10);//7
console.log(sum += 4 % 10);//11

//we go again because the number is 11 (the length i bigger than 1 )

sum =0
console.log(sum +=11 % 10);//1
console.log(sum += 1 % 10);//11

//now the result is 2  and we return the number that we get that is less or == to 9

// description 
/*
num = Math.floor(num);: This line ensures that num is an integer by rounding it down to the nearest integer using the Math.floor() method.

if (num <= 9) { return num; }: This is the base case of the recursive function. If the input number is less than or equal to 9, then it is already a single digit and we can return it as the result of the function.

let sum = 0;: We initialize a variable sum to 0, which will be used to calculate the sum of the digits of the input number.

while (num > 0) { sum += num % 10; num = Math.floor(num / 10); }: This loop extracts each digit of the input number one by one using the modulo and integer division operators. In each iteration, the remainder of num divided by 10 gives us the rightmost digit of num, which we add to sum. We then update num by dividing it by 10 and rounding down to the nearest integer, which removes the rightmost digit from num. This process repeats until all digits of num have been extracted and added to sum.

return sumToOne(sum);: Once the sum of the digits of num has been calculated, we call the sumToOne function recursively with sum as the new input number. This repeats the process of extracting the digits of sum and adding them up until a single digit is obtained. Eventually, the base case of the function will be reached, and the final result will be returned as the result of the original call to sumToOne.
*/
