


// if(number>0){
//     console.log(`positive number`);
// }
// else if(number<0){
//     console.log(`negative number`);
// }
// else(
//     console.log(`zero`)
// )

var number = 5;


var result = number>0 ? "positive" : number<0 ? "negative" : `zero`
console.log(result)

// another one

var num1 = 85;
var num2 = 95;
var num3 = 105;
// if(num1>num2){
//     console.log(`num1 is large`)
// }
// else if(num2>num3){
//     console.log(`num2 is large`)
// }
// else{
//     console.log(`num3 is large`)
// }

var newResult = num1>num2 ? `num1 is large` : num2>num3 ? `num2 is large` : `num3 is large`;
console.log(newResult);