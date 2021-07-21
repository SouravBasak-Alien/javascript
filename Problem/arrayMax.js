var marks = [25,58,45,65,95,350,20,45,105,15,58];
var max = marks[0];
for (var i = 0; i<marks.length; i++){
    var element =   marks[i];
    if(element > max){
        max = element
    }
   
}
console.log(max);






var number = [25,632,548,1259,632,577,582,5545,11,42,5,1,584,51];
var big = number[0];
for(var i = 0; i<number.length; i++){
   var newNumber = number[i];
   if(newNumber > big){
       big = newNumber
   }
}
console.log(big)

//another one

var numX = [45,5,64,52,59,58,56];
var newNumX = numX[0];
for(var i = 0; i<numX.length; i++){
    var newNumZ =numX[i];
    if(newNumZ > newNumX){
        newNumX =newNumZ
    }
}
console.log(newNumX)

//another one
var numberX = [25,36,1,5,245,87,95]
var newNumberX = numberX[0];
for(var i =0; i<numberX.length; i++){
    var anotherNum = numberX[i]
    if(anotherNum>newNumberX){
        newNumberX = anotherNum
    }
}
console.log(newNumberX)