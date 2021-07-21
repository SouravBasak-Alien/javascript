function value(num) {
	another = num*3
	return another
}
const userNum = value(10);
console.log(userNum);







const newNumber = num => num*2;
const result = newNumber(5)
console.log(result)


const add = (x,y = 20) => x + y;
const addNum = add(10)
console.log(addNum);



const addTwo = () => 6;
const addTwoNum = addTwo();
console.log(addTwoNum)