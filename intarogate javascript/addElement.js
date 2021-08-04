const Player = document.getElementById('Player');

const newPlayer = document.createElement('li');
newPlayer.innerHTML = 'ronaldinho'
Player.appendChild(newPlayer);

const add = document.getElementById('playerName');
const newAdd = document.createElement("h4")
newAdd.innerHTML = "star player name";
add.appendChild(newAdd)
//another


const country = document.getElementById('country')
const newCountry =document.createElement("p");
newCountry.innerHTML = "Brasil";
country.appendChild(newCountry)
newCountry.style.color="yellow"
newCountry.style.backgroundColor="green"
newCountry.style.textAlign="center"


var starPlayer =document.getElementById('Player')
var addPlayer = document.createElement("li")
addPlayer.innerHTML = 'rovarto carlos'
starPlayer.appendChild(addPlayer)
console.log(starPlayer)



