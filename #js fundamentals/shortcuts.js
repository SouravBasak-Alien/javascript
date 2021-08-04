const active = true;
const money= 500;
// if (money > 200 ){
// 	console.log("biriyani")
// }
// else{
// 	console.log("alu vorta")
// }

// condition ? true : false...........................


let food = money > 200 ? "biriyani" : "alu vorta";
// biriyani



// let status = active ? activeStatus : inactiveStatus
// function turnary
//  active ? activeStatus() : inactiveStatus()



 let status = active || 5;
//  true


// convert String to number
const number = +"51"



// convert number to String
const numText  = 51 + ""
console.log(numText)



// default parameter
function add(num1, num2 = 15) {
	return num1 + num2
	
}
add(52)

// output 52,15