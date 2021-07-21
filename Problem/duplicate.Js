var id = [15,16,14,13,25,16,158,15,454];
var newId = [];
for(var i = 0; i<id.length; i++){
   var element = id[i];
   var index = newId.indexOf(element);
   if(index == -1){
       newId.push(element);
   }
}
console.log(newId);





                                        
console.log(`another one`);


var players = [2,54,28,11,5,148,1,5,52,4,2,58,841,11,28];
var team = [];
for(var i = 0; i < players.length; i++){
    var newTeam = players[i];
    var result = team.indexOf(newTeam);
    if(result == -1){
        team.push(newTeam);
    }
}
console.log(team)



//another one 


var numX = [45,5,64,45,58,56,52,59,58,56];
var newNumX = [];
for(var i = 0; i<numX.length;i++){
    var newNumY = numX[i];
    var newResult = newNumX.indexOf(newNumY);
    if(newResult == -1){
        newNumX.push(newNumY);
    }

}
console.log(newNumX)


//another one
var roll = [11,25,16,14,25,11,84,16,18,16];
var newRoll =[]
for(var i = 0; i<roll.length; i++){
    var newElement = roll[i];
    var anotherRoll = newRoll.indexOf(newElement);
    if(anotherRoll == -1){
        newRoll.push(newElement)
    }
    
}
console.log(newRoll)