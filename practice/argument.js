function newNumber(num1, num2){
    var sum = 0
   for (let i = 0; i < arguments.length; i++) {
       const num = arguments[i];
       sum = sum + num
       
   }
    return sum
}
var number =newNumber(25,26,58,52,51,42);
console.log(number)


//another
function anotherNum (numX,numY){
    var sumone = 0
    for (let i = 0; i < arguments.length; i++) {
      const zNum   = arguments[i];
      
       sumone = sumone + zNum
        
    }
    return sumone
}
const hello = anotherNum(25,4,45,6,89,52)
console.log(hello)







function player(playerOne , playerTwo){
    let allPlayer = '';
    for (let i = 0; i < arguments.length; i++) {
        const playerName = arguments[i];
         allPlayer = allPlayer + " " + playerName;
    }
    return allPlayer
}
var totalPlayer = player('pele', 'neymar', 'ronaldiho', 'kaka', 'ribaldo', 'ronaldo');
console.log(totalPlayer)












function userName (firstName,lastName){
    const fullName = firstName + " " + lastName;
    return fullName;
}
const nam = userName('Captain','Alien');
console.log(nam)