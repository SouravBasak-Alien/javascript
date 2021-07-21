function anotherNum(num){
    for (let i = 0; i < num.length; i++) {
        const number = num[i];
        if(number % 2 == 0){
            console.log(number, "even number")
        }
        else{
            console.log(number, "odd number")
        }
   }         
}


var num = [5,2,55,2,1,8,4,6,];

anotherNum(num)

var friendAge = [22,25,19,20,23,30];
anotherNum(friendAge)
