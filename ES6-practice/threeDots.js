//Old version
const playerOne = "pele";
const playerTwo = "neymar"
const playerThree = "messi";
const allPlayer = playerOne.concat(playerTwo).concat(playerThree);
console.log(allPlayer)


//new version
const NumberOne =[ 65,12,56];
const NumberTwo = [55,52,12];
const NumberThree = [45,25,15];
const allNumber = [...NumberOne,...NumberTwo,...NumberThree];

console.log(allNumber)




//another one 
const numX = [25];
const numY = [28];
const numZ = [30];
const totalNum = [...numX,...numY,...numZ]

console.log(totalNum)