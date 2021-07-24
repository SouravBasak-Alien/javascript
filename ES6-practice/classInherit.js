// class Country{
// 	constructor(){
// 		this.CountryName = "Brazil"
// 	}
// }


// class Player extends Country{
// 	constructor(name){
// 		super()
// 		this.name = name;
// 	}
// 	getFullInfo(){
// 		return this.name + ' ' + this.CountryName
// 	}
// }
// const playerOne = new Player("neymar");
// const playerTwo = new Player("pele");

// console.log(playerOne.getFullInfo());
// console.log(playerTwo);




//another one

class Title{
	constructor(){
		this.title = "captain";
	}
}
class Space extends Title{
	constructor(spaceName){
		super()
		this.name = spaceName;

	}
	getName(){
		return this.name + " " + this.title;
	}
}
const hello = new Space("alien");
console.log(hello.getName())





//another ClassInherit
class Country{
	constructor(){
		this.countryName = "Brazil"
		
	}
}

class Player extends Country {
	constructor(name){
		super()
		this.player = name
		
	}


	getFullInfo(){
		return this.player + " " + this.countryName
	}
}
const newPlayer = new Player("neymar")
console.log(newPlayer.getFullInfo())