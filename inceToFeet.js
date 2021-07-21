// var inches = 156;
// var feet = inches/12;

// console.log(feet);
//inches to feet
function inchesToFeet(inches){
    var feet = inches/12;
    return feet;
}
var senior = [125,254,36]
var seniorFeet = inchesToFeet(senior[2]);
console.log(seniorFeet)
var dadiFeet = inchesToFeet(122);
console.log(dadiFeet);
var dadaFeet = inchesToFeet(226);
console.log(dadaFeet);
//inches to mm


function inchesTomillimetert(mmInches){
    var millimeter = mmInches*25.4;
    return millimeter;
}
var finalAns = inchesTomillimetert(5);
console.log(finalAns);

