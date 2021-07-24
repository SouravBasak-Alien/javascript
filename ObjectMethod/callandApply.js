const normalPerson = {
	firstName : "Cristiano",
	lastName: "Ronaldo",
	fullName : function(){
		console.log(this.firstName, this.lastName)
	}
}
normalPerson.fullName();
// output
// Cristiano Ronaldo;


const starPlayer ={
	firstPlayerName : "Neymar",
	lastPlayerName : "jr",
	playerSalary : 5000000,
	PlayerCharge : function(amount) {
		this.playerSalary = this.playerSalary - amount
		return this.playerSalary
	}
}
starPlayer.PlayerCharge(2500000);
console.log(starPlayer.playerSalary)
// outPut
// 2500000