// var factorial = 1;
// for ( var i = 1; i <= 10; i++){
//     var factorial = factorial*i;
//     console.log(i, factorial)
// }


// function
// function factorial(num){
//     var factorial = 1;
//     for ( var i = 1; i <= num; i++){
//     var factorial = factorial*i;
    
//     }
//     return factorial;
// }
// var number = factorial(10);

// console.log(number)


// while
function factorial(n){
        var i = 1;
    var fact= 1;
    while(i <= n){
    var fact = fact*i
    
    i++
    }
    return fact;
}
var num = factorial(20);
console.log(num)





function newNum(o){
        var number = 1;
    for (var i = 1; i<=o; i++){
        var number = number*i;

        
    }
    return number
}
var hello = newNum(10);
console.log(hello)



var j = 1;
for (var i = 1; i<=5; i++){
    var j = j+i;
    console.log( i, j)
}



// function realNumber(n){
//   if (realNumber == 0 ){
//       return 1;
//   }
//   else{
//       realNumber = (n-1)*n;
//   }
// return realNumber
// }
// var re = realNumber(10);
// console.log(re)