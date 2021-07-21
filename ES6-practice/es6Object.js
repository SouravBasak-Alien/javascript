class Student {
	constructor (sId,sName){
		this.id = sId;
		this.name = sName;
		this.country = "brazil" 
	}
}
const student1 = new Student(12,"neymar");
const student2 = new Student(15, "pele")
const student3 = new Student( 13, "ronaldinho")
console.log(student1, student2, student3)




//another one 
class Player{
	constructor(playerName,country){
		this.name = playerName;
		this.country = country;
		this.Player ="star player"
	}
}
const firstPlayer = new Player("neymar", "brazil");
const secoundPlayer = new Player("messi", "argentina");
console.log(secoundPlayer)