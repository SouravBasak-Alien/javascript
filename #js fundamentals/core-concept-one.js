// varriable : var, let, const.............................
let money = 20;
money = 18 ;
console.log(money); 
// output 18
// ...........................................................
const name = "alien";
console.log(name)
// output alien
let isConfident  = false;

// object.....................
const person = {
	name : "alien",
	age: 21,
	city: "space"
}
const statement = `this person name is ${name} and age ${person.age}`;
// output = this person name is alien and age 21

// condition............................................................
if( money > 20 && age>= 25){

}
else{

}

// array.................................................................
const number = [20,25,0,516];
const friends = ["neymar", "pogba","messi"]
// Object Array..........................................................
const product = [{name:"laptop",price:550},{name:"mobile",price:350},{name:'watch',price:250}]


// loop forLoop & whileloop.............................................
for (let i = 0; i < friends.length; i++) {
	const friend = friends[i];
	console.log(friend)
	
}

// function...............................................................
function add(numONe, numTwo) {
	return numONe + numTwo
}
const result = add(45+25);
console.log(result)
// output 70


// arrow function......................................................
const add2 = (numONe, numTwo ) => numONe + numTwo;
// or............................
const fiveTimes = (num) => num * 5;
// or......................
const doMath = (x,y) => {
	const sum = x+y;
	return sum*2;
}