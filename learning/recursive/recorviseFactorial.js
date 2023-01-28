


const factorial = n =>{
	if(n === 1 || n === 0){
		return 1
	}
	else{
		return n * factorial(n-1)
	}			
	
}




console.log(factorial(6));  //out put => 24