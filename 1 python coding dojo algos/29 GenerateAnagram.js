/*
make a funtion that takes a string and 

you should return a array with the maximun  number of times that the word can be scramble

example 
"and" = ["and","adn","dan","dna","nad","nda"]
*/




const getCombinations = (str) => {
    if (str.length === 1) return [str]; //returns an array 

    const char = str.charAt(0);
    console.log(char)
    const remainingStr = str.slice(1);
    console.log(remainingStr)
  
    const combinations = getCombinations(remainingStr);
    console.log(combinations)

  
    const updatedCombinations = combinations.flatMap((combination) => {

      const updatedCombination = [];
        console.log(updatedCombination)
      for (let i = 0; i <= combination.length; i++) {
        const start = combination.slice(0, i);
        console.log(start);
        const end = combination.slice(i);
        console.log(end);
  
        updatedCombination.push(start + char + end);
      }
  
      return updatedCombination;
    });
  
    return updatedCombinations;
  };
  
  

  console.log(getCombinations("andl"))