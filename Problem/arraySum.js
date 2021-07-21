


function sumOfArray(numbers){
        var add = numbers[0];
    for (var i = 0; i<numbers.length; i++){
        var sum = numbers[i];
        add = sum + add;

    }
    return add
}
var numbers = [25,36,45,89,23,54];
var result = sumOfArray(numbers);
console.log(result);




// another one

var numX = [45,5,64,52,59,58,56];
var newNumX = numX[0];
for(var i = 0; i<numX.length; i++){
    var numY = numX[i];
    newNumX = numY + newNumX
}
console.log(newNumX);

//another one

var newNumX = [52,25,65,45,96];
var newNumY = newNumX[0];
for(var i = 0; i<newNumX.length; i++){
    var element = newNumX[i]
    var newNumY = element+newNumY
}
console.log(newNumY)








var id = [ 25,15,56,85,69,48,65];
var newId = id[0];
for(var i = 0; i<id.length;i++){
    var element = id[i];
    newId = element + newId;

}
console.log(newId)