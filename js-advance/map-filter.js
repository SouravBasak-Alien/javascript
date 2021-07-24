// const number = [2,25,4,6,10,8];


// let squreNum = [];
// for (let i = 0; i < number.length; i++) {
// 	const newNum = number[i];
// 	const result = newNum * newNum;
// 	squreNum.push(result);
// }

//map .......................

// const number = [2,25,4,6,10,8];

// function square (element){
// 	return element * element;
// }
// const squreNum = number.map(square)

// console.log(squreNum)


//another...............

// const number = [2,25,4,6,10,8];


// const squreNum = number.map(function square (element,index,array){
// 	console.log(element,index,array);
// })



//filter................................



// const number = [2,25,4,6,10,8];
// const bigger = number.filter (x => x < 5);
// console.log(bigger)




// const number = [2,25,4,6,10,8];
// const smaller = number.filter (function smallNum(x) {
// 	x > 5
// });
// console.log(smaller)




//find...............


 const number = [2,25,4,6,10,8];
 const firstONe = number.find (x => x > 5);
 console.log(firstONe)