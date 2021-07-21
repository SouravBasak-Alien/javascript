function reverseString(str){
    var reverse = "";
    for(var i = 0; i<str.length; i++){
        var char = str[i];
        reverse =  char + reverse  ;
    }
    return reverse;
}
var statement =`Hello alien how are you`;
var forAlien = reverseString(statement);
console.log(forAlien);



function number(numRevers){
    var newNumber = "";
    for (let i = 0; i < numRevers.length; i++) {
        const anotherNum = numRevers[i];
        newNumber = anotherNum + newNumber;
        
    }
    return newNumber
}
var userNum = number("pele, messi, neymar");
console.log(userNum)