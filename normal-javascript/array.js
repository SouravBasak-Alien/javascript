var friendAge = [ 23, 27, 29, 18, 36 ];
var neymarAge = friendAge[2]
friendAge[1] = 30;
var position = friendAge.indexOf(18)  
console.log (position);

var boysAge = [63, 50, 89, 65, 44];
boysAge.push(50, 36);
boysAge.pop();
console.log(boysAge.length);
var player = [`messi`, `kaka`,  `cr7`, `neymar`, `t.silba`, `pele`];
player.splice( 4,2,);
console.log(player);
var football = [`brazil`, `argentina`, `jermany`, `Bangaldesh`, `india`];
var newTeam = football.slice(2,4)
console.log(newTeam)




var numbers = [1,2,3,4,5];

var result = numbers.slice(0,5);

console.log(result)


var phoneName = [`mi`, `vivo`, `apple`, `jio`, `nokia`, `symphony`];
var model =phoneName.slice(1,3);
console.log(model);