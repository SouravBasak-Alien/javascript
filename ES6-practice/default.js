//Old version

function number(numOne, numTwo){
	 numTwo = numTwo || 30; 
	let newNumber = numOne + numTwo
	return newNumber
}
let totalNumber =number(20)
console.log(totalNumber)

//new version

function value(numX,numY = 20) {
	let anotherNum = numX + numY;
	return anotherNum;
}
let userNum = value(40);
console.log(userNum);





function createUser(name,age = 21){

	const user = {};
	
	user.name = name;
	
	user.age = age;
	
	return user;
	
	}
	var hello = createUser ("alien")
console.log(hello)